const patientSchema = require("../Model/patientSchema");
const doctorsSchema = require("../Model/doctorsSchema");

//-----------adminlogin---------
const adminlogin = (req, res) => {
  const username = process.env.adminusername;
  const password = process.env.adminpassword;

  const userName = req.body.username; 
  const passWord = req.body.password;

  // const{username}=req.body
  // console.log(username)

  if (username == userName && password == passWord) {
    return res.status(200).json({
      status: "success",
      message: "Admin logged in successfully",
    });
  }

  res.json({
    status: "failure",
    message: "wrong password or username",
    error_message: "username or password mismatch",
  });
};

//-----get all patients------
const getAllPatients = async (req, res) => {
  const patients = await patientSchema.find();
  return res.status(200).json({
    status: "success",
    message: "patient details",
    data: patients,
  });
};

//------get patientBYId------
const getPatientbyId = async (req, res) => {
  const id = req.params.id;
  const patientbyId = await patientSchema.findById(id);
  res.json({
    status:"success",
    message:"patientdetailsById",
  data:patientbyId});
};

//----updatePatientData----
const updatePatientData=async(req,res)=>{
  const id =req.params.id;
  const doc=req.body
  const updatedPatient= await patientSchema.findByIdAndUpdate(id,doc,{new:"true,"})
  res.json({
    status:"success",
    message:"patientdataUpdated",
    data:updatedPatient
  })

}

//------delete Patient------
const deletePatient=async (req,res)=>{
  const id=req.params.id
  const dltPatient=await patientSchema.findByIdAndDelete(id)
  res.json({
    status:"success",
    message:"patient deleted successfully",
    data:dltPatient
  })
  console.log(dltPatient)
}



module.exports = { adminlogin, getAllPatients, getPatientbyId,updatePatientData ,deletePatient};
