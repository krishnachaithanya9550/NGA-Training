// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/actions';
// import { useNavigate } from 'react-router-dom';

// import { useEffect, useState } from "react"

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username.trim() === '') return;

//     const user = { name: username }; // Sample user object
//     dispatch(login(user)); // Dispatch login action to store user in Redux and localStorage
//     navigate('/dashboard'); // Redirect to dashboard after login
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

// import axios from 'axios';
// function Login(){
//   const [id,setID]=useState('');
//   const [name,setName]=useState('');
//   const handlesubmit=()=>{
//   // try{
//       const response=axios.get('http://localhost:4000/employees');

//       const user=response.data.find((e)=>{e.id==id && e.name==name});
//       if(user){
//         console.log("Login successfull");
//       }
//       else{
//         console.log("Login unsuccessfull");
//       }
    // }
  // catch(error){
  //   console.log("error in fetching",error);
  // }
// }



//   return(
//     <div className="row col-md-4">
//       <div className="col-md-12">
//         id
//       </div>
//       <div className="col-md-12">
//           <input type="text" placeholder="id"></input>
//       </div>

//       <div className="col-md-12">
//         name
//       </div>
//       <div className="col-md-12">
//           <input type="text" placeholder="name"></input>
//       </div>

//       <button type="submit">Login</button>
//     </div>
//   )
// }
