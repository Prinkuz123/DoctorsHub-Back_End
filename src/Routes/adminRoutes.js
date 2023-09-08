const express=require('express')
const admin=require('../Controller/adminController')
const patient=require("../Controller/patientController")
const medicine=require('../Controller/medicineController')
const tryCatch=require('../Middleware/tryCatch handler')
const doctor=require('../Controller/doctorsController')
const router=express.Router()


router.post('/admin/login',tryCatch(admin.adminlogin))
router.get('/admin/patients',tryCatch(admin.getAllPatients))
router.get('/admin/patients/:id',tryCatch(admin.getPatientbyId))

router.post('/admin/medicine',tryCatch(medicine.addMedicine))
router.get('/admin/medicine',tryCatch(medicine.getAllMedicines))
router.get('/admin/medicine/:id',tryCatch(medicine.getMedicinesById))
router.put('/admin/medicine/:id/update',tryCatch(medicine.updateMedicineData))
router.delete('/admin/medicine/:id/delete',tryCatch(medicine.deleteMedicines))



router.post('/admin/doctor',tryCatch(doctor.addDoctors))
router.get('/admin/doctor',tryCatch(doctor.getAllDoctors))
router.get('/admin/doctor/:id',tryCatch(doctor.getDoctorsById))
router.put('/admin/doctor/:id/update',tryCatch(doctor.updateDoctors))
router.delete('/admin/doctor/:id/delete',tryCatch(doctor. deleteDoctors))





module.exports=router