const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
  },
  state: {
    type: String,
  },
  gender: {
    type: String,
  },
  photo: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
