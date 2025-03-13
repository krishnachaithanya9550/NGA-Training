import { useState,useEffect } from "react";
import './styles.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const EmployeeList=()=>{

const [user,setUser]=useState([]);
const navigate=useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5021/api/Product")
         .then((response)=>response.json())
         .then((res)=>{
            setUser(res);
            console.log(res);
        }).catch((error)=>{
            console.log("Eroor in fetching",error);
        });
    },[]);

    const redirecttohome=()=>{
        navigate('/Application');
    }
    const AddEmployee=()=>{
        navigate('/AddUser');
    }
    const edit=()=>{
        
    }
    return(
        <div>
            <h2>List of All Employees</h2>
            <button type="submit" onClick={AddEmployee}>Add Employee</button>
            <table>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>DeptId</th>
                            {/* <th>Department</th> */}
                            <th>Action</th>
                        </tr>  
                </thead>
                <tbody>
                    {user.map((employeelist)=>(
                        <tr key={employeelist.id}>
                            <td>{employeelist.id}</td>
                            <td>{employeelist.name}</td>
                            <td>{employeelist.salary}</td>
                            <td>{employeelist.empGenId}</td>
                            <td>{employeelist.empAdress}</td>
                            <td>{employeelist.empDeptId}</td>
                            {/* <td>{employeelist.empDept}</td> */}
                            <td>
                                <button type="submit" onClick={edit} style={{marginRight:"10px"}}>eidt</button>
                                <button type="submit" onClick={edit}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="submit" onClick={redirecttohome}>Back to dashboard</button>
        </div>
    )
}
export default EmployeeList
