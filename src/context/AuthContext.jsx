import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
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
	const singIn=(email,password)=>{
		setLoading(true)
		return signInWithEmailAndPassword(auth,email,password);
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
		singIn,




	}
	return (
		<AuthContext.Provider value={authInfo} >
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
