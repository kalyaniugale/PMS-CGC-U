const mongoose = require('mongoose');

const interviewExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // references the 'User' model
    required: true
  }
});

module.exports = mongoose.model('InterviewExperience', interviewExperienceSchema);
