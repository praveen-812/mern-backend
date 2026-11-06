import { useNavigate } from "react-router-dom"; 
const Hooks =()=>{
         
       const navigate= useNavigate()
    const handleBackward=()=>{
           navigate(-1)
    };
    const handleForward=()=>{
        navigate(1)
    }
    const login =()=>{
        navigate("/login")
    }
         
    return(
        <>
        <div className="flex gap-20 ">
            <button onClick={handleBackward} className="bg-red-400 text-white p-3 rounded">backward</button>
             <button onClick={handleForward} className="bg-red-400 text-white p-3 rounded">forward</button>
             <button onClick={login} className="bg-red-400 text-white p-3 rounded">login</button>
        </div>
        </>
    )
}
export default Hooks;