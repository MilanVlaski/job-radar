const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const fileSchema = mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
      trim: true,
    },
    fieldName: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: Number,
    },
    mimeType: {
      type: String,
      // trim: true,
    },
    encoding: {
      type: String,
      // trim: true,
    },
  },
  {
    timestamps: true,
  }
);

fileSchema.plugin(toJSON);
fileSchema.plugin(paginate);

const File = mongoose.model('File', fileSchema);

module.exports = File;
