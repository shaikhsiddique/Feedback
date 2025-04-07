const mongoose = require('mongoose');
const Joi = require('joi');

const feedbackSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Full name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  message: {
    type: String,
    required: [true, 'Feedback message is required'],
    trim: true,
    minlength: [10, 'Feedback message must be at least 10 characters long']
  }
}, {
  timestamps: true
});

// Joi validation schema
const validateFeedback = (data) => {
  const schema = Joi.object({
    fullName: Joi.string()
      .min(2)
      .required()
      .messages({
        'string.base': 'Full name should be a type of text',
        'string.empty': 'Full name is required',
        'string.min': 'Full name must be at least 2 characters long'
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': 'Please enter a valid email',
        'string.empty': 'Email is required'
      }),
    message: Joi.string()
      .min(10)
      .required()
      .messages({
        'string.min': 'Feedback message must be at least 10 characters long',
        'string.empty': 'Feedback message is required'
      })
  });

  return schema.validate(data);
};



const Feedback = mongoose.model('Feedback', feedbackSchema);

// Export both
module.exports = {
  Feedback,
  validateFeedback
};
