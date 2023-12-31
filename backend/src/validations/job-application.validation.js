const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createJobApplication = {
  body: Joi.object().keys({
    job: Joi.required().custom(objectId),
    phoneNumber: Joi.string().required(),
    cv: Joi.required(),
    coverLetter: Joi.optional(),
    additionalDocument: Joi.optional()
  }),
};

const getJobApplications = {
  query: Joi.object().keys({
    user: Joi.string(),
    job: Joi.string(),
    sortBy: Joi.string(),
    populate: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getJobApplication = {
  params: Joi.object().keys({
    jobApplicationId: Joi.string().custom(objectId),
  }),
  query: Joi.object().keys({
    populate: Joi.string(),
  }),
};

const updateJobApplication = {
  params: Joi.object().keys({
    jobApplicationId: Joi.custom(objectId),
  }),
  body: Joi.object()
    .keys({
      phoneNumber: Joi.string(),
      cv: Joi.string(),
      coverLetter: Joi.string(),
      additionalDocument: Joi.string(),
      applicationPhase: Joi.string(),
    })
    .min(1),
};

const deleteJobApplication = {
  params: Joi.object().keys({
    jobApplicationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createJobApplication,
  getJobApplications,
  getJobApplication,
  updateJobApplication,
  deleteJobApplication,
};
