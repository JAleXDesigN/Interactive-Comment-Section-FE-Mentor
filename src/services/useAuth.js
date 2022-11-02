import { useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUserAuth(user);
            } else {
                setUserAuth(null)
            }
        });
        return () => unsuscribe();
    }, []);

    return userAuth;
}

