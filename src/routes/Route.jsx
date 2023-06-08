import { createBrowserRouter } from "react-router-dom";
import * as RoutePath from './RoutePath'
import App from "../App";

const router = createBrowserRouter([
{
	path:RoutePath.HOME,
	element:<App/>,
	children:[
		{
			
		}
	]
}

])
export default router;
