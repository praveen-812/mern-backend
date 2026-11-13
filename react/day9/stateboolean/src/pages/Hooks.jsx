import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hooks=()=>{

  const navigate=useNavigate()

  const [count,setCount]=useState(0)
  const handleClick=()=>{
    setCount(count+1)
  }


    return(

        <>
        <div className="flex flex-col gap-20">
           <div className="flex justify-center items-center">
             {count}
           </div>
           <button className="bg-yellow-500 text-white p-2 rounded-xl " onClick={handleClick}>click</button>
        </div>
        </>
    )
}
export default Hooks;