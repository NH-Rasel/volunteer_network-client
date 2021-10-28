import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribe;
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;