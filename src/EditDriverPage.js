import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditDriver.css'; // Import the CSS file for styling

const EditDriverPage = () => {
  const { id } = useParams(); // Get the driver id from the URL
  const navigate = useNavigate();
  
  // Initialize driver state
  const [driver, setDriver] = useState({ name: '', email: '', phone: '', status: '' });
  const [isSaving, setIsSaving] = useState(false); // State to handle saving status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch driver data by id
    const fetchDriverData = async () => {
      try {
        // Simulate an API call to fetch driver data
        // Replace this with your actual API call
        const response = await fetch(`/api/drivers/${id}`);
        if (!response.ok) throw new Error('Failed to fetch driver data');
        const fetchedDriver = await response.json();
        setDriver(fetchedDriver);
      } catch (error) {
        console.error('Error fetching driver data:', error);
      }
    };

    fetchDriverData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver(prevDriver => ({ ...prevDriver, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true); // Set saving status to true
    setError(null); // Reset error
  
    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch(`/api/drivers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(driver),
      });
  
      if (!response.ok) {
        // Handle non-2xx responses
        const errorData = await response.json(); // Assuming error details are returned in JSON format
        throw new Error(errorData.message || 'Failed to save driver data');
      }
  
      // Optionally handle the response data if needed
      const result = await response.json();
      console.log('Driver updated:', result);
  
      navigate('/'); // Navigate to the desired page after saving
    } catch (error) {
      console.error('Error saving driver:', error);
      setError(error.message || 'Failed to save driver data. Please try again.'); // Set error message
    } finally {
      setIsSaving(false); // Reset saving status
    }
  };
  
  const handleBackClick = () => {
    navigate(-1); // Go back one step in the history stack
  };

  return (
    <div className="edit-driver-container">
      <header className="edit-driver-header">
        <h1>Edit Driver</h1>
        <button onClick={handleBackClick} className="nav-button">Back</button>
      </header>
      <main className="edit-driver-main">
        <form className="edit-driver-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input type="text" name="name" value={driver.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={driver.email} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={driver.phone} onChange={handleChange} />
          </label>
          <label>
            Status:
            <select name="status" value={driver.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <button type="button" onClick={handleSave} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save'}
          </button>
          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
        </form>
      </main>
    </div>
  );
};

export default EditDriverPage;
