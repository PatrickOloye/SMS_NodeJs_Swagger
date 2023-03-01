const asyncErrors = require('./errorController');
const Course = require('./model');
const mongoose = require('mongoose');

exports.getAllCourses = asyncErrors(async (req, res, next) => {
  const courses = await Course.find({})
    .populate('teacher')
    .populate('students');
  // .exec((err, courses) => {
  //   if (err) return res.status(500).json({ message: err.message });
  //   res.json(courses);
  // });
  if (!courses)
    return next(
      res.status(400).json({ message: 'there are no courses found' })
    );
  res.status(200).json(courses);
});

exports.getOne = asyncErrors(async (req, res) => {
  const id = req.params.id;
  await Course.findById(id)
    .populate('teacher')
    .populate('students')
    .exec((err, course) => {
      if (err) return res.status(500).json({ message: err.message });
      if (!course) return res.status(404).json({ message: 'Course not found' });
      res.json(course);
    });
});

exports.create = asyncErrors(async (req, res, next) => {
  const { name, description } = req.body;
  const newCourse = new Course({
    name,
    description,
  });
  await newCourse.save();
  res.status(200).json(newCourse);
});

exports.update = asyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const course = await Course.findByIdAndUpdate(id, req.body, { new: true })
    .populate('teacher')
    .populate('students');
  if (!course) return next(res.status(400).json({ msg: 'course not found' }));
  res.status(200).json({ msg: 'course successfully updated' });
  // .exec((err, course) => {
  //   if (err) return res.status(500).json({ message: err.message });
  //   if (!course) return res.status(404).json({ message: 'Course not found' });
  //   res.json(course);
  // });
});

exports.delete = asyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const course = await Course.findByIdAndDelete(id)
    .populate('teacher')
    .populate('students');
  if (!course) return next(res.status(400).json({ msg: 'course not found' }));
  res.status(200).json({ msg: 'course successfully deleted' });
  // .exec((err, course) => {
  //   if (err) return res.status(500).json({ err });
  // });
});
