import {Link} from 'react-router-dom'

const Navbar=()=>{

    const home="Home"
    const about="About"
    const contact="Contact"
    const login="Login"
    const resgister="Resgister"
    return (
        <>    
        <div className="flex bg-blue-300 justify-between p-5 rounded">
            <div className="mx-15">
                logo
            </div>
            <div className=" mx-15 flex gap-15">
                <Link to="/" >{home}</Link>
                 <Link to="/about" >{about}</Link>
                  <Link to="/contact" >{contact}</Link>
                   <Link to="/login" >{login}</Link>
                    <Link to="/resgister" >{resgister}</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar;