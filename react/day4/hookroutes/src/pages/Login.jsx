const Login = () => {
    return (
        <>

            <div>
                <form className=" rounded bg-white ">
                    <tr>
                        <td><label>Email:  </label></td>
                        <td><input type="email" placeholder="enter the email" /></td>
                    </tr>
                    <tr>
                        <td><label>Password:</label></td>
                        <td> <input type="password" placeholder="enter the email" /></td>
                    </tr>
                    <tr>
               <td>  
    <button>login</button></td>
                    </tr>
                </form>


            </div>

        </>
    )
}
export default Login;
