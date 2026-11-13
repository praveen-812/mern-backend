import { Route, Routes } from "react-router-dom";
import Productlist from "../pages/Productlist";
import Hooks from "../pages/Hooks";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Approutes=()=>{
    return(

        <>
        <div>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Productlist/>}/>
                <Route path="/hooks" element={<Hooks/>}/>
                <Route path="/product/:userid" element={<Product/>}/>


                               
                               
                               
                               
         </Routes>
        </div>
        </>
    )
}
export default Approutes;