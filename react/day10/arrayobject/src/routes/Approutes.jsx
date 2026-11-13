import { Route, Routes } from "react-router-dom";
import Array from "../pages/Array";
import Object from "../pages/Object";
import Arrayofobject from "../pages/Arrayofobject";
import Navbar from "../components/Navbar";

const Approutes=()=>{

    return(
        <>
        <div>

            <Navbar/>
          <Routes>

            <Route path="/" element={<Array/>}/>
            <Route path="/object" element={<Object/>}/>
            <Route path="/arrofobj" element={<Arrayofobject/>}/>
          </Routes>

        </div>
        </>
    )
};
export default Approutes