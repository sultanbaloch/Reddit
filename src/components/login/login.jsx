


function Login(){
    return (
        <div>
            <form>
                <label>USERNAME: <br />
                <input type="email" required/>
                </label>
                <br/>

                <label> Password: <br />
                <input type="password" required/></label>
                <br/>
                <button>Login</button>
            
            </form>
        </div>
    )
}

export default Login;