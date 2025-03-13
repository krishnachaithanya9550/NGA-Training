import { useState } from "react";
// import Logincomponent from "./Login";
import  { Link, Route,Routes } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./About";
import LoginDetails from "./LoginComponent";
import EmployeeList from "./EmployeeList";
import AddUser from "./AddUser";
import SignUp from "./Signup";
import Default from "./Default";
// import CreatenewAccount from "./CreatenewAccount";



const Application=()=>{
    const [authentication,setauthentication]=useState(false);

    const doLogin=()=>{
        setauthentication(true);
    }
    

    return(
        <div>
            {/* {authentication && ( */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">Nav bar</Link>
                        {/* <Link className="nav-link" to="/LoginComponent" style={{marginRight:"30px"}}>Login</Link>
                        <Link className="nav-link" to="/" style={{marginRight:"30px"}}>HomePage</Link>
                        <Link className="nav-link" to="/Signup" style={{marginRight:"0px"}}>SignUp</Link> */}
                        {authentication && (
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/EmployeeList">EmployeeList</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/LoginComponent" style={{marginLeft:"800px",color:"red"}}>Logout</Link>
                        </li>
                        </ul>
                        )}
                        <Link className="nav-link" to="/LoginComponent" style={{marginRight:"10px"}}>Login</Link>
                        <Link className="nav-link" to="/Home" style={{marginRight:"10px"}}>HomePage</Link>
                        <Link className="nav-link" to="/Signup" style={{marginRight:"0px"}}>SignUp</Link>
                        </div>
                        </nav>
            {/*  )} */}
            <Routes>
           
            {/* <Route path='/Home' Component={Home}></Route> */}
            <Route path="/Signup" Component={SignUp}></Route>
            <Route element={<ProtectedRoute isauthentication={authentication}/>}>
            <Route path='/Dashboard' Component={Dashboard}></Route>
            <Route path='/About' Component={About}></Route>
            <Route path='/EmployeeList' Component={EmployeeList}></Route>
            <Route path="/AddUser" Component={AddUser}></Route>
            </Route>
            <Route path="/Home" Component={Home}></Route>
            <Route path="/" Component={Default}></Route>
            <Route path='/LoginComponent' element={<LoginDetails data={doLogin}/>}/>
            </Routes>
            </div>
    )

}
export default Application;
