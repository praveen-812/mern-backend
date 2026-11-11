import Approutes from './routes/Approutes.jsx'
import Student from './pages/Student.jsx'
import Employee from './pages/employee.jsx';
import Newproduct from './pages/Newproduct.jsx';
import Studentname from './pages/Studentname.jsx';
const App=()=>{

    return(

        <>
        <div>
             <Approutes/>
             <Student/>
             <Employee/>
             <Newproduct/>
             <Studentname/>
        </div>
        </>
    )
}
export default App;