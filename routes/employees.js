const express=require('express')
const router=express.Router()

const Employee=require("../model/employee")


router.get("/", async(req,res)=>{
    try{
        let employees = await Employee.find().toArray();
        
        res.send(employees);
        
    }
    catch(err)
    {
        res.send("Error is:"+err)
    }
})
router.post('/',async (req,res)=>{
    const employee= new Employee({
        name:req.body.name,
        designaton:req.body.designaton
    })
    try{
        const e1=employee.save()
        res.send(e1);
        res.json(e1);
    }
    catch(err){
        console.log(err);
    }

})
router.patch('/update/:id',async (req,res)=>{
    try{
        const id=req.body.id;
        const updatedData=req.body;
        const options={new:true };

        const result=await employee.findByIdAndUpdate(id,updatedData,options);
        res.send(result);
    }
    catch(err){
        console.log(err);
    }
})
router.delete('/delete/:id',async (req,res)=>{
    try{
        const id=req.body.id;
        const data= await employee.findByIdAndDelete(id);
        res.send(`Data with name ${data.name} has been deleted`);

    }
    catch(err){
        console.log(err);
    }
})

module.exports=router