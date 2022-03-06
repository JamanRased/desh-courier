import intializeFirebase from '../Components/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";import { useState, useEffect } from 'react';

intializeFirebase();
    
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //Sign In Google 
    const signInWithGoogle = (location) => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                sessionStorage.setItem('email','result.user.email')
                setAuthError('');
                
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }
     // Register Email Passwoard 
     const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);

            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
}
    //Login Email Pass
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        authError,
        signInWithGoogle,
        logOut,
        loginUser,
        registerUser,
    }
}

export default useFirebase;