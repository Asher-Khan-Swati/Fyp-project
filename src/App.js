import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DashboardPage from './Dashboard';
import ManageDrivers from './ManageDriver';
import AddNewDriver from './AddNewDriver';
import ViewDriverPage from './ViewDriverPage';
import EditDriverPage from './EditDriverPage';
import ManageParent from './ManageParent';
import AddNewParent from './AddNewParent';
import EditParentPage from './EditParent';
import ViewParentPage from './ViewParentPage';

function App() {
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '345-678-9012', status: 'Active' },
  ]);

  const handleAddDriver = (newDriver) => {
    setDrivers(prevDrivers => [
      ...prevDrivers,
      { ...newDriver, id: prevDrivers.length + 1, status: 'Active' }
    ]);
  };

  const [parents, setParents] = useState([    
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '345-678-9012', status: 'Active' },]);

  const handleAddParent = (newParent) => {
    setParents(prevParents => [
      ...prevParents, 
      { ...newParent, id: prevParents.length + 1 }]);
  };

  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<HomePage />} />
        <Route path="/view-parent/:id" element={<ViewParentPage  />} />
        <Route path="/edit-parent/:id" element={<EditParentPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/drivers" element={<ManageDrivers drivers={drivers} setDrivers={setDrivers} />} />
        <Route path="/add-new-driver" element={<AddNewDriver handleAddDriver={handleAddDriver} />} />
        <Route path="/view-driver/:id" element={<ViewDriverPage drivers={drivers} />} />
        <Route path="/edit-driver/:id" element={<EditDriverPage drivers={drivers} setDrivers={setDrivers} />} />
        <Route path="/parent" element={<ManageParent parents={parents} />} />
        <Route path="/add-new-parent" element={<AddNewParent handleAddParent={handleAddParent} />} />
      </Routes>
    </Router>
  );
}

export default App;
