import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx'
import About from '../pages/About.jsx'
import Login from '../pages/Login.jsx'
import Resgister from '../pages/Resgister.jsx'

import Authlayout from '../layout/Authlayout.jsx'
const AppRoutes=()=>{
    return(

        <>
        <div>
       
            <Routes>

             <Route element={<Authlayout/>}>
                   <Route  path="/" element={<Home/>}/>
                
                <Route  path="/contact" element={<Contact/>}/>
                
                <Route  path="/about" element={<About/>}/>
             </Route>
                
                <Route  path="/login" element={<Login/>}/>
                
                <Route  path="/resgister" element={<Resgister/>}/>

            </Routes>

       </div>
            
            </>
    )
}
export default AppRoutes;