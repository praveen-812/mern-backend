import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(

        <>
        <div className="bg-black text-white p-5 rounded-xl flex justify-between ">
            <div className="mx-15">
                logo
            </div>
            <div className="flex gap-20 mx-15">
                <Link to="/">Productlist</Link>
                <Link to="/hooks">Hooks</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar;