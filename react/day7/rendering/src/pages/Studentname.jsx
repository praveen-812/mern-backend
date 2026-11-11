const Studentname =()=>{

    const student=["anbu","praveen","moni","thanu","suva"]

    
    return(
        <>
        <div className="bg-pink-200 text-center p-13">
         
           <ul>
            {
                     
            student.map((e,i)=>(
               <li key={i}>{e}</li>


            ))
            }
           </ul>
            
            

        </div>
        
        </>
    )
}
export default Studentname;