const asyncErrors = require('./errorController');
const mongoose = require('mongoose');
const Admin = require('./model');
const Student = require('../student/model');
const Teacher = require('../teachers/model');

exports.getAllTeachers = asyncErrors(async (req, res) => {
  await Teacher.find({}, (err, teachers) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(teachers);
  });
});

exports.getAllStudent = asyncErrors(async (req, res) => {
  await Student.find({}, (err, students) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(students);
  });
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.create = asyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(
      res.status(500).json({ msg: 'please input all details where necessary' })
    );

  const newTeacher = new Teacher({
    email,
    password,
  });
  await newTeacher.save();
  res.status(200).json({ msg: 'account created', data: newTeacher });
});

exports.getOne = asyncErrors(async (req, res, nest) => {
  const id = req.params.id;
  const teacher = await Teacher.findById(id);
  if (!teacher) return next(res.status(500).json({ msg: 'teacher not found' }));
  res.status(200).json(teacher);
});

exports.update = asyncErrors(async (req, res, next) => {
  //create error if user Posts password data
  if (req.body.password) {
    return next(
      res.status(400).json({
        message:
          'you cannot update your password here. please use the forget password route',
      })
    );
  }
  const filteredBody = filterObj(
    req.body,
    'name',
    'dateOfBirth',
    'state',
    'gender',
    'photo',
    'email'
  );

  // update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.delete = asyncErrors(async (req, res) => {
  const id = req.params.id;
  const teacher = await Teacher.findByIdAndDelete(id);
  if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
  res.json(teacher);
});
