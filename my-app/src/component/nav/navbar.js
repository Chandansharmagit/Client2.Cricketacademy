import React, { useState } from "react";
import "./nav.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import pngimage from "../../fixedbackground/favicon.ico";
const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    menu: false,
    services: false,
  });

  const [dark, setdark] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu after clicking any link
  };

  //setting the dark mode on the button click in the react js
  const handledarkmode = () => {
    if (dark) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
    setdark(!dark);
  };

  const handlelightmode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const home = () => {
    navigate("/");
  };

  return (
    <div className="togger">
      <header className="headerrs">
        <div className="container">
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={menuOpen}
            onChange={handleMenuToggle}
          />

          <label htmlFor="check" className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </label>
         <img src={pngimage} alt="" className="logo-rca" onClick={home} />
          <div className="logo-container">
           
          
          </div>

          <div className={`nav-btn ${menuOpen ? "open" : ""}`}>
            <div className="nav-links">
              <ul>
                <li className="nav-link" style={{ "--i": ".6s" }}>
                  <Link to="/" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link to="/team" onClick={handleLinkClick}>
                    Team
                  </Link>
                  {dropdownOpen.menu && <div className="dropdown"></div>}
                </li>
                <li className="nav-link" style={{ "--i": "1.1s" }}>
                  <a onClick={() => handleDropdownToggle("services")}>
                    Services
                  </a>
                  {dropdownOpen.services && <div className="dropdown"></div>}
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to="/imageGallary" onClick={handleLinkClick}>
                    Image gallary
                  </Link>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to="/videos" onClick={handleLinkClick}>
                    Videos gallary
                  </Link>
                </li>

                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to="/players-profile" onClick={handleLinkClick}>
                    Players profile
                  </Link>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to="/contact" onClick={handleLinkClick}>
                    Contact
                  </Link>
                </li>
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link to="/news" onClick={handleLinkClick}>
                    News
                  </Link>
                </li>
                {dark ? (
                  <li className="nav-link" style={{ "--i": "1.35s" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-brightness-alt-low-fill"
                      viewBox="0 0 16 16"
                      onClick={handledarkmode}
                      id="moon"
                    >
                      <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707M8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4" />
                    </svg>
                  </li>
                ) : (
                  <li className="nav-link" style={{ "--i": "1.35s" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="30"
                      fill="currentColor"
                      class="bi bi-moon"
                      viewBox="0 0 16 16"
                      id="moon"
                      onClick={handledarkmode}
                    >
                      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                    </svg>
                  </li>
                )}

                <li className="nav-link" style={{ "--i": "1.35s" }}></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
