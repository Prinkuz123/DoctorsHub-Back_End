const patientSchema=require("../Model/patientSchema")


//-----------adminlogin---------
const adminlogin=(req,res)=>{
    const username=process.env.adminusername
    const password=process.env.adminpassword

    const userName=req.body.username //TODO: learn destructure 
    const passWord=req.body.password

    console.log(userName)
    if(username==userName&&password==passWord){
        return res.status(200).json({
            status:"success",
            message:"Admin logged in successfully" })
    }
    
    res.json({
        status:"failure",
        message:"wrong password or username",
        error_message:"username or password mismatch",
        
    })

    
   
}

//-----get all patients------
const getAllPatients=async (req,res)=>{
    const patients =await patientSchema.find()
   return  res.status(200).json({
    status:"success",
    message:"patient details",
    data:patients
   })
}

//------get patientBYId------
const getPatientbyId=async(req,res)=>{
    const id=req.params.id
    const patientbyId=await patientSchema.findById(id)
    res.json(patientbyId)
}











module.exports={adminlogin,getAllPatients, getPatientbyId}