
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
    shortid:{
        type:String,
        require:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        require:true
    },
    TC:[{time:{type:Number}}]
},{timestamps:true});
const SC = model("url",schema)
module.exports = SC;
