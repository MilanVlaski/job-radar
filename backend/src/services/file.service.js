const fs = require("fs");
const path = require("path");
const {v4: uuidv4} = require('uuid');
const multer = require("multer");
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require("../utils/catchAsync");
const {File} = require('../models');
const express = require('express');


const app = express();
// const processDownload = () => {
//     app.get('/download/:filename', async (req, res) => {
//         try {
//             const filename = req.params.filename;
//             // const currentFileURL = import.meta.url;
//             const currentDir = path.dirname(new URL(currentFileURL).pathname);
//             const filePath = path.join(currentDir, '../../public/uploads', filename);
//
//             if (fs.existsSync(filePath)) {
//                 res.download(filePath, 'cv.txt', (err) => {
//                     if (err) {
//                         res.status(404).send('File not found');
//                     }
//                 });
//             } else {
//                 res.status(404).send('File not found');
//             }
//         } catch
//             (error) {
//             res.status(500).send('Internal server error');
//         }
//     });
// }
    const createFile = async (fileBody) => {
        return File.create(fileBody);
    };

    const upload = multer({
        storage: multer.memoryStorage(),
        fileFilter: (req, file, cb) => {
            cb(null, true);
        }
    });

    const uploadFiles = (fields) => upload.fields(fields);

    const processUpload = catchAsync(async (req, res, next) => {
        if (!req.files) return next();

        for (const field in req.files) {
            let files = [];

            const filePromises = req.files[field].map(async (file) => {

                const {buffer, ...fileBody} = file;
                const extension = path.extname(fileBody.originalname);
                const filename = uuidv4() + extension;
                fileBody.filename = filename;

                const newFile = await createFile(fileBody);

                try {
                    await fs.promises.mkdir(`/${__dirname}/../../public/uploads/`, {recursive: true});
                    await fs.promises.writeFile(`/${__dirname}/../../public/uploads/${filename}`, buffer);
                } catch (err) {
                    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error while uploading file.');
                }

                return newFile._id;
            });

            const fileId = await Promise.all(filePromises);
            files.push(...fileId);

            if (files.length === 1) {
                req.body[field] = files[0];
            } else {
                req.body[field] = files;
            }
        }

        next();
    });


    module.exports = {
        processUpload,
        uploadFiles,
       // processDownload,
    };
