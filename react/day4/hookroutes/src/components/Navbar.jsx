import { Link } from 'react-router-dom'

const Navbar = () => {

    const HomeLink = "Home"
    const contactLink = "Contact"
    const HelpsLinks = "Helps"
    const login = "Login"
    const register = "Register"
    const hooks="Hooks"
    return (
        <>

            <div className='bg-blue-600 p-5 flex justify-between rounded text-white'>

                <div className="mx-5">
                      logo
                </div>

                <div className='mx-5 flex gap-15'>
                
                    <Link to="/">{HomeLink}</Link>
                    <Link to="/contact">{contactLink}</Link>
                    <Link to="/helps">{HelpsLinks}</Link>


                    <Link to="/login">{login}</Link>
                    <Link to="/register">{register}</Link>
                    <Link to="/hooks">{hooks}</Link>
                  
                </div>

            </div>

        </>
    )
}
export default Navbar;

