const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {jobService, requirementsService, employerService} = require('../services');
const {Employer} = require("../models");


const createJob = catchAsync(async (req, res) => {
  const {requirements, ...jobData} = req.body;
  const requirementsInstance = await requirementsService.createRequirements(requirements);
  const employer = await Employer.findOne({adminUser: req.user._id});
  const body = {employer: employer._id, requirements: requirementsInstance._id, ...jobData};
  const job = await jobService.createJob(body);
  res.status(httpStatus.CREATED).send(job);
});

const getJobs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'appDeadline']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await jobService.queryJobs(filter, options);
  res.send(result);
});

const getJob = catchAsync(async (req, res) => {
  const job = await jobService.getJobById(req.params.jobId);
  if (!job) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Job not found');
  }
  res.send(job);
});

const updateJob=catchAsync(async (req, res)=>{
  const job=await jobService.updateJobById(req.params.jobId, req.body);
  res.send(job);
});

const deleteJob=catchAsync(async (req, res)=>{
  await jobService.deleteJobById(req.params.jobId);
  res.status(httpStatus.NO_CONTENT).send();
})

module.exports = {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob
};
