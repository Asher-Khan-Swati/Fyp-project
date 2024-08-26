import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNewDriver.css';

const AddNewDriver = ({ handleAddDriver }) => {
  const [driver, setDriver] = useState({
    name: '',
    licenseNumber: '',
    email: '',
    phoneNumber: '',
    status: '', // Corrected field name
    address: '', // New field
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver({
      ...driver,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!driver.name) newErrors.name = 'Name is required';
    if (!driver.licenseNumber) newErrors.licenseNumber = 'License number is required';
    if (!driver.email) newErrors.email = 'Email is required';
    if (!driver.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!driver.status) newErrors.status = 'Status is required';
    if (!driver.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Driver to be added:', driver); // Debugging statement
      handleAddDriver(driver);
      alert('Driver added successfully'); // Show alert on successful submission
      navigate('/drivers');
    } else {
      setErrors(formErrors);
    }
  };
  

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="add-new-driver">
      <h2>Add New Driver</h2>
      <button onClick={handleBackClick} className="nav-button">Back</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={driver.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="licenseNumber">License Number</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={driver.licenseNumber}
            onChange={handleChange}
            className={errors.licenseNumber ? 'error' : ''}
          />
          {errors.licenseNumber && <p className="error-message">{errors.licenseNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={driver.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={driver.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? 'error' : ''}
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={driver.status}
            onChange={handleChange}
            className={errors.status ? 'error' : ''}
          />
          {errors.status && <p className="error-message">{errors.status}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={driver.address}
            onChange={handleChange}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>
        <button type="submit" className="submit-button">Add Driver</button>
      </form>
    </div>
  );
};

export default AddNewDriver;
