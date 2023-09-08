const mongoose=require('mongoose')

const Doctors=new mongoose.Schema({
    username:String,
    qualification:String,
    specialisation:String,
    age:Number,
    address:String
})
const doctors=mongoose.model("doctors",Doctors)
module.exports=doctors