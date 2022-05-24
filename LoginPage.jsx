import { Login } from "components/Login";
import React from "react";
import { Link } from "react-router-dom";


const LoginPage = () => {
    return(
        <div>
            <h4>Login</h4>
            <Login />
            <p>
                Or <Link 
                style={{fontSize:24, 
                fontFamily:'monospace', 
                textDecoration:'none', 
                fontWeight:600, 
                position:'relative', 
                marginLeft:50, 
                color:'#BD79DD'
                }} to="/register">
                        Register
                    </Link>
                </p>
        </div>
    )
};

export default LoginPage;