import { SignUp } from "components/SignUp";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <h3>Register</h3>
            <SignUp/>
            <p>
                Already have an account? <Link style={{fontSize:24, fontFamily:'monospace', textDecoration:'none', fontWeight:600, position:'relative', color:'#BD79DD', marginLeft:20}} to="/login">Sign in</Link>
            </p>
        </div>
    )
}

export default RegisterPage;