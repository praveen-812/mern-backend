import Buy from "../Pages/Buy";
import Contact from "../Pages/Contact";
import Helps from "../Pages/Helps";
import Home from "../Pages/Home";
import {Routes,Route} from "react-router-dom"


const AppRoutes = () => {
    return (
        <>
            <div>
               <Routes>
               <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                 <Route path="/Helps" element={<Helps/>}/>
                  <Route path="/Buy" element={<Buy/>}/>
               </Routes>

            </div>
        </>
    )
};
export default AppRoutes                                     