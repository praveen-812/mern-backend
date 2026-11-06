import { Routes,Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Helps from "../pages/Hepls";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Output from "../layout/output";
import Hooks from "../pages/Hooks";


const AppRoutes = () => {
    return (
        <>
     
            <div>
                <Routes>
                  <Route element={<Output/>}>
                      <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/helps" element={< Helps />} />
                  </Route>
                
                    <Route path="/login" element={< Login />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/hooks" element={<Hooks/>}/>

                </Routes>
            </div>

        </>
    )
}
export default AppRoutes;