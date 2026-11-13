import { useState } from "react";

const Array =()=>{
  
     const [arr,setArr]=useState(["Html","css","react","js","mern"])

     const handleClick=()=>{
       let copy=[...arr]

       copy.push("python")
       setArr(copy)
     }

     const handleUpdate=(userid)=>{
        let copy=[...arr]
        copy[userid]="mern"
        setArr(copy)
        

     }

     const handledelete=(userid)=>{
        let copy=[...arr]
        copy=copy.filter((e,i)=>i !==userid)
        setArr(copy)
     }
    return(

        <>
        <div className="bg-gray-300 h-120 justify-center flex flex-col gap-5 items-center">
            <h2 className="font-semibold">this is array | updates | delete | Add</h2>
       {

           arr.map((e,i)=>(
              <div key={i} className=" flex gap-10 justify-center items-center">
              <button onClick={()=>handleUpdate(i)} className="bg-black w-30 text-white rounded-lg p-3 shadow-xl shadow-grey-300">update</button>
                 <p className="w-20 text-center">{e}</p> 
                 <button onClick={()=>handledelete(i)} className="bg-black w-30 text-white rounded-lg p-3 shadow-xl shadow-grey-300">delete</button>
              
              </div>


           ))
           

           
       }

       <button onClick={handleClick} className="bg-black w-30 text-white rounded-lg p-3 shadow-xl shadow-grey-300">Add</button>
        </div>
        </>
)};
export default Array