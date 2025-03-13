import axios from "axios";
import { useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

// Navbar Component
// const Newbar = () => {
//   return (
//     <div className="navbar">
//       <span>My App</span>
//       <div>
//         <a href="/home" style={{ color: "white", marginRight: "15px" }}>Home</a>
//         <a href="/about" style={{ color: "white", marginRight:"10px" }}>About</a>
//         <a href="/Home" style={{color:"white"}}>Sign up</a>
//       </div>
//     </div>
//   );
// };

const LoginDetails = ({ data }) => {
  const [userName, setUserName] = useState('');
  const [address, setAdress] = useState('');
  const navigate = useNavigate();

  const handleData = async () => {
    const body = {
      userName: userName,
      address: address
    };
    try {
      const response = await axios.post("http://localhost:5021/api/Login", body);
      console.log("Token value", response.data);
      localStorage.setItem("authtoken", response.data);
      const token = localStorage.getItem("authtoken");

      const product = await axios.get("http://localhost:5021/api/Product", {
        headers: {
          'Authorization': 'Bearer ' + token,
        }
      });

      console.log(product.data);
      const user = product.data.find((e) => (e.name === userName && e.empAdress === address))
      if (user) {
        console.log("Login is successful");
        data();
        navigate('/Home');
      } else {
        console.log("User not found");
      }
    } catch (err) {
      console.log("Error in fetching", err);
    }
  };

  return (
    <div>
      {/* Navbar */}
      {/* <Newbar /> */}

      {/* Main Content */}
      <div className="main-content">
        <div className="login-container">
          <div className="login-form">
            <h2>Login Form</h2>
            <label><b>Username</b></label>
            <input type="text" onChange={(e) => { setUserName(e.target.value) }} />

            <label>Address</label>
            <input type="password" onChange={e => setAdress(e.target.value)} />

            <button type="submit" onClick={handleData}>Submit</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
