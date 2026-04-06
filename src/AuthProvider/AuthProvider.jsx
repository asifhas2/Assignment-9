import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

import app from '../FireBase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const value ={
        auth,
        provider,
        createUser,
        SignInUser
    }

    return <AuthContext value={value} >
        {children}
    </AuthContext>
};

export default AuthProvider;