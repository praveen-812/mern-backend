import { useState } from "react";


const Hooks =()=>{

    const[count,setCount]=useState("react add")
    const handleClick=()=>{
        setCount("dsfvfd")

    }

    return(
        <>
        <div>
               <p>{count}</p>
               <button onClick={handleClick} className="bg-black rounded-xl text-white p-3 ">click</button>
            
        </div>
        </>
    )
}
export default Hooks;