import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Fetchid=()=>{
    const[value,setvalue]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        api()
    },[])

    async function api(){
        try{
            const req=await fetch(`https://crud-using-postgresql-1.onrender.com/students/${id}`)
            const res=await req.json()
            console.log(res.data)
            setvalue(res.data)
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div className="2xl:container mx-auto py-[30px]">
            <table className="w-[80%] mx-auto grid grid-cols-1">
                    <h1 className="text-[32px] mx-auto">Student Details</h1>
                <tbody className="text-center mx-auto">
                    <tr>
                        <td className="p-[10px] border-[1px]">RollNo</td>    <td className="p-[10px] border-[1px]">{value.roll_no}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Name</td>  <td className="p-[10px] border-[1px]">{value.name}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Standard</td>  <td className="p-[10px] border-[1px]">{value.std}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Section</td>   <td className="p-[10px] border-[1px]">{value.section}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Mark</td>  <td className="p-[10px] border-[1px]">{value.marks}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Percentage</td>    <td className="p-[10px] border-[1px]">{value.percentage}%</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Father Name</td>  <td className="p-[10px] border-[1px]">{value.father_name}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Father Age</td>    <td className="p-[10px] border-[1px]">{value.father_age}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Father Occupation</td> <td className="p-[10px] border-[1px]">{value.father_occupation}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Mother Name</td>   <td className="p-[10px] border-[1px]">{value.mother_name}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Mother Age</td>    <td className="p-[10px] border-[1px]">{value.mother_age}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">Mother Occupation</td> <td className="p-[10px] border-[1px]">{value.mother_occupation}</td>
                    </tr>
                    <tr>
                        <td className="p-[10px] border-[1px]">TotalIncome</td>   <td className="p-[10px] border-[1px]">{value.total_income}</td>
                    </tr>
                </tbody>
                <div className="mx-auto py-[15px]">
                    <Link to='/'>
                        <button className="bg-black text-white px-[10px] py-[4px] rounded-lg w-[100px]">Back</button>
                    </Link>
                </div>
            </table>
        </div>
    )
}
export default Fetchid