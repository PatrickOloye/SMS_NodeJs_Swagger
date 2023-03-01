const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
  },
  photo: {
    type: String,
  },
  state: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
