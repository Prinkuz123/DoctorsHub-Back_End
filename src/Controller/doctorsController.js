const doctorsSchema = require("../Model/doctorsSchema");

//--------addDoctors by admin--------

const addDoctors = async (req, res) => {
  const newDoctor = new doctorsSchema(req.body);
  const Dr = await newDoctor.save();
  res.json({
    status:"success",
    message:"Doctor's data added successfully",
    data:Dr
  });
};

//--------get all Doctors---------
const getAllDoctors = async (req, res) => {
  const doctors = await doctorsSchema.find();
  res.json({
    status:"success",
    message:"doctors details",
    data:doctors,
  });
};

//--------getDoctors by id----------

const getDoctorsById = async (req, res) => {
  const id = req.params.id;
  const doctors = await doctorsSchema.findById(id);
  res.json({
    status:"success",
    message:"doctorsById",
    data:doctors
  });
};

//---update doctorsdata----
const updateDoctors = async (req, res) => {
  const id = req.params.id;
  const updateDoc = req.body;
  const doctors = await doctorsSchema.findByIdAndUpdate(id, updateDoc, {
    new: "true",
  });
  res.json({
    status:"success",
    message:"updatedDoctors",
    data:doctors
  });
};

//---------deleteDoctors--------
const deleteDoctors = async (req, res) => {
  const id = req.params.id;
  const doctors = await doctorsSchema.findByIdAndDelete(id);
  res.json({
    status:"success",
    message:"deleted doctor's data successfully",
    data:doctors
  });
  console.log(doctors);
};

module.exports = {
  addDoctors,
  getAllDoctors,
  getDoctorsById,
  updateDoctors,
  deleteDoctors,
};
