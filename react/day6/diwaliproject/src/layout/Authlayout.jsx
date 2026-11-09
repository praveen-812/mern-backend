import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Authlayout =()=>{
    
    return(
        <>
        
        <div>
            <Navbar/>
            <Outlet/>
            
            </div>
            </>
    )
};
export default Authlayout;