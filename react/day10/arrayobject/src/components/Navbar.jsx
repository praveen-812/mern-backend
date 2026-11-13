import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <>
            <div className="bg-yellow-600 p-3 rounded-md flex justify-between  text-white font-semibold">

                <div className="mx-15">logo</div>
                <div className="mx-15 flex gap-10">
                <Link to="/">Array</Link>
                <Link to="/object">Object</Link>
                <Link to="arrofobj">Array of Object</Link>
            </div>
            </div>
        </>
    )
};
export default Navbar