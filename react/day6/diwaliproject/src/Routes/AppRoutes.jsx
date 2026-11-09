import { Routes, Route } from 'react-router-dom'
import Authlayout from '../layout/Authlayout';
import Home from '../pages/Home';
import Purchase from '../pages/Purchase';
import Family from '../pages/Family.jsx';
import Area from '../pages/Area.jsx'
const AppRoutes = () => {

    return (
        <>

            <div>
                <Routes>

                    <Route element={<Authlayout/>}>
                        <Route path="/" element={<Home/>} />
                        <Route path="/family" element={<Family/>} />
                        <Route path="/purchase" element={<Purchase/>} />


                    </Route>
                    <Route path="/area" element={<Area/>} />
                </Routes>


            </div>
        </>
    )
};
export default AppRoutes;