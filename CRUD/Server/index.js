const express=require('express')
const app=express()

//origin problem
const cors=require('cors')
app.use(cors())

//Health Check
app.get("/",(req,res)=>{
    //1.Data From Frontend

    //2.DB Logic

    //3.Data To Frontend
    res.send("Hello")
})

//Creating new prisma
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

//Fetch All Details
app.get('/students',async(req,res)=>{
    try{
        //1.Data from Frontend

        //2.DB Logic
        const fetchall=await prisma.Student.findMany()
        //3.Data to Frontend
        res.status(200).json({"message":"All Student Detail",data:fetchall})
    }
    catch(error){
        console.log(error)
    }
})

//Fetch Single Details by ID
app.get('/students/:id',async(req,res)=>{
    try{
        //1.Data From Frontend
        const {id}=req.params
        //2.DB Logic
        const fetchbyid=await prisma.Student.findUnique({
            where:{
                roll_no:parseInt(id)
            }
        })
        //3.Data To Frontend
        res.status(200).json({"message":"Student Details By ID",data:fetchbyid})
    }
    catch(error){
        console.log(error)
    }
})

//Create Details
app.use(express.json())
app.post("/",async(req,res)=>{
    try{
        //1.Data From Frontend
        const request=req.body
        //2.DB Logic
        const create=await prisma.Student.create({
            data:{
                name:request.name,
                std:request.std,
                section:request.section,
                marks:request.marks,
                percentage:request.percentage,
                father_name:request.father_name,
                father_age:request.father_age,
                father_occupation:request.father_occupation,
                mother_name:request.mother_name,
                mother_age:request.mother_age,
                mother_occupation:request.mother_occupation,
                total_income:request.total_income
            }
        })
        //3.Data To Frontend
        res.status(200).json({"message":"Created Successfully",data:create})
    }
    catch(error){
        console.log(error)
    }
})

//Update Details
app.put('/',async(req,res)=>{
    try{
        //1.Data From Frontend
        const request=req.body
        //2.DB Logic
        const update=await prisma.Student.update({
            where:{
                roll_no:request.roll_no
            },
            data:{
                name:request.name,
                std:request.std,
                section:request.section,
                marks:request.marks,
                percentage:request.percentage,
                father_name:request.father_name,
                father_age:request.father_age,
                father_occupation:request.father_occupation,
                mother_name:request.mother_name,
                mother_age:request.mother_age,
                mother_occupation:request.mother_occupation,
                total_income:request.total_income
            }
        })
        //3.Data To Frontend
        res.status(200).json({"message":"Updated Successfully",data:update})
    }
    catch(error){
        console.log(error)
    }
})

//Delete Details
app.delete('/',async(req,res)=>{
    try{
        //1.Data From Frontend
        const request=req.body
        //2.DB Logic
        await prisma.Student.delete({
            where:{
                roll_no:request.roll_no
            }
        })
        //3.Data To Frontend
        res.status(200).json({"message":"Deleted Successfully"})
    }
    catch(error){
        console.log(error)
    }
})

app.listen(3000)