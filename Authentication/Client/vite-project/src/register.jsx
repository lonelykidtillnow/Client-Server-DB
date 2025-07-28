import { useState } from "react"
import "./tailwind.css"
import { Link, useNavigate } from "react-router-dom"

const Register=()=>{

    const navigate=useNavigate()

    const[value,setvalue]=useState({
        name:"",
        email:"",
        phoneno:"",
        password:""
    })

    async function register(){
        const req=await fetch('https://crud-using-postgresql-2.onrender.com/register',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(value)
        })
        const res=await req.json()
        alert(res.message)
        console.log(res.data)
        navigate('/login')
    }

    function validate(name,email,phone,password){
        //Regex
        const nameregex=/^[A-za-z]{1,}$/
        const emailregex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        const phoneregex=/^[0-9]{10}$/
        const passregex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        var a=document.getElementById('nameerror')
        var b=document.getElementById('emailerror')
        var c=document.getElementById('phoneerror')
        var d=document.getElementById('passerror')

        a.textContent = "";
        b.textContent = "";
        c.textContent = "";
        d.textContent = "";


        if(!nameregex.test(name)){
            a.textContent="Name should be Only Letters & No Space"
            return false
        }
        if(!emailregex.test(email)){
            b.textContent="Enter Valid Email"
            return false
        }
        if(!phoneregex.test(phone)){
            c.textContent="Phoneno should be Only 10 Digits"
            return false
        }
        if(!passregex.test(password)){
            d.textContent="Password must be Eg:Wxyz@1234"
            return false
        }
        return true
    }
    return(
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 py-[100px]">
                <form className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto space-y-4 w-[100%]"
                        onSubmit={(e)=>{
                            e.preventDefault()
                            
                            var name=document.getElementById('name')
                            var email=document.getElementById('email')
                            var phone=document.getElementById('phone')
                            var password=document.getElementById("password")

                            if(validate(name.value,email.value,phone.value,password.value)){
                                register()
                            }

                        }}>
                    <h1 className="text-black font-400 text-[24px]">Registration Form</h1>
                    <input
                        placeholder="Name" id="name" required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        onChange={(e)=>{
                            setvalue((prev)=>{
                                return {...prev,name:e.target.value}
                            })
                        }}
                    />
                    <p id="nameerror" className="text-red-500"></p>
                    <input
                        placeholder="Email" id="email" required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        onChange={(e)=>{
                            setvalue((prev)=>{
                                return {...prev,email:e.target.value}
                            })
                        }}
                    />
                    <p id="emailerror" className="text-red-500"></p>
                    <input
                        placeholder="Phone No" id="phone" required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        onChange={(e)=>{
                            setvalue((prev)=>{
                                return{...prev,phoneno:e.target.value.toString()}
                            })
                        }}
                    />
                    <p id="phoneerror" className="text-red-500"></p>
                    <input
                        placeholder="Password" id="password" required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        onChange={(e)=>{
                            setvalue((prev)=>{
                                return{...prev,password:e.target.value}
                            })
                        }}
                    />
                    <p id="passerror" className="text-red-500"></p>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                    >
                        Submit
                    </button>
                    <Link to='/login'>
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                        >
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default Register