import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./drawer.css"; // Import external stylesheet for sidebar styles

const ResponsiveDrawer = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here, e.g., clear session
    navigate("/User/login");
  };

  return (
    <div className="sideways">
      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
        <div className="sidebar-header">
          <h3>MAIN MENU</h3>
        </div>
        <ul>
          <li>
            <Link to="/drawer">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Admin Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/videos_dashboard">
              <i className="fa fa-video fa-2x"></i>
              <span className="nav-text">Video Gallery RCA</span>
            </Link>
          </li>
          <li>
            <Link to="/newsupdate">
              <i className="fa fa-newspaper fa-2x"></i>
              <span className="nav-text">News RCA</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/Players_profile_dynamic">
              <i className="fa fa-user fa-2x"></i>
              <span className="nav-text">Players Profile</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/Image_rca">
              <i className="fa fa-camera fa-2x"></i>
              <span className="nav-text">RCA Image Gallery</span>
            </Link>
          </li>
          <li>
            <Link to="/massages">
              <i className="fa fa-cogs fa-2x"></i>
              <span className="nav-text">New Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/total_user_login">
              <i className="fa fa-users fa-2x"></i>
              <span className="nav-text">Total User Login</span>
            </Link>
          </li>
        </ul>
        <ul className="logout">
          <li>
            <a href="#" onClick={handleLogout}>
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="toggle-btn" onClick={toggleSidebar}>
        <div className="toggle-icon">☰</div>
      </div>
    </div>
  );
};

export default ResponsiveDrawer;
