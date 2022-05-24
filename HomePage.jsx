import './pagestyle/HomePage.module.css'
import { useAuth } from "hooks/use-auth";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { removeUser } from "store/slices/userSlice";




const HomePage = () => {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
        <h1> Welcome!</h1>
        <Link style={{fontSize:24, 
                fontFamily:'monospace',
                justifyContent:'center',
                textDecoration:'none', 
                fontWeight:600, 
                position:'absolute', 
                marginLeft:770,
                marginTop:-25, 
                color:'#BD79DD'}} 
                to='/posts'>
        Our news
        </Link>
        <Link to='/home'
        style={{textDecoration:'none', fontSize:29, fontFamily:'monospace',fontWeight:600, marginLeft:600, position:'absolute', color:'#BD79DD', marginTop:-28}}
        >Films</Link>
        <button 
            onClick={() => dispatch(removeUser())}
        >
            Log out from {email} </button>
        
        </div>
    ) : (
       
        <header>
            <h2>Home Page</h2>
        <span>
        <NavLink to="login" 
        style={{padding: 20, textDecoration:'none', fontSize:24, fontFamily:'monospace', fontWeight:600, paddingTop:30, position:'absolute', marginLeft:170, color:'#BD79DD'}}
        >
            Sign in
        </NavLink>
        <NavLink to="register" 
        style={{padding: 40, textDecoration:'none', fontSize:24, fontFamily:'monospace', fontWeight:600, paddingTop:30, position:'absolute', color:'#BD79DD'}}
        >
            Register
        </NavLink>
        <Link to='/home'
        style={{padding: 40, textDecoration:'none', fontSize:29, fontFamily:'monospace',fontWeight:600, paddingTop:30, position:'absolute', marginLeft:-300, color:'#BD79DD'}}
        >Films</Link>
        </span>
        </header>
    )
};

export default HomePage;