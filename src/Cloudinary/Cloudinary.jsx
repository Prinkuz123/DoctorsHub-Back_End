require ('dotenv').config()
const cloudinary=require('cloudinary')

cloudinary.config({
    cloud_name:process.env.cloudinary_username,
    cloud_api:process.env.cloudinary_apikey,
    api_secret:process.env.cloudinary_password

})
const image=""

(async function run(){
    const result=await cloudinary.uploader.upload(image)
    console.log(result)
})()