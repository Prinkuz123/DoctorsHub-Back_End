const express=require('express')
const router=express.Router()
const patient=require('../Controller/patientController')
const tryCatch=require("../Middleware/tryCatch handler")


router.post("/patient/register",tryCatch(patient.patientRegister))
router.post("/patient/login",tryCatch(patient.patientlogin))

module.exports=router

