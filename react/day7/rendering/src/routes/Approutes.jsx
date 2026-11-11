    import Navbar from '../components/Navbar.jsx'
    import {Routes,Route} from 'react-router-dom'
    import ProductList from '../pages/ProductList.jsx'
    import Hooks from '../pages/Hooks.jsx'
    import Rendering from '../pages/rendering.jsx'
  

    const Approutes=()=>{

        return(

            <>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/"  element={<ProductList/>}/>
                    <Route path="/hooks"  element={<Hooks/>}/>
                    <Route path="/rendering"  element={<Rendering/>}/>
                </Routes>
            </div>
            </>
        )
    }
    export default Approutes;