import React from 'react';
import './ManageParent.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const ManageParents = ({ parents , setParents }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back one step in the history stack
  };

  const handleAddNewParentClick = () => {
    navigate('/add-new-parent');
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this parent?');
    if (confirmDelete) {
      setParents(parents.filter(parent => parent.id !== id));
    }
  };
  const handleEdit = (id) => {
    navigate(`/edit-parent/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view-driver/${id}`);
  };


  return (
    <div className="manage-parents-container">
      <header className="manage-parents-header">
        <h1>Manage Parents</h1>
        <p>View and manage all parents in the system.</p>
        <button onClick={handleBackClick} className="nav-button">Back</button>
        <button className="parentbutton" onClick={handleAddNewParentClick}>
          Add New Parent
        </button>
      </header>
      <main className="manage-parents-main">
        <table className="parents-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parents.map(parent => (
              <tr key={parent.id}>
                <td>{parent.id}</td>
                <td>{parent.name}</td>
                <td>{parent.email}</td>
                <td>{parent.phoneNumber}</td>
                <td>
                  <button className="view" onClick={() => handleView(parent.id)}>View</button>
                  <button className="edit" onClick={() => handleEdit(parent.id)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(parent.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageParents;
