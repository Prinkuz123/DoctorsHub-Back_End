const bcrypt = require("bcrypt");
const patientSchema = require("../Model/patientSchema");
const jwt = require("jsonwebtoken");
const medicine = require("../Model/medicineSchema");

//----Patient register-----

const patientRegister = async (req, res) => {
  const { username, password, email, address, age, phone } = req.body;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Username, password, and email are required." });
  }
  const identifyPatient = await patientSchema.findOne({ email: email });
  if (identifyPatient) {
    return res.json({
      status: "failure",
      message: "user already exist",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newPatient = new patientSchema({
    username: username,
    password: hashedPassword,
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
  });
};

// ......patientlogin......

const patientlogin = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  const Patient = await patientSchema.findOne({ email: email });

  if (!Patient || Patient.password !== password) {
    return res.json({
      status: "failure",
      message: "incorrect email or password",
    });
  }

  let Password = await bcrypt.hash(password, 10);

  bcrypt.compare(Password, Patient.password, (error) => {
    if (error) {
      return res.json({
        status: "failure",
        message: "incorrect password",
      });
    }
  });
  const token = jwt.sign({ email: email }, "patient", {
    expiresIn: "24h",
  });

  return res.status(200).json({
    status: "success",
    message: "logged in  successfully",
    data: token,
  });
};


//-----Add medicines to cart by patient------

// const addMedicineToCart=async(req,res)=>{
//   let medicineId=req.params.id
//   const medicine=await medicine.findById(medicineId)
//   if(!medicine){
//     return res.status(400).json({
//       status:"failure",
//       message:"some errror occured"
//     })
// }
// const user=req.body.username
// const Patient=await patient.findOne({username:user})
// if(Patient.cart.includes(medicineId)){
//   return res.status(400).json({
//     status:"failure",
//     message:"product already exist in the cart"
//   })
// }
// Patient.cart.push(medicineId)
// await Patient.save()
// return res.status(200).json({
//   status:"success",
//   message:"product successfully added to cart "
// })

// }


module.exports = { patientRegister, patientlogin };
