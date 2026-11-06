import { useLocation, useNavigate } from "react-router-dom";

const Login=()=>{

    const navigate = useNavigate()

    const location =useLocation()
    console.log(location.pathname)
     const handleBack=()=>{
        navigate(-1)

    
     }
     const handleFoward=()=>{
        navigate(1)
     }
     const handleLogin=()=>{
        navigate("/resgister",{state:{username:"react"}})
     }
    return (
        <>
       <div>

        <div className="flex gap-10 justify-center items-center mt-30 mb-15 ">
            <div><button  onClick={handleBack} className="bg-blue-400 rounded  p-3 w-30 shadow-lg shadow-black">back</button></div>
            <div><button  onClick={handleFoward} className="bg-blue-400 rounded  p-3 w-30 shadow-lg shadow-black">forward</button></div>
           
        </div>
         <div className="flex justify-center items-center ">
            <form className="shadow-sm shadow-black rounded-2xl p-10 w-80 flex flex-wrap justify-center items-center gap-5 ">
                <h2 className="text-xl" >login form</h2>

                <div>
                   <label>Useremail</label><br />
                   <input type="email" placeholder="enter your email" className=" p-1 rounded-md border border-red-500" />
                </div>
                <div>
                    <label>password</label><br />
                    <input type="password" placeholder="enter your password" className=" p-1 rounded-md border border-red-500" />
                </div>
                <div>
                    <button  onClick={handleLogin}   className="bg-red-400 rounded p-2 w-20 ">
                        login
                    </button>
                </div>
            </form>
            
        </div>
       </div>
        </>
    )
}
export default Login;