// AddNewParent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNewParent.css';

const AddNewParent = ({ handleAddParent }) => {
  const [parent, setParent] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent({
      ...parent,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!parent.name) newErrors.name = 'Name is required';
    if (!parent.email) newErrors.email = 'Email is required';
    if (!parent.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!parent.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Parent to be added:', parent);
      handleAddParent(parent); // Use the prop function
      alert('Parent added successfully');
      navigate('/manage-parents');
    } else {
      setErrors(formErrors);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="add-new-parent">
      <h2>Add New Parent</h2>
      <button onClick={handleBackClick} className="nav-button">Back</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={parent.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={parent.email}
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
            value={parent.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? 'error' : ''}
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={parent.address}
            onChange={handleChange}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>
        <button type="submit" className="submit-button">Add Parent</button>
      </form>
    </div>
  );
};

export default AddNewParent;
