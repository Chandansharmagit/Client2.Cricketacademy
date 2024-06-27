import React, { useState } from "react";
import axios from "axios";
import "./fpass.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footers from "../../footer/footers";

const Forgotpass = () => {
  const navigate = useNavigate();
  const [email, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the backend endpoint '/api/userLogin' with the username and password
      const response = await axios.post(
        "https://backendroyal.nepalmodelsecondaryschool.com/forgotpassword",
        { email }
      );

      // Check if the login was successful based on the response status
      if (response.status === 200) {
        console.log(response.data); // Log the response from the backend
        navigate("");
        toast.success("Email sent sucess..");
      } else {
        toast.error("Email not Exist || or email format is wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Email not Exist || or email format is wrong");
    }
  };

  const handleFirstNameChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="login_form">
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={handleFirstNameChange}
              className="ims"
            />
          </label>
          <br />

          <br />
          <button type="submit" className="logins">
            Sent Email
          </button>
        </form>
      </div>
      <Footers />
    </div>
  );
};

export default Forgotpass;
