import {Link} from 'react-router-dom'

const Navbar =()=>{
    return(
        <>
        <div>

           <div className='bg-black text-white flex justify-between p-5 rounded'>
            <div className='mx-10'>
                logo
            </div>
            <div className='flex gap-15 mx-10'>
                <Link to ="/">Hooks</Link>
                 <Link to ="/productlist">Productlist</Link>
                  <Link to ="/rendering">Rendering</Link>
            </div>
           </div>

        </div>
        </>
    )
}
export default Navbar;