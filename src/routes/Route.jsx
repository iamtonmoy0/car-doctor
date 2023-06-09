import { createBrowserRouter } from "react-router-dom";
import * as RoutePath from './RoutePath'
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";

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
		},
		{
			path:RoutePath.CHECKOUT,
			element:<BookService/>,
			loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
		}
	]
}

])
export default router;
