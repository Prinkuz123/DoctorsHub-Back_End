const mongoose = require("mongoose");
const medicineSchema = new mongoose.Schema({ 
    name: String,
    company:String, 
    price: Number
 });

    const medicine=mongoose.model("medicine",medicineSchema)
    module.exports=medicine