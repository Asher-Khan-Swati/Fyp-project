import React from 'react';
import { useParams } from 'react-router-dom';
import './ViewDriverPage.css'; // Import the CSS file for styling

const ViewDriverPage = () => {
  const { id } = useParams();
  // You will fetch driver details based on the id here
  // For demonstration, we'll use static data
  const driver = {
    id: parseInt(id, 1),
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    status: 'Active',
    address: '123 Main St, City, Country',
    licenseNumber: 'XYZ-123456'
  };
  

  return (
    <div className="view-driver-container">
      <header className="view-driver-header">
        <h1>Driver Details</h1>
      </header>
      <main className="view-driver-main">
        <div className="driver-details">
          <p><strong>ID:</strong> {driver.id}</p>
          <p><strong>Name:</strong> {driver.name}</p>
          <p><strong>Email:</strong> {driver.email}</p>
          <p><strong>Phone:</strong> {driver.phone}</p>
          <p><strong>Status:</strong> {driver.status}</p>
          <p><strong>Address:</strong> {driver.address}</p>
          <p><strong>License Number:</strong> {driver.licenseNumber}</p>
        </div>
      </main>
    </div>
  );
};

export default ViewDriverPage;
