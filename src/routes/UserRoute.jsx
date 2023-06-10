import {  useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import * as RoutePath from './RoutePath'

const UserRoute = ({children}) => {
	const {user,loading}=useContext(AuthContext)
	if(loading){
		return <progress className="progress w-56"></progress>;
	}
	if(user?.email){
	return children;
	}
	return <Navigate to={RoutePath.SIGNIN} replace ></Navigate>
}

export default UserRoute;
