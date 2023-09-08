const medicine = require("../Model/medicineSchema");

medicineSchema = require("../Model/medicineSchema");

// ----adding medicine-----

const addMedicine = async (req, res) => {
  const medicine = new medicineSchema(req.body);
  const addedMedicine = await medicine.save();
  res.json(addedMedicine);
};

// ----get all medicines----------
const getAllMedicines = async (req, res) => {
  const medicines = await medicineSchema.find();
  res.json(medicines);
};

// ----get medicines by Id---------
const getMedicinesById = async (req, res) => {
  const medicinesId = req.params.id;
  const medicinedata = await medicineSchema.findById(medicinesId);
  res.json(medicinedata);
};

//-------updatemedicine data--------

const updateMedicineData = async (req, res) => {
  const id = req.params.id;
  const medicines = req.body;
  const updateMedicine = await medicine.findByIdAndUpdate(id, medicines, {
    new: "true",
  });
  res.json(updateMedicine);
};

//--------deleteMedicines------

const deleteMedicines = async (req, res) => {
  const id = req.params.id;
  const deletedMedicine = await medicine.findByIdAndDelete(id);
  res.json(deletedMedicine);
};

module.exports = {
  addMedicine,
  getAllMedicines,
  getMedicinesById,
  updateMedicineData,
  deleteMedicines,
};
