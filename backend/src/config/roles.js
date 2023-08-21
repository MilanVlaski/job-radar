const allRoles = {
  user: ['getJobApplications', 'createJobApplications', 'getJobs', 'getJob', 'getSavedJobs', 'manageSavedJobs'],
  employer: ['getJobs', 'manageJobs','getJob', 'manageEmployers','getJobApplications', 'getJob','manageJobs', 'manageJob','deleteJob'],
  admin: ['getUsers', 'manageUsers', 'removeJob', 'getJobs','getJobApplications', 'manageJobApplications', 'manageEmployers', 'getJobs'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
