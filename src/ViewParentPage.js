import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ViewParentPage.css'; // Import the CSS file for styling

const ViewParentPage = () => {
  const { id } = useParams(); // Get the parent id from the URL
  const [parentData, setParentData] = useState(null); // State to hold parent data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch parent data by id
    const fetchParentData = async () => {
      try {
        const response = await fetch(`/api/parents/${id}`);
        if (!response.ok) throw new Error('Failed to fetch parent data');
        const fetchedParent = await response.json();
        setParentData(fetchedParent);
      } catch (error) {
        console.error('Error fetching parent data:', error);
        setError('Failed to fetch parent data. Please try again.');
      }
    };

    fetchParentData();
  }, [id]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!parentData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="view-parent-container">
      <header className="view-parent-header">
        <h1>Parent Details</h1>
      </header>
      <main className="view-parent-main">
        <div className="parent-details">
          <p><strong>ID:</strong> {parentData.id}</p>
          <p><strong>Name:</strong> {parentData.name}</p>
          <p><strong>Email:</strong> {parentData.email}</p>
          <p><strong>Phone Number:</strong> {parentData.phoneNumber}</p>
          <p><strong>Address:</strong> {parentData.address}</p>
          <p><strong>Additional Info:</strong> {parentData.additionalInfo || 'N/A'}</p>
        </div>
      </main>
    </div>
  );
};

export default ViewParentPage;
