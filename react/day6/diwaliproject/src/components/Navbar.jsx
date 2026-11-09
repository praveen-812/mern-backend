import {Link} from 'react-router-dom'
import logo from '../assets/logo/logo.png'

const Navbar = () => {
    const home ="Home";
    const family= "Family"
    const area="Area"
    const purchase="Purchase"

    return (
        <>

            <div className=' flex justify-between p-2 rounded-md  items-center shadow-md shadow-red-400'>
                <div className='mx-10'>
                    <img src={logo} alt="logo"  className='w-64 h-15'/>
                </div>

             <div className='flex gap-10 mx-10 justify-center items-center'>
           
                   <Link to="/">{home}</Link>
                <Link to="/family">{family}</Link>
                <Link to="/purchase">{purchase}</Link>
                <Link to="/area">{area}</Link>
            

             </div>
          

            </div>
        </>
    )
};
export default Navbar;