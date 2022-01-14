const mongoose = require ('mongoose');

// Schema
const memberSchema = new mongoose.Schema({
    firstname : {type : String, required :true},
    lastname : {type : String, required :true},
    email: {type : String, required :true},
    password: {type:String,required:true},
    role: {type:String,enum:["admin" ,"user"], default:"user"},
});

// Model
const member = mongoose.model('member',memberSchema);

module.exports = member;