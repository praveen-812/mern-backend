import {Link} from "react-router-dom"

const Navbar=()=>{

    return(

        <>
        <div className="bg-black text-white flex justify-between items-center p-2 rounded">
             <div className="mx-15">
                logo
             </div>
             <div  className="mx-15 flex gap-15">
                <Link to="/">products</Link>
             <Link to="/hooks">hooks</Link>
             <Link to="/rendering">rendering</Link>
             </div>
        </div>
        </>
    )
}
export default Navbar;