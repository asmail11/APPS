const express = require('express');
const app = express();
const employeeRoute = express.Router();

let Employee = require('../models/Employee');

employeeRoute.route('/create').post((req, res, next) => {
    Employee.create(req.body,(error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
});

employeeRoute.route('/').get((req, res, next) => {
    Employee.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
});

employeeRoute.route('/read/:id').get((req, res, next) => {
Employee.findById(req.params.id, (error, data) => {
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
})
});

employeeRoute.route('/update/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
});

employeeRoute.route('/delete/:id').delete((req, res, next) => {
    Employee.findOneAndRemove(res.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
}) ;
