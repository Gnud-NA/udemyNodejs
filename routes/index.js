var express = require('express');
var router = express.Router();

const loginController = require('../controller/login.controller');
const indexController = require('../controller/index.controller');

const Categories = require('../models/categories.model');
const course = require('../models/course.model');
/* GET home page. */

router.get('/', function(req, res, next) {
  const categories = Categories.getCategories();
  const courses =  course.getCourse();

  res.render('index', {categories, courses});
});

router.get('/detail/id',  indexController.getCourseDetail);

router.get('/login', loginController.getLogin);

module.exports = router;
