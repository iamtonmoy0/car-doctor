import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import * as RoutePath from '../../routes/RoutePath'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const {user,logout}=useContext(AuthContext)

  //logout
  const handleLogout=()=>{
    logout()
    .then(()=>{})
    .catch(error=>console.log(error.message))

  }
	const menuItem = <>
	<li> <Link to={RoutePath.HOME} >Home</Link> </li>
	<li> <Link to='' >About</Link> </li>
	<li> <Link to='' >Services</Link> </li>
	<li> <Link to='' >Blog</Link> </li>
	<li> <Link to='' >Contact</Link> </li>
  {user? 
  <li> <Link to={RoutePath.BOOKINGS} >My Booking</Link> </li> :
  <></> }
	</>
	return (
		<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link className="btn btn-ghost border-none h-28 mb-4" to={RoutePath.HOME}><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
    {user? <button className="btn normal-case bg-amber-400 hover:bg-red-500 mr-3"onClick={handleLogout}>Logout</button>
    :<Link to={RoutePath.SIGNIN}><button className="btn normal-case bg-amber-400 hover:bg-red-500 mr-3">Login</button></Link>}
    <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
	);
}

export default Navbar;
