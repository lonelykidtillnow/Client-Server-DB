import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login=()=>{

    const navigate=useNavigate()

    const[value,setvalue]=useState({
            email:"",
            password:""
        })
    
    async function login(){
        const req=await fetch('https://crud-using-postgresql-2.onrender.com/login',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(value)
        })
        const res=await req.json()
        alert(res.message)
        console.log(res.data)
        if(res.message==="No user Exist, please Register"){
            navigate('/register')
        }
        if(res.message==="Welcome"){
            navigate('/welcome')
        }
    }
    return(
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto py-[150px]">
                <form className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto space-y-4 w-[100%]"
                        onSubmit={(e)=>{
                            e.preventDefault()
                            login()
                        }}>
                    <h1 className="text-black font-400 text-[24px]">Login Form</h1>
                    <input
                        placeholder="Email" required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        onChange={(e)=>{
                            setvalue((prev)=>{
                                return {...prev,email:e.target.value}
                            })
                        }}
                    />
                    <input
                        placeholder="Password" required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        onChange={(e)=>{
                            setvalue((prev)=>{
                                return {...prev,password:e.target.value}
                            })
                        }}
                    />               
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login