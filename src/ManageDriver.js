import React from 'react';
import './ManageDriver.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
const ManageDrivers = ({ drivers, setDrivers }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back one step in the history stack
  };

  const handleAddNewDriverClick = () => {
    navigate('/add-new-driver');
  };

  const handleEdit = (id) => {
    navigate(`/edit-driver/${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this driver?');
    if (confirmDelete) {
      setDrivers(drivers.filter(driver => driver.id !== id));
    }
  };

  const handleView = (id) => {
    navigate(`/view-driver/${id}`);
  };

  return (
    <div className="manage-drivers-container">
      <header className="manage-drivers-header">
        <h1>Manage Drivers</h1>
        <p>View and manage all drivers of the Easy Drive.</p>
        <button onClick={handleBackClick} className="nav-button">Back</button>
        <button className="add-driver-button" onClick={handleAddNewDriverClick}>
          Add New Driver
        </button>
      </header>
      <main className="manage-drivers-main">
        <table className="drivers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map(driver => (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.email}</td>
                <td>{driver.phoneNumber}</td>
                <td>{driver.status}</td>
                <td>
                  <button className="view" onClick={() => handleView(driver.id)}>View</button>
                  <button className="edit" onClick={() => handleEdit(driver.id)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(driver.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};


export default ManageDrivers;
