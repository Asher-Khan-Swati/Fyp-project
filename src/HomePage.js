import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to Easy Drive's Admin Portal</p>
        <nav className="home-nav">
          <Link to="/dashboard" className="nav-button">Dashboard</Link>
          <Link to="/drivers" className="nav-button">Manage Drivers</Link>
          <Link to="/parent" className="nav-button">Manage Parents</Link>
        </nav>
      </header>
      <main className="home-main">
        <div className="card">
          <h2>Dashboard Overview</h2>
          <p className="card-description">Quick stats about the service.</p>
          <div className="stats">
            <div className="stat-item">
              <h3>Active Drivers</h3>
              <p className="stat-value">10</p>
            </div>
            <div className="stat-item">
              <h3>Total Users</h3>
              <p className="stat-value">300</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Recent Activities</h2>
          <ul className="activity-list">
            <li>Asher Khan Swati completed a pickup at 10:30 AM.</li>
            <li>Order #12345 was assigned to Asher Khan Swati.</li>
            <li>New user registered: Tanveer Ahmed.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
