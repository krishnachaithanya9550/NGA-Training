import { useState } from "react";
import axios from "axios";
const CreatenewAccount=()=>{

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [salary, setSalary] = useState('');
    const [empgenId, setGenId] = useState('');
    const [deptid, setdeptid] = useState('');
    const [empdebt, setDept] = useState('');

    const handle=async()=>{
        const data={
            name:username,
            salary:salary,
            empGenId:empgenId,
            empAdress:password,
            empDeptId:deptid,
            empDept:empdebt
        }
        try{
            const result= await axios.post("http://localhost:5021/api/Product",data)
                console.log(result.data);
                alert("data is added ");
        }
        catch(err){
            console.log("error in adding");
            alert("error in adding");
        }
    }
    return (
        <div>
                <h2>Login</h2>
                <div className='row col-md-12'>
                    <div className='col-md-4'>
                        User Name
                    </div>
                    <div className='col-md-4'>
                       <input type='text'  className='form-control' onChange={(e)=>setName(e.target.value)} ></input>
                    </div>
                </div>
                <div className='row col-md-12'>
                    <div className='col-md-4'>
                       Password
                    </div>
                    <div className='col-md-4'>
                       <input type='password'  className='form-control' onChange={(e)=>setPassword(e.target.value)} ></input>
                    </div>
                </div>
                <div className='row col-md-12'>
                    <div className='col-md-4'>
                       GenerId
                    </div>
                    <div className='col-md-4'>
                       <input type='number'  className='form-control' onChange={(e)=>setGenId(e.target.value)} ></input>
                       <p>type 1 for male type 2 for female </p>
                    </div>
                </div>
                <div className='row col-md-12'>
                    <div className='col-md-4'>
                       Salary
                    </div>
                    <div className='col-md-4'>
                       <input type='text'  className='form-control' onChange={(e)=>setSalary(e.target.value)} ></input>
                    </div>
                </div>
                <div className='row col-md-12'>
                    <div className='col-md-4'>
                       DepartmentId
                    </div>
                    <div className='col-md-4'>
                       <input type='text'  className='form-control' onChange={(e)=>setDept(e.target.value)} ></input>
                    </div>
                </div>
                <div className='row col-md-12'>
                    <div className='col-md-4'>
                       Department
                    </div>
                    <div className='col-md-4'>
                       <input type='text'  className='form-control' onChange={(e)=>setdeptid(e.target.value)} ></input>
                    </div>
                </div>

                {/* <span>{errorMessage}</span> */}
                {/* <button className='col-md-3 btn btn-primary' onClick={handlesubmit} >Login</button> */}
                <button className='col-md-3 btn btn-primary' onClick={handle} >create new account</button>
            </div>
      );

};
export default CreatenewAccount;