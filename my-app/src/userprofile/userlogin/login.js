import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./logins.css";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footers from "../../footer/footers";

export default function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send POST request to /user_login endpoint with email and password
      const response = await axios.post("https://backendroyal.nepalmodelsecondaryschool.com/user_login", {
        email,
        password,
      });

      // Check if login was successful
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        const expirationTime = getExpirationTimeInDays();
        Cookies.set("auth", JSON.stringify({ email, password }), {
          expires: expirationTime,
        });
        navigate("/drawer");
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Please enter correct email and password");
      toast.error("Login failed");
    }
  };

  const getExpirationTimeInDays = () => {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 1 * 60 * 60 * 1000); // Add one hour in milliseconds
    const timeUntilExpiration = oneHourLater - now; // Time in milliseconds
    return timeUntilExpiration / (1000 * 60 * 60); // Convert milliseconds to hours
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login_form">
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password-prediction"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="logins">
          Login
        </button>
        <span className="login">
          <Link to="/User/login/forgotpassword_email">
            <button className="forgot">Forgot Password</button>
          </Link>
        </span>
      </form>
      <Footers />
    </div>
  );
}
