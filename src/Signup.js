import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  empAdress: Yup.string().required('Address is required'),
});

const SignUp = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5021/api/Product')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const handleSubmit = (values, { resetForm }) => {

    const userExists = users.find(
      (user) => user.name === values.name && user.empAdress === values.empAdress
    );

    if (userExists) {
      console.log('You already have credentials. Please use them.');
      navigate('/LoginComponent');
    } 
    else {
      axios
        .post('http://localhost:5021/api/Product', values)
        .then((response) => {
          console.log('New user data added:', response.data);
          alert('Employee details saved successfully');
          setUsers((prevUsers) => [...prevUsers, response.data]);
          resetForm(); 
          navigate('/LoginComponent'); 
        })
        .catch((error) => {
          console.error('Error saving employee data:', error);
        });
    }
  };

  return (
    <div>
      <h1>Employee Sign-Up Form</h1>

      <Formik
        initialValues={{
          name: '',
          empAdress: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='main-content'>
          <div className='login-container'>
            <div className='login-form'>
            <label htmlFor="name">Name: </label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className='login-form'>
            <label htmlFor="empAdress">Address: </label>
            <Field type="text" id="empAdress" name="empAdress" />
            <ErrorMessage name="empAdress" component="div" />
          </div>

          <button type="submit">Sign Up</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
