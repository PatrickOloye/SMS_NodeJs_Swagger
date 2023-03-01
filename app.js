'use strict';
const express = require('express');
const cors = require('cors');
const AdminRoute = require('./admin/routes');
const TeacherRoute = require('./teachers/routes');
const studentRoute = require('./student/routes');
const CourseRoute = require('./courses/routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const app = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT || 9090;

app.use(express.json());
dotenv.config();
app.use(cors());

/**
 * @swagger
 * /teacher:
 *  get:
 *    Summary: get teachers
 *    description: get all teachers
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: Array
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of teacher
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of teacher
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of teacher
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of teacher
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of teacher
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of teacher
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of teacher
 *                  example: " "
 * /student:
 *  get:
 *    Summary: get student
 *    description: get all student
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: Array
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of teacher
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of teacher
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of teacher
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of teacher
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of teacher
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of teacher
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of teacher
 *                  example: " "
 * /course:
 *  get:
 *    Summary: get student
 *    description: get all student
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: Array
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of teacher
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of teacher
 *                  example: ola
 *                description:
 *                  type: string
 *                  description: email of teacher
 *                  example: sh@gn.com
 */
/**
 * @swagger
 * /teacher:
 *  post:
 *    Summary: create  teacher
 *    description: create a teacher profile
 *    parameters:
 *      - email: email
 *        in: body
 *        type: string
 *        required: true
 *      - password: password
 *        in: body
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of teacher
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of teacher
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of teacher
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of teacher
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of teacher
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of teacher
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of teacher
 *                  example: " "
 * /student:
 *  post:
 *    Summary: create  student
 *    description: create a student profile
 *    parameters:
 *      - email: email
 *        in: body
 *        type: string
 *        required: true
 *      - password: password
 *        in: body
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of student
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of student
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of student
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of student
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of student
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of student
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of student
 *                  example: " "
 * /admin:
 *  post:
 *    Summary: create  admin
 *    description: create a admin profile
 *    parameters:
 *      - email: email
 *        in: body
 *        type: string
 *        required: true
 *      - password: password
 *        in: body
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of admin
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of admin
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of admin
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of admin
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of admin
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of admin
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of admin
 *                  example: " "
 * /course:
 *  post:
 *    Summary: create  course
 *    description: create a course
 *    parameters:
 *      - name: name
 *        in: body
 *        type: string
 *        required: true
 *      - description: description
 *        in: body
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of course
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of course
 *                  example: ola
 *                description:
 *                  type: string
 *                  description: details about
 *                  example: sh@gn.com

 */

/**
 * @swagger
 * /teacher/update/{id}:
 *  patch:
 *    Summary: update teacher
 *    description: update teacher profile
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of teacher
 *        type: string
 *        required: true
 *      - in: body
 *        name: teacher
 *        description: detail of teacher to be updated
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - state
 *            - gender
 *            - dateOfBirth
 *            - photo
 *          properties:
 *            name:
 *              type: string
 *            state:
 *              type: string
 *            gender:
 *              type: string
 *            dateOfBirth:
 *              type: string
 *            photo:
 *              type: string
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of teacher
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of teacher
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of teacher
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of teacher
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of teacher
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of teacher
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of teacher
 *                  example: " "
 * /student/update/{id}:
 *  patch:
 *    Summary: update student
 *    description: update student profile
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of student
 *        type: string
 *        required: true
 *      - in: body
 *        name: student
 *        description: detail of student to be updated
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - state
 *            - gender
 *            - dateOfBirth
 *            - photo
 *          properties:
 *            name:
 *              type: string
 *            state:
 *              type: string
 *            gender:
 *              type: string
 *            dateOfBirth:
 *              type: string
 *            photo:
 *              type: string
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of student
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of student
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of student
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of student
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of student
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of student
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of student
 *                  example: " "
 * /admin/update/{id}:
 *  patch:
 *    Summary: update admin
 *    description: update admin profile
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of admin
 *        type: string
 *        required: true
 *      - in: body
 *        name: admin
 *        description: detail of admin to be updated
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - state
 *            - gender
 *            - dateOfBirth
 *            - photo
 *          properties:
 *            name:
 *              type: string
 *            state:
 *              type: string
 *            gender:
 *              type: string
 *            dateOfBirth:
 *              type: string
 *            photo:
 *              type: string
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of admin
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of admin
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of admin
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of admin
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of admin
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of admin
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of admin
 *                  example: " "
 */

/**
 * @swagger
 * /admin/delete/{id}:
 *  delete:
 *    Summary: delete admin
 *    description: delete admin profile
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of admin
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of admin
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of admin
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of admin
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of admin
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of admin
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of admin
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of admin
 *                  example: " "
 * /student/delete/{id}:
 *  delete:
 *    Summary: delete student
 *    description: delete student profile
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of student
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of student
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of student
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of student
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of student
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of student
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of student
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of student
 *                  example: " "
 * /teacher/delete/{id}:
 *  delete:
 *    Summary: delete teacher
 *    description: delete teacher profile
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of teacher
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of teacher
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of teacher
 *                  example: ola
 *                email:
 *                  type: string
 *                  description: email of teacher
 *                  example: sh@gn.com
 *                state:
 *                  type: string
 *                  description: state of teacher
 *                  example: delta
 *                gender:
 *                  type: string
 *                  description: gender of teacher
 *                  example: male
 *                dateOfBirth:
 *                  type: string
 *                  description: DOB of teacher
 *                  example: 10-10-10
 *                photo:
 *                  type: string
 *                  description: photo of teacher
 *                  example: " "
 * /course/delete/{id}:
 *  delete:
 *    Summary: delete course
 *    description: delete course profile
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of course
 *        type: string
 *        required: true
 *    response:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: id of course
 *                  example: '53564536'
 *                name:
 *                  type: string
 *                  description: name of course
 *                  example: ola
 *                description:
 *                  type: string
 *                  description: details of course
 *                  example: 'this course is good'
 */
app.use('/api/SMS/student', studentRoute);
app.use('/api/SMS/admin', AdminRoute);
app.use('/api/SMS/teacher', TeacherRoute);
app.use('/api/SMS/course', CourseRoute);

mongoose.connect(process.env.MONGO_URI, () =>
  console.log('database connected')
);

app.listen(port, () => console.log('server started successfully'));
