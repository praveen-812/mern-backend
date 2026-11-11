const Employee=()=>{
 

   const empName = "Arun";
    const empId = 101;
    const designation = "Frontend Developer";
    const salary = 25000;
    const company = "Google";

    return(
        <>
     <div className="bg-red-200 p-12 text-center">
         
            <p>Name: {empName}</p>
            <p>ID: {empId}</p>
            <p>Designation: {designation}</p>
            <p>Salary: {salary}</p>
            <p>Company: {company}</p>

     </div>
        </>
    )
}
export default Employee; 