import {Link} from 'react-router-dom'

const Navbar =()=>{
    return(
        <>
        <div>
            <Link to="/">Home</Link>
               <Link to="/Helps">Helps</Link>
                  <Link to="/Contact">Contact</Link>
                     <Link to="/Service">Service</Link>

        </div>
        </>
    )
};
export default Navbar;