const express=require('express')
const router=express.Router()
const patient=require('../Controller/patientController')


router.post("/patient/register",patient.patientRegister)
router.post("/patient/login",patient.patientlogin)

module.exports=router

