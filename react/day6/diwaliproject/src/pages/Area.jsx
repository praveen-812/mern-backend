import { useNavigate } from "react-router-dom";

const Area =()=>{
    const navigate =useNavigate();
    const handleChange=()=>{
        navigate("/")
    }
    return(
        <>
        
        <div className="flex justify-center items-center mt-20 ">
            <button  className=" bg-red-300 rounded flex items-center justify-center p-3 w-23 text-white font-bold" onClick={handleChange}>
                Back
            </button>
            
            </div>
            </>
    )
};
export default Area;