let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

//Student Model

let studentSchema = require('../Models/Student');

//CREATE Student
router.route('/create-student').post((req, res, next) =>{
    studentSchema.create(req.body, (error, data) =>{
        if(error) {
            return next(error)
        } else{
            console.log(data)
            res.json(data)
        }
    })
});

//READ Students

router.route('/').get((req, res) => {
    studentSchema.find((error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//Get single Student

router.route('/edit-student/:id').get((req, res) => {
    studentSchema.findById(req.params.id,(error, data) => {
        if(error) {
            return next(error)
        }else {
            res.json(data)
        }
    })
});