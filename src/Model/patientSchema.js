
const mongoose=require("mongoose")
const PatientSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    age:{type:Number,required:true},
    phone:{type:Number,required:true},

})
const PatientModel=mongoose.model("patient",PatientSchema)
module.exports= PatientModel