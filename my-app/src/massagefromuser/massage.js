import React, { useEffect, useState } from "react";
import "./mass.css";
import axios from "axios";
import ResponsiveDrawer from "../admin/dashboard/drawer";
import Footers from "../footer/footers";

export default function Massage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []); // Add dependency array to run only once on mount

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://backendroyal.nepalmodelsecondaryschool.com/message");
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handledelete = async (id) => {
    try {
      await axios.delete(`https://backendroyal.nepalmodelsecondaryschool.com/message/${id}`);
      // Re-fetch data after deletion
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="users">Message from User</h1>
      <ul className="cards">
        {messages.map((item) => (
          <li className="cards__item" key={item._id}>
            <div className="card">
              <div className="card__content">
                <div className="card__title">{item.firstname}</div>
                <div className="card__title">{item.email}</div>
                <p className="card__text">{item.message}</p>
                <button
                  className="btn btn--block card__btn"
                  onClick={() => handledelete(item._id)}
                >
                  Delete Message
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ResponsiveDrawer/>
      
    </div>
  );
}
