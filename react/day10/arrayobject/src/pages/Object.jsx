import { useState } from "react";

const Object =()=>{
    
    const [object,setObject]=useState({name:"oppo",price:30000,color:"blue",ram:"8GB"})

    const handleAdd=()=>{

        setObject({...object,storage:"512GB"})
    }
    const handleupdate=()=>{
        setObject({...object,price:25000})
    }
    const handledelete=()=>{
        setObject({...object,storage:""})
    }
    return(

        <>
         <div className="bg-gray-300 h-100 justify-center flex flex-col items-center">
            <h2>this is object | updates | delete | Add</h2>

            <div className="flex justiy-center items-center  gap-20 mt-10">

                <p>{object.name}</p>
                <p>{object.price}</p>
                <p>{object.color}</p>
                <p>{object.ram}</p>
                <p>{object.storage}</p>

                

            </div >
                <div className="flex gap-10 mt-10">
                   
                     <button onClick={handleAdd} className="bg-black w-30 text-white rounded-lg p-3 shadow-xl shadow-grey-300">Add</button>
                      <button onClick={handleupdate} className="bg-black w-30 text-white rounded-lg p-3 shadow-xl shadow-grey-300">Update</button>
                       <button onClick={handledelete} className="bg-black w-30 text-white rounded-lg p-3 shadow-xl shadow-grey-300">Delete</button>
                </div>
            </div>
        </>
)};
export default Object