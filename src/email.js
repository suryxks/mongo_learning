let mongoose=require('mongoose');
const { StringDecoder } = require('string_decoder');
let emailSchema=new mongoose.Schema({
    email:String    
})
module.exports=mongoose.model('Email',emailSchema);