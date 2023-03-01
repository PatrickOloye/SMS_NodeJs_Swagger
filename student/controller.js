const Student = require('./model');
const asyncErrors = require('./errorController');
const mongoose = require('mongoose');

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

  const newStudent = new Student({
    email,
    password,
  });
  await newStudent.save();
  res.status(200).json({ msg: 'account created', data: newStudent });
});

// exports.getAll = (req, res) => {
//   Student.find({}, (err, students) => {
//     if (err) return res.status(500).json({ message: err.message });
//     res.json(students);
//   });
// };

exports.searchStudent = asyncErrors(async (req, res, next) => {
  const users = await Student.find({ username: { $regex: req.query.userName } })
    .limit(10)
    .select('firstName lastName userName photo');

  res.json({ users });
});

exports.getOne = asyncErrors(async (req, res) => {
  const id = req.params.id;
  await Student.findById(id, (err, student) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  });
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
    'aboutMe',
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
  const student = await Student.findByIdAndDelete(id);
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});
