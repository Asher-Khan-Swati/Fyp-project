// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Port number for the API server

// Enable CORS for cross-origin requests
app.use(cors());
app.use(express.json());

// Mock data for drivers
const drivers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    status: 'Active',
    address: '123 Main St, City, Country',
    licenseNumber: 'XYZ-123456'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '987-654-3210',
    status: 'Inactive',
    address: '456 Elm St, Town, Country',
    licenseNumber: 'ABC-654321'
  }
];

// Route to get driver by ID
app.get('/api/drivers/:id', (req, res) => {
  const driverId = parseInt(req.params.id, 10);
  const driver = drivers.find(d => d.id === driverId);
  
  if (driver) {
    res.json(driver);
  } else {
    res.status(404).json({ message: 'Driver not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
