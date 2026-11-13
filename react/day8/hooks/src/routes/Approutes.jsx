import { Routes,Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hooks from "../pages/Hooks";
import Productlist from "../pages/Productlist";
import Rendering from "../pages/Rendering";
import Product from "../components/Product";

const Approutes =()=>{
    return(
        <>
        <div>
            <Navbar/>
            <Routes>

                <Route path="/" element={<Hooks/>}/>
                  <Route path="/productlist" element={<Productlist/>}/>
                    <Route path="/rendering" element={<Rendering/>}/>
                      <Route path="/singleProduct/:productid" element={<Product/>}/>               
                    
            </Routes>


        </div>
        </>
    )
}
export default Approutes;