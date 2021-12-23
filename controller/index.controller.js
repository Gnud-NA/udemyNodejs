const Categories = require('../models/categories.model');
const courses = require('../models/course.model');



function getCourse(req, res, next) {
   const courses =  courses.getCourse();
   res.render('index', {courses});
}

function getCourseDetail(req, res, next) {
    const ID = req.params.id;
    console.log('đây là id: ',ID);
    //truy vấn db để dữ liệu bài viết theo id
    const data = courses.getCourseDatail(ID);
    res.render('courseDetail', {data: data});
}

module.exports = {
    getCourse,
    getCourseDetail
}