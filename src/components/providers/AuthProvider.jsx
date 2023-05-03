import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoader(true)
        return signOut(auth)
    }

    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const githubSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,githubProvider)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser) 
            setLoader(false)
        })
        return () =>{
            unSubscribe()
        }

    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        googleSignIn,
        githubSignIn,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;