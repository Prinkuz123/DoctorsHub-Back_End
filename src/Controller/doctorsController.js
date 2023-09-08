const doctorsSchema = require("../Model/doctorsSchema");

//--------addDoctors by admin--------

const addDoctors = async (req, res) => {
  const newDoctor = new doctorsSchema(req.body);
  const Dr = await newDoctor.save();
  res.json(Dr);
};

//--------get all Doctors---------
const getAllDoctors = async (req, res) => {
  const doctors = await doctorsSchema.find();
  res.json(doctors);
};

//--------getDoctors by id----------

const getDoctorsById = async (req, res) => {
  const id = req.params.id;
  const doctors = await doctorsSchema.findById(id);
  res.json(doctors);
};

//---update doctorsdata----
const updateDoctors = async (req, res) => {
  const id = req.params.id;
  const updateDoc = req.body;
  const doctors = await doctorsSchema.findByIdAndUpdate(id, updateDoc, {
    new: "true",
  });
  res.json(doctors);
};

//---------deleteMedicines--------
const deleteDoctors = async (req, res) => {
  const id = req.params.id;
  const doctors = await doctorsSchema.findOneAndDelete(id);
  res.json(doctors);
};

module.exports = {
  addDoctors,
  getAllDoctors,
  getDoctorsById,
  updateDoctors,
  deleteDoctors,
};
