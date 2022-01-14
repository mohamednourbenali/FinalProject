const mongoose = require ('mongoose');

// Schema
const courseSchema = new mongoose.Schema({
    title : String,
    date : String,
    group : Number,
});

// Model
const course = mongoose.model('course',courseSchema);

module.exports = course;