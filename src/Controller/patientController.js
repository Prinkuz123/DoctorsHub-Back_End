const patientSchema = require("../Model/patientSchema");

//----Patient register-----

const patientRegister = async (req, res) => {
    try{
  const { username, password, email, address, age, phone } = req.body;
 
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Username, password, and email are required." });
  }
  const  identifyPatient=await patientSchema.findOne({email:email})
  console.log(identifyPatient);
  if (identifyPatient){
    return res.json({
      status:"failure",
      message:"user already exist"
    })


  }


  const newPatient = new patientSchema({
    username: username,
    password: password,
    email: email,
    address: address,
    age: age,
    phone: phone,
  });
  await newPatient.save();
  // console.log(newPatient)
  res.json({
    status: "success",
    message: "Patient registered successfully now you can login",
  });} 
  catch (error) {
    console.error("Error during patient registration:", error);
    res.status(500).json({ message: "An error occurred during registration." });
}
}

// ......patientlogin......
const patientlogin=async (req,res)=>{
  try{
    const{email,password}=req.body
    console.log(email,password)
    const Patient=await patientSchema.findOne({email:email})


    if(!Patient || Patient.password !== password){
      
      console.log("login if condition")
     
      return res.json({
        status: "failure",
        message: "incorrect email or password"
      });
    }
    else{
     
      return res.status(200).json({
        status:"success",
        message:"logged in  successfully"
     
      })
    }
   
  }
  catch (error) {
    console.error("error occured during login", error);
    res.status(500).json({ message: "error occured during login" });
}
}



module.exports = {patientRegister,patientlogin };
