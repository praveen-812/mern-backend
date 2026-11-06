import Navbar from '../components/Navbar.jsx'

import {Outlet} from 'react-router-dom'
const Authlayout=()=>{
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