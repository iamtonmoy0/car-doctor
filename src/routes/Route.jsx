import { createBrowserRouter } from "react-router-dom";
import * as RoutePath from './RoutePath'
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
{
	path:RoutePath.HOME,
	element:<Main/>,
	children:[
		{
		path:RoutePath.HOME,
		element:<Home/>

		}
	]
}

])
export default router;
