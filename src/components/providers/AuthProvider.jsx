import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const githubSignIn = () =>{
        return signInWithPopup(auth,githubProvider)
    }

    const authInfo = {
        createUser,
        signInUser,
        googleSignIn,
        githubSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;