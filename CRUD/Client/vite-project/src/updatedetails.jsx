import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

const Update=()=>{
    //Accesing details.jsx value using useLocation()
    const location=useLocation()
    const student=location.state

    //navigation in javascript 
    const navigate=useNavigate()

    const[value,setvalue]=useState({...student})

    async function api(){
        try{
            const req=await fetch("https://crud-using-postgresql-1.onrender.com",{
                "method":"PUT",
                headers:{"Content-Type":"application/json"},
                "body":JSON.stringify(value)
            })
            const res=await req.json()
            console.log(res.data)
            alert(res.message)
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
                        <label>Roll No</label>
                        <input placeholder="enter rollno" disabled
                                //Conditional Rendering
                                value={value.roll_no ? value.roll_no : ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]">
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Name</label>
                        <input placeholder="enter name" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.name || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,name:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Standard</label>
                        <input placeholder="enter std" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.std || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,std:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Section</label>
                        <input placeholder="enter sec" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.section || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,section:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mark</label>
                        <input placeholder="enter mark" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.marks || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,marks:parseInt(e.target.value)}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Percentage</label>
                        <input placeholder="enter percentage" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.percentage || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,percentage:parseInt(e.target.value)}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Father Name</label>
                        <input placeholder="enter father name" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.father_name || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,father_name:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Father Age</label>
                        <input placeholder="enter father age" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.father_age || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,father_age:parseInt(e.target.value)}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Father Occupation</label>
                        <input placeholder="enter father occupation" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.father_occupation || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,father_occupation:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mother Name</label>
                        <input placeholder="enter mother name" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.mother_name || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,mother_name:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mother Age</label>
                        <input placeholder="enter mother age" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.mother_age || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,mother_age:parseInt(e.target.value)}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Mother Occupation</label>
                        <input placeholder="enter mother occupation" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.mother_occupation || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,mother_occupation:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Total Income</label>
                        <input placeholder="enter income" required
                                //Optional chaining (?.) , Logical OR (||)
                                value={value?.total_income || ""}
                                className="border-[1px] px-[5px] py-[1px] rounded-lg w-[300px]"
                                onChange={(e)=>{
                                    setvalue(()=>{
                                        return{...value,total_income:e.target.value}
                                    })
                                }}>
                            </input>
                    </div>
                    <button className="bg-black text-white p-[5px] rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Update