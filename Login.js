import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
function Login({data}){

    const [username,setName]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handlesubmit=async()=>{
        try{
        const response= await axios.get("http://localhost:4000/employees");
        const user=response.data.find((e)=>e.username===username && e.password===password);
        if(user){
            console.log("login successfull with username",username);
            data();
            navigate('/Dashboard');
            // <li>
            // <Link to="/Dashboard"></Link>
            // <Route path="C:\Users\krish\OneDrive\Desktop\Great Learning\Phase-2\redux\src\pages\Dashboard.js" Component={Dashboard}></Route>
            // </li>
        }
        else{
            console.log("error in fetchin");
        }
    }
    catch(error){
        console.log("error in handeling",error);
    }
    }

    return(
        <div className="row col-md-12">
            <div className="col-md-4" >
                username
            </div>
            <div className="col-md-4">
                <input type="text" onChange={(e)=>setName(e.target.value)}></input> 
            </div>
            <div className="col-md-4" >
                password
            </div>
            <div className="col-md-4">
                <input type="password" onChange={(e)=>setPassword(e.target.value)}></input> 
            </div>
            <button onClick={handlesubmit}>Login</button>
        </div>
    )

}
export default Login;