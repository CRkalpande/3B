const mongoose=require('mongoose')
const employeeSchema= new mongoose.Schema({
    name: String,
    designation: String
})

module.exports=mongoose.model("Employee",employeeSchema)