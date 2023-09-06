const express=require('express')
const admin=require('../Controller/adminController')
const patient=require("../Controller/patientController")
const medicine=require('../Controller/medicineController')
const router=express.Router()


router.post('/admin/login',admin.adminlogin)
router.get('/admin/patients',admin.getAllPatients)
router.get('/admin/patients/:id',admin.getPatientbyId)
router.post('/admin/medicine',medicine.addMedicine)
router.get('/admin/medicine',medicine.getAllMedicines)
router.get('/admin/medicine/:id',medicine.getMedicinesById)





module.exports=router