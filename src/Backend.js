const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()
const port = 5000;


const app = express();

app.use(cors());
app.use(express.json());


//-----adminRoutes----
const adminRoutes=require('./Routes/adminRoutes')
app.use('/',adminRoutes)


//..........patientRoutes........
const patientRoutes = require("./Routes/patients")
app.use('/',patientRoutes)




mongoose
  .connect("mongodb://127.0.0.1/DoctorsVilla")
  .then((result) => console.log("db connected"))
  .catch((err) => console.log("error", err));
app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
