const express=require('express')
const app=express()

const{PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const cors=require('cors')
app.use(cors())

//Health Check
app.get('/',(req,res)=>{
    //1.Data from frontend

    //2.DB logic

    //3.Data to frontend
    res.send("Hello")
})

//Display
app.get('/users',async(req,res)=>{
    try{
        //1.Data from frontend

        //2.DB logic
        const details=await prisma.User.findMany()
        //3.Data to frontend
        res.status(200).json({"message":"Details",data:details})
    }
    catch(error){
        console.log(error)
    }
})

app.use(express.json())
//Register
app.post('/register',async(req,res)=>{
    try{
        //1.Data from frontend
        const request=req.body
        //2.DB logic
        const newuser=await prisma.User.findUnique({
            where:{
                email:request.email
            }
        })
        if(newuser){
            res.status(500).json({"message":"User Already Exist"})
        }
        else{
            const data=await prisma.User.create({
                data:{
                    email:request.email,
                    password:request.password,
                    name:request.name,
                    phoneno:request.phoneno
                }
            })
            //3.Data to frontend
            res.status(200).json({"message":"Register Successfully",data:data})
        }
    }
    catch(error){
        console.log(error)
    }

})
//Login
app.post('/login',async(req,res)=>{
    try{
        //1.Data from frontend
        const request=req.body
        //2.DB logic
        const olduser=await prisma.User.findUnique({
            where:{
                email:request.email
            }
        })
        if(olduser){
            if(olduser.password===request.password){
                res.status(200).json({"message":"Welcome",data:olduser})
            }
            else{
                res.status(200).json({"message":"Password is Wrong"})
            }
        }
        else{
            res.status(400).json({"message":"No user Exist, please Register"})
        }
    }
    catch(error){
        console.log(error)
    }

})

app.listen(3000,()=>{
    console.log('server is running')
})