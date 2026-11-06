import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Output =()=>{
    return(
        <>
        <div>
            <Navbar/>
            <Outlet/>
        </div>
        </>
    )
}
export default Output;