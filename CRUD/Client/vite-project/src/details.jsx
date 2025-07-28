import { useEffect, useState } from "react"
import "./tailwind.css"
import { Link } from "react-router-dom";

const Fetch=()=>{
    const[value,setvalue]=useState([]);

    useEffect(()=>{
        api()
    },[])
    //Fetch all Details
    async function api(){
        try{
            const req=await fetch("https://crud-using-postgresql-1.onrender.com/students")
            const res=await req.json()
            console.log(res.data)
            setvalue(res.data)
        }
        catch(error){
            console.log(error)
        }
    }
    //Delete Details
    async function deleted(rollno){
        const req=await fetch("https://crud-using-postgresql-1.onrender.com",{
            "method":"DELETE",
            headers:{"Content-Type":"application/json"},
            "body":JSON.stringify({roll_no:rollno})
        })
        const res=await req.json()
        alert(res.message)
        //Refresh
        api()
    }

    //Search Function
    const[search,setsearch]=useState("")

    const Search=value.filter((items)=>{
        return(
            items?.name.toLowerCase().includes(search.toLowerCase()) ||
            items?.std.toString().toLowerCase().includes(search.toLowerCase()) ||
            items?.section.toLowerCase().includes(search.toLowerCase()) ||
            items?.marks.toString().includes(search) ||
           items?.percentage.toString().includes(search)
        )
    })
    
    //Pageination logic
    const[page,setpage]=useState(1) //nextpage=useState(2)
    const itemsperpage=5
    console.log("Length:",value.length)
    
    const lastindex=page*itemsperpage   //1*5=5, 2*5=10
    console.log("Last Index",lastindex)
    const firstindex=lastindex-itemsperpage //5-5=0, 10-5=5
    console.log("First Index",firstindex)
    const records=Search.slice(firstindex,lastindex) //value.slice(0,5), value.slice(5,10)
    console.log("Records",records)

    //For Button
    const totalpage=Math.ceil(Search.length/itemsperpage)    //Math.ceil(51/5), Math.ceil(10.2), 11
    console.log(totalpage)

    //For Button
    const pagenumber=[]
    for(var i=1;i<=totalpage;i++){
        pagenumber.push(i)
    }

    return(
        <div className="2xl:container mx-auto py-[20px]">
            <div className="w-[90%] mx-auto grid grid-cols-1">
                <div className="mx-auto">
                    <div className="py-[20px]">
                        <input placeholder="Search here" required
                                className="border-[1px] border-black rounded-xl px-[20px] py-[5px] w-[100%]"
                                onChange={(e)=>{
                                    setsearch(e.target.value)
                                    //Search Details Display in First page
                                    setpage(1)
                                }}></input>
                    </div>
                    <table className="w-[100%]">
                        <thead>
                            <tr className="border-[2px] border-black">
                                <th className="border-[1px]">Roll No</th>
                                <th className="border-[1px]">Name</th>
                                <th className="border-[1px]">Standard</th>
                                <th className="border-[1px]">Section</th>
                                <th className="border-[1px]">Mark</th>
                                <th className="border-[1px]">Percentage</th>
                                <th className="border-[1px]">Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map((items)=>{
                                    return(
                                        <tr key={items.roll_no} className="text-center">
                                            <td className="border-[1px]">{items.roll_no}</td>
                                            <td className="border-[1px]">{items.name}</td>
                                            <td className="border-[1px]">{items.std}</td>
                                            <td className="border-[1px]">{items.section}</td>
                                            <td className="border-[1px]">{items.marks}</td>
                                            <td className="border-[1px]">{items.percentage}</td>
                                            <td className="border-[1px] p-[10px] space-x-3">
                                                <Link to={`${items.roll_no}`}>
                                                    <button className="bg-purple-500 text-black px-[10px] py-[2px] rounded-lg">View</button>
                                                </Link>
                                                <Link to='/update' state={items}>
                                                <button className="bg-green-400 text-black px-[10px] py-[2px] rounded-lg">Edit</button>
                                                </Link>
                                                <button className="bg-orange-500 text-black px-[10px] py-[2px] rounded-lg"
                                                        onClick={()=>{
                                                            deleted(items.roll_no)
                                                        }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {/* Pageination button logic */}
                    <div className="mx-auto py-[30px] flex flex-row gap-3.5">
                        <button
                            className={`bg-black text-white p-[5px] rounded-lg w-[100px] ${page===1 ? "bg-gray-500":"bg-black"}`}
                            onClick={()=>{
                                if(page!=1){
                                    setpage(page-1)
                                }
                            }}>Prev Page</button>
                        {
                            pagenumber.map((items)=>{
                                return(
                                    <button 
                                        className={`bg-black text-white px-[15px] rounded-lg ${items===page ? "bg-red-500" :"bg-black"}`}
                                        onClick={()=>{
                                            setpage(items)
                                        }}>{items}</button>
                                )
                            })
                        }
                        <button 
                            className={`bg-black text-white p-[5px] rounded-lg w-[100px] ${page===totalpage ? "bg-gray-500":"bg-black"}`}
                            onClick={()=>{
                                if(page!=totalpage){
                                    setpage(page+1)
                                }
                            }}>Next Page</button>

                        {/* Create Button */}
                        <Link to='/create'>
                            <button className="bg-blue-500 text-white p-[5px] rounded-lg w-[100px]">Create</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fetch