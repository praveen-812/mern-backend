import {Routes,Route} from "react-router-dom"

const AppRoutes =()=>{
    return(
        <>
        <div>
    <Routes>
        <Route path="/Home" element={<Home/>}/>

        
    </Routes>
        </div>
        </>
    )
};
export default AppRoutes;