import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { Form } from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

const Login = () => {

    const dispatch = useDispatch();
    const push = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            push('/');
        })
            .catch(() => alert('Invalid user'))
    }
    return(
        <Form 
            title='sign in'
            handleClick={handleLogin}
        />
    );
};

export {Login};