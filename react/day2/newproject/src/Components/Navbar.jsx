
import Logo from '../utils/Logo.jsx'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (

        <>

            <div className="flex justify-between bg-white top-0  p-3 items-center rounded shadow mb-5 fixed w-screen">
                <div className="mx-15">
                    <Logo />
                </div>
                <div className="flex justify-center items-center gap-10 font-bold mx-15">
                    <Link to="/">Home</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Helps">Helps</Link>
                    <Link to="/Buy">Buy</Link>
                    <Button />

                </div>

            </div>

        </>
    )
}
export default Navbar;

const Button = () => {
    return (
        <>
            <div>

                <button className="bg-blue-800 text-white p-2 rounded w-25">Login..</button>
            </div>
        </>
    )
}