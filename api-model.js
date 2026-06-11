const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true,
        enum : ["male", "female"]
    },
    picture : {
        type : String,
        required : true
    }
});

const userdata = mongoose.model('userdata', userSchema);
module.exports = userdata;