import { useEffect, useState } from "react"

const Welcome=()=>{

    const[value,setvalue]=useState([])

    useEffect(()=>{
        api()
    },[])

    async function api(){
        try{
            const req=await fetch('https://crud-using-postgresql-2.onrender.com/users')
            const res=await req.json()
            setvalue(res.data)
            console.log(res.data)
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div className="2xl:container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold mb-6 text-center">User Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    value.map((items)=>{
                        return(
                            <div key={items.email} className="bg-white shadow-md rounded-2xl p-6">
                                <p className="text-lg font-semibold">👤 {items.name}</p>
                                <p className="text-gray-700">📧 {items.email}</p>
                                <p className="text-gray-700">📱 {items.phoneno}</p>
                                <p className="text-gray-500">🔑 *******</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Welcome