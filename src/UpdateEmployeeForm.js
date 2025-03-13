import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateEmployeeForm = () => {
  const location = useLocation(); // Get the state passed from AddUser
  const { employee } = location.state; // Extract employee data from state
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);
  const navigate = useNavigate();

  useEffect(() => {
    if (employee) {
      setUpdatedEmployee(employee);
    }
  }, [employee]);

  const handleUpdateEmployee = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5021/api/Product/${updatedEmployee.id}`,
        updatedEmployee
      );
      if (res.status === 200) {
        alert('Employee updated successfully');
        navigate('/EmployeeList'); // Navigate back to the employee list after successful update
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Failed to update employee');
    }
  };

  return (
    <div className="update-form-container">
      <h2>Update Employee</h2>
      <div className="form">
        <label>Name</label>
        <input
          type="text"
          value={updatedEmployee.name || ''}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, name: e.target.value })}
        />
        <label>Address</label>
        <input
          type="text"
          value={updatedEmployee.empAdress || ''}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, empAdress: e.target.value })}
        />
        <label>Salary</label>
        <input
          type="number"
          value={updatedEmployee.salary || ''}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, salary: e.target.value })}
        />
        <label>Employee Gender ID</label>
        <input
          type="number"
          value={updatedEmployee.empGenId || ''}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, empGenId: e.target.value })}
        />
        <label>Department ID</label>
        <input
          type="number"
          value={updatedEmployee.empDeptId || ''}
          onChange={(e) => setUpdatedEmployee({ ...updatedEmployee, empDeptId: e.target.value })}
        />
        <button onClick={handleUpdateEmployee}>Update Employee</button>
      </div>
    </div>
  );
};

export default UpdateEmployeeForm;
