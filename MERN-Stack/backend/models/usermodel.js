const mongoose = require("mongoose");
// create a schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        unique:true,
        required : true
    },
    age:{
        type:Number,
        required : true
    }

},{timestamps: true});
// create model
const user = mongoose.model('user',userSchema)
module.exports = user;