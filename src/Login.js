import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiManager from './ApiManager';
import axios from "axios";


const Logincomponent = ({ data }) => {
  const [username, setName] = useState('');
  const [empAdress, setempAdress] = useState('');
  // const navigate = useNavigate();

  
  // const handlesubmit = async () => {
  //   try {
  //     const url = "http://localhost:5021/api/Login"; 
  //     const response = await ApiManager.GetApiCall(url);
  //     // console.log('Response:', response);
  //     // const token=localStorage.getItem(response);
  //     const user = response.find(
  //       (e) => e.name === username && e.empAdress === empAdress
  //     );
  //     // console.log("Token", token);
  //     if (user) {
  //       console.log("Login successful");
        
  //       data();  
  //       navigate('/Home');  
  //     } else {
  //       alert("Invalid credentials");
  //       console.log("Invalid login credentials");
  //     }
  //   } catch (error) {
  //     console.error("Error handling login: ", error);
  //     alert("Error handling login");
  //   }
  // };

  // const createnew = async () => {
  
  //   const data = {
  //     name: username, 
  //     empAdress: empAdress
  //   };
  
  //   try {
  //     const url = "http://localhost:5021/api/Product"; 
  
  //     console.log("Calling API with data:", data);
  
  //     const response = await ApiManager.PostApiCall(url, data);

  //     console.log("API response:", response);
  //   } catch (error) {
  //     console.error("Error handling login:");
  //     alert("Error handling login: ");
  //   }
  // };
   

  const handlesubmit = async () => {
    try {
      // Log the values being sent in the request
      console.log('Sending login request with:', { username, empAdress });

      // Send the POST request
      const response = await axios.post('http://localhost:5021/api/login', {
        username,
        empAdress,
      });

      console.log('Response:', response);

      if (response.data && response.data.token) {
        const token = response.data.token;
        console.log('JWT Token:', token);
        localStorage.setItem('token', token);

        // Proceed to fetch the product data after login
        // fetchData(token);
      } else {
        console.error('Token not received from server');
      }

    } catch (error) {
      // Enhanced error handling
      console.error('Login error:', error.response ? error.response.data : error.message);

      // You can log additional error information if needed
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
    }
};

// const fetchData = async (token) => {
//     try {
//       console.log('Fetching products with token:', token);
//       const response = await axios.get('http://localhost:5021/api/product', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('Fetched products:', response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error.response ? error.response.data : error.message);
//     }
// };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <div>User Name</div>
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <br></br>
      <div>
        <div>empAdress</div>
        <div >
          <input
            type="empAdress"
            onChange={(e) => setempAdress(e.target.value)}
          />
        </div>
      </div>

      <br></br>
      <button onClick={handlesubmit}>
        Login
      </button>
      {/* <button onClick={createnew}>create new Account</button> */}

    </div>
  );
};

export default Logincomponent;
