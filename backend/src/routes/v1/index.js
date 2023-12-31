const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const jobApplicationRoute = require('./job-application.route');
const jobRoute=require('./job.route');
const employerRoute = require('./employer.route');
const savedJobRoute = require('./job-saved.route');
const fileRoute=require('./file.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/job-applications',
    route: jobApplicationRoute,
  },
  {
    path:'/jobs',
    route: jobRoute,
  },
  {
    path:'/employers',
    route: employerRoute,
  },
  {
    path:'/saved-jobs',
    route: savedJobRoute,
  },
  {
    path: '/files',
    route: fileRoute,
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
