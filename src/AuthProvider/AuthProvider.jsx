import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FireBase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {



    const [user,setUser]=useState(null);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(true);

    const createUser = (email,password)=>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile =(displayName,photoURL,email)=>{
       return updateProfile(auth.currentUser,{
            displayName,
            photoURL,
            email
           
        })
    }
    const SignInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser =()=>{
        return signOut(auth)
    }
    const signInGoogle = ()=>{
        return signInWithPopup(auth,provider)
    }
    const ForgatePassword =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(()=>{
       const unSubscribe=onAuthStateChanged(auth,(current)=>{
            setUser(current);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

   
    
    const value ={
        user,
        setUser,
        setError,
        error,
        auth,
        provider,
        createUser,
        SignInUser,
        signOutUser,
        signInGoogle,
        loading,
        setLoading,
        updateUserProfile,
        ForgatePassword
      
    }

    return <AuthContext value={value} >
        {children}
    </AuthContext>
};

export default AuthProvider;