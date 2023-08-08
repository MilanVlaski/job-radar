const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');

const requirementsSchema = mongoose.Schema({
  specialization: {
    type: String,
    trim: true,
    maxLength: [30, 'The field must be less than 30 characters long']
  },
  experience: {
    type: String,
    trim: true,
    maxLength: [30, 'The field must be less than 30 characters long']
  },
  education: {
    type: String,
    trim: true,
    maxLength: [30, 'The field must be less than 30 characters long']
  },
  skills: {
    type: String,
    trim: true,
    maxLength: [30, 'The field must be less than 30 characters long']
  },
  language: {
    type: String,
    trim: true,
    maxLength: [30, 'The field must be less than 30 characters long']
  },
  drivingLicense: {
    type: Boolean,
  }
});


requirementsSchema.plugin(toJSON);
requirementsSchema.plugin(paginate);

const Requirements = mongoose.model('Requirements', requirementsSchema);
module.exports = Requirements;


