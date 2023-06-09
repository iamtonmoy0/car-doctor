import { createBrowserRouter } from "react-router-dom";
import * as RoutePath from './RoutePath'
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
{
	path:RoutePath.HOME,
	element:<Main/>,
	children:[
		{
		path:RoutePath.HOME,
		element:<Home/>

		},
		{
			path:RoutePath.SIGNIN,
			element:<Login/>
		},
		{
			path:RoutePath.SIGNUP,
			element:<SignUp/>
		}
	]
}

])
export default router;
