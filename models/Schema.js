const mongo = require('mongoose');


const schema = mongo.Schema({
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
const SC = mongo.model("url",schema)
module.exports = {SC}
