const express=require('express')

const mongoose=require('mongoose')
const app=express()
const url="mongodb://127.0.0.1:27017/restapi"
mongoose.connect(url)

mongoose.connection.on("open",()=>{
    console.log("connected to database")
})

app.use(express.json())
let employeeRouter=require("./model/employee")
app.use('./employees',employeeRouter)

app.listen(8084,()=>{
    console.log('server is listening on port 8084');
})