
import { useNavigate } from "react-router-dom"

const Resgister=()=>{
    const state=useNavigate()

    const ss=()=>{
     state("/login")
    }
    return (
        <>
               <div>
                <div className="flex justify-center items-center mt-20 mb-10 ">
                    <button onClick={ss} className="bg-green-300 p-3 rounded-lg  shadow-lg shadow-green-500 w-30   " >back </button>
                </div>
                 <div className="flex justify-center items-center ">
            <form className="shadow-sm shadow-black rounded-2xl p-10 w-80 flex flex-wrap justify-center items-center gap-5 ">
                <h2 className="text-xl" >Resgister form</h2>

                <div>
                   <label>UserName</label><br />
                   <input type="text" placeholder="enter your name" className=" p-1 rounded-md border border-red-500" />
                </div>
                <div>
                    <label>userAge</label><br />
                    <input type="number" placeholder="enter your age" className=" p-1 rounded-md border border-red-500" />
                </div>
                 <div>
                    <label>userAge</label><br />
                    <input type="number" placeholder="enter your number" className=" p-1 rounded-md border border-red-500" />
                </div>
                <div>
                    <button className="bg-red-400 rounded p-2 shadow-xl ">
                        Resgister
                    </button>
                </div>
            </form>
            
        </div>
               </div>
        </>
    )
}
export default Resgister;