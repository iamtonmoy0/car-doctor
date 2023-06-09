import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
	const [user,setUser]=useState();
	const [loading,setLoading]=useState(true)
	//create user
	const createUser=(email,password)=>{
		setLoading(true)
		return createUserWithEmailAndPassword(auth,email,password)
	}
	// log in user
	const logIn=(email,password)=>{
		setLoading(true)
		return signInWithEmailAndPassword(auth,email,password);
	}
	//log out
	const logout=()=>{
		return signOut(auth)
	}
	// auth state manager
	useEffect(()=>{
		const unsubscribe=onAuthStateChanged(auth,currentUser=>{
			setUser(currentUser)
			setLoading(false)
		})
		return ()=>{
			return unsubscribe();
		};
	},[])
	const authInfo ={
		user,
		loading,
		createUser,
		logIn,
		logout,




	}
	return (
		<AuthContext.Provider value={authInfo} >
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
