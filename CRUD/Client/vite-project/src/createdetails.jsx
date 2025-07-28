import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Create=()=>{
    //navigation in javascript 
    const navigate=useNavigate()

    const[value,setvalue]=useState({
        name:"",
        std:"",
        section:"",
        marks:"",
        percentage:"",
        father_name:"",
        father_age:"",
        father_occupation:"",
        mother_name:"",
        mother_age:"",
        mother_occupation:"",
        total_income:""
    })

    async function api() {
        try{
            const req=await fetch("https://crud-using-postgresql-1.onrender.com",{
                "method":"POST",
                headers:{"Content-Type":"application/json"},
                "body":JSON.stringify(value)
            })
            const res=await req.json()
            alert(res.message);
            console.log(res.data)
            navigate('/')
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div className="2xl:container mx-auto py-[20px]">
            <div className="w-[80%] mx-auto grid grid-cols-1">
                <form 
                    className="mx-auto flex flex-col gap-4"
                    onSubmit={(e)=>{
                        e.preventDefault()
                        api()
                    }}>
                    <div className="flex flex-col gap-1">
                        <label>Name</label>
                        <input placeholder="enter name" required 
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return {...prev,name:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Standard</label>
                        <input placeholder="enter std" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return {...prev,std:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Section</label>
                        <input placeholder="enter sec" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,section:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mark</label>
                        <input placeholder="enter mark" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,marks:parseInt(e.target.value)}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Percentage</label>
                        <input placeholder="enter percentage" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,percentage:parseInt(e.target.value)}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Father Name</label>
                        <input placeholder="enter father name" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,father_name:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Father Age</label>
                        <input placeholder="enter father age" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,father_age:parseInt(e.target.value)}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Father Occupation</label>
                        <input placeholder="enter father occupation" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,father_occupation:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mother Name</label>
                        <input placeholder="enter mother name" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,mother_name:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mother Age</label>
                        <input placeholder="enter mother age" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,mother_age:parseInt(e.target.value)}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mother Occupation</label>
                        <input placeholder="enter mother occupation" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,mother_occupation:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Total Income</label>
                        <input placeholder="enter income" required
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue((prev)=>{
                                        return{...prev,total_income:e.target.value}
                                    })
                                }}></input>
                    </div>
                    <button className="bg-black text-white p-[5px] rounded-lg">Submit</button>
                    <Link to='/'>
                        <button className="bg-black text-white px-[15px] rounded-lg">Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default Create