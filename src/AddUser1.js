import {Formik,Form,Field,ErrorMessage} from 'formik';
// import { useState } from 'react';
import axios from'axios';
import './styles.css';

const AddUser1=()=>{

    const handleSubmit=(values,{resetForm})=>{
        axios.post("http://localhost:5021/api/Product",values).then((response)=>{response.json();
            console.log(response.data);
                })
        .then((res)=>{
            alert("employee added");
            resetForm();
        });
    }

    const handleAddEmployee = async () => {
        const res = await axios.post('http://localhost:5021/api/Product', newEmployee);
        setEmployees([...employees, res.data]);
        setNewEmployee({ name: '', position: '', department: '' });
      };

    return(
        <div>
            <h1>Add Employee Details</h1>
            <Formik
                initialValues={{
                name: '',
                salary: '',
                empGenId: '',
                empAdress:'',
                empDeptid:'',
                empDept:''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                <div>
                    <label htmlFor="name">Name : </label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <label htmlFor="salary">salary : </label>
                    <Field type="text" id="salary" name="salary" />
                    <ErrorMessage name="salary" component="div" />
                </div>
                <div>
                    <label htmlFor="genderId">GenderId : </label>
                    <Field as="select" id="empGenId" name="empGenId">
                    <option value="">Select Gender</option>
                    <option value="Male">1</option>
                    <option value="Female">2</option>
                    <option value="Other">Other</option>
                    </Field>
                    <ErrorMessage name="empGenderId" component="div" />
                </div>

                <div>
                    <label htmlFor="adress">Adress : </label>
                    <Field type="text" id="empAdress" name="empAdress" />
                    <ErrorMessage name="empAdress" component="div" />
                </div>

                <div>
                    <label htmlFor="deptId">DeptId : </label>
                    <Field type="text" id="empDepIid" name="empDeptId" />
                    <ErrorMessage name="empDeptId" component="div" />
                </div>
                <div>
                    <label htmlFor="Dept">Dept : </label>
                    <Field type="text" id="empDept" name="empDept" />
                    <ErrorMessage name="empDept" component="div" />
                </div>
                <button type="submit">Save Employee</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddUser1;