import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditParent.css'; // Import the CSS file for styling

const EditParentPage = () => {
  const { id } = useParams(); // Get the parent id from the URL
  const navigate = useNavigate();
  
  // Initialize parent state
  const [parent, setParent] = useState({ name: '', email: '', phoneNumber: '', address: '' });
  const [isSaving, setIsSaving] = useState(false); // State to handle saving status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch parent data by id
    const fetchParentData = async () => {
      try {
        // Simulate an API call to fetch parent data
        // Replace this with your actual API call
        const response = await fetch(`/api/parents/${id}`);
        if (!response.ok) throw new Error('Failed to fetch parent data');
        const fetchedParent = await response.json();
        setParent(fetchedParent);
      } catch (error) {
        console.error('Error fetching parent data:', error);
        setError('Failed to fetch parent data. Please try again.'); // Set error message
      }
    };

    fetchParentData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent(prevParent => ({ ...prevParent, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true); // Set saving status to true
    setError(null); // Reset error
  
    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch(`/api/parents/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parent),
      });
  
      if (!response.ok) {
        // Handle non-2xx responses
        const errorData = await response.json(); // Assuming error details are returned in JSON format
        throw new Error(errorData.message || 'Failed to save parent data');
      }
  
      // Optionally handle the response data if needed
      const result = await response.json();
      console.log('Parent updated:', result);
  
      navigate('/manage-parents'); // Navigate to the parent management page after saving
    } catch (error) {
      console.error('Error saving parent:', error);
      setError(error.message || 'Failed to save parent data. Please try again.'); // Set error message
    } finally {
      setIsSaving(false); // Reset saving status
    }
  };
  
  const handleBackClick = () => {
    navigate(-1); // Go back one step in the history stack
  };

  return (
    <div className="edit-parent-container">
      <header className="edit-parent-header">
        <h1>Edit Parent</h1>
        <button onClick={handleBackClick} className="nav-button">Back</button>
      </header>
      <main className="edit-parent-main">
        <form className="edit-parent-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input type="text" name="name" value={parent.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={parent.email} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={parent.phoneNumber} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={parent.address} onChange={handleChange} />
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

export default EditParentPage;
