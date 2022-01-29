import { useEffect, useState, useRef } from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth' // onAuthStateChanged log in veya log out durumunda otomatik olarak çalışır

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    const isMounted = useRef(true);

    useEffect(() => {
        if(isMounted) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => { //ilk parametresi auth ikinci paremetresi user objesi veren bir func
                if(user) {
                    setLoggedIn(true);
                }
                setCheckingStatus(false);//render işlemi yapılabilir demek
            })
        }

        return () => {
            isMounted.current = false;
        }
        
    }, [isMounted])

  
    return  { loggedIn, checkingStatus}
}

//Protected routes in v6
//https://stackoverflow.com/questions/65505665/
//protected-route-with-firebase

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/
//cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks

