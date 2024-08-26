import React from 'react';
import './Dashboard.css'; 
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
      navigate(-1); // Go back one step in the history stack
  };
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Insights and analytics for the Easy Drive.</p>
        <button onClick={handleBackClick} className="nav-button">Back</button>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-cards">
        
          <div className="card">
            <h2>Active Drivers</h2>
            <p>58</p>
          </div>
         
         
        </section>
        <section className="dashboard-charts">
          <div className="chart card">
            <h2>Driver Status</h2>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
          <div className="chart card">
            <h2>Parents Status</h2>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;