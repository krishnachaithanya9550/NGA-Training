import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute=(props)=>{
    return(
        props.isauthentication?<Outlet/>:<Navigate to='/'/>
    )
}
export default ProtectedRoute;