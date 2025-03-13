import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styleuser.css';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddUser = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get('http://localhost:5021/api/Product');
    setEmployees(res.data);
  };

  const handleAddEmployee = async (values) => {
    const res = await axios.post('http://localhost:5021/api/Product', values);
    setEmployees([...employees, res.data]);
    if (res.status === 200) {
      alert('Employee added successfully');
      navigate('/EmployeeList');
    }
  };

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    empAdress: Yup.string().required('Address is required'),
    salary: Yup.number().required('Salary is required').positive('Salary must be a positive number'),
    empGenId: Yup.number().required('Employee Gender ID is required').positive('Gender ID must be a positive number'),
    empDeptId: Yup.number().required('Employee Department ID is required').positive('Department ID must be a positive number'),
  });

  return (
    <div>
      {/* <div className="main-content">
        <div className="login-contaoner">
          <div className="login-form"> */}
            <h2>Add Employee</h2>
            <Formik
              initialValues={{
                name: '',
                empAdress: '',
                salary: '',
                empGenId: '',
                empDeptId: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleAddEmployee}
            >
              <Form>
                <div className="main-content">
                    <div className='login-container'>
                        <div className='login-form'>

                       
                  <label>Name</label>
                  <input type="text" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="login-form">
                  <label>Address</label>
                  <Field type="text" name="empAdress" />
                  <ErrorMessage name="empAdress" component="div" className="error" />
                </div>

                <div className="login-form">
                  <label>Salary</label>
                  <Field type="number" name="salary" />
                  <ErrorMessage name="salary" component="div" className="error" />
                </div>

                <div className="login-form">
                  <label>Employee Gender ID</label>
                  <Field type="number" name="empGenId" />
                  <ErrorMessage name="empGenId" component="div" className="error" />
                </div>

                <div className="login-form">
                  <label>Employee Department ID</label>
                  <Field type="number" name="empDeptId" />
                  <ErrorMessage name="empDeptId" component="div" className="error" />
                </div>

                <button type="submit">Add Employee</button>
                </div>
                </div>
              </Form>
            </Formik>
          </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AddUser;
