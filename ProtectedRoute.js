// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ isAuthenticated, component: Component }) => {
//   return isAuthenticated ? <Component /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;


import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute=(props)=>{

  return( props.isAuthenticated ? <Outlet/>:<Navigate to='./Home'/>);
}
export default ProtectedRoute;