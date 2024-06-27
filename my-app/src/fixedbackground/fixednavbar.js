import React, { useState } from "react";
import "./fixed.css";
import Footers from "../footer/footers";
import axios from "axios";
import { Helmet } from "react-helmet-async";
export default function Fixednavbar() {
  const [formdata, setFormdata] = useState({
    firstname: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleinputchange = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://backendroyal.nepalmodelsecondaryschool.com/api/send-email",
        formdata
      );
      alert("massage sent sucessful");

      setFormdata({
        firstname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Booking Form - Royal Cricket Academy</title>
        <meta
          name="description"
          content="Book your session at Royal Cricket Academy with our easy-to-use booking form. Join a community passionate about cricket and excellence."
        />
        {/* Add other meta tags as needed */}
      </Helmet>

      <div id="parallax-wrapper">
        <section>
          <div className="title">
            <hgroup>
              <h1>BOOKING FORM</h1>
            </hgroup>
          </div>
        </section>

        <section>
          <div className="p-one parallax-inner">
            {/* //now making the contact form with the react js  */}

            <div className="contact-container">
              <form
                className="contact-form row"
                method="POST"
                onSubmit={handlesubmit}
              >
                <div className="form-field col x-50">
                  <input
                    id="name"
                    className="input-text js-input"
                    type="text"
                    name="firstname"
                    onChange={handleinputchange}
                    value={formdata.firstname}
                    required
                  />
                  <label className="label" for="name">
                    Name
                  </label>
                </div>
                <div className="form-field col x-50">
                  <input
                    id="email"
                    className="input-text js-input"
                    type="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleinputchange}
                    required
                  />
                  <label className="label" for="email">
                    E-mail
                  </label>
                </div>
                <div className="form-field col x-100">
                  <input
                    id="message"
                    className="input-text js-input"
                    type="text"
                    name="message"
                    onChange={handleinputchange}
                    value={formdata.message}
                    required
                  />
                  <label className="label" for="message">
                    Message
                  </label>
                </div>
                <div className="form-field col x-100 align-center">
                  <input className="submit-btn" type="submit" value="Submit" />
                </div>
              </form>

              {/* <div className="item-preginations">
                <div className="hell0">
                  <h2 className="most-asked">FREEQUENTLY ASKED QUESTIONS</h2>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className="content-text">
            <p>
              <span className="first-letter red">A</span>t Royal cricket academy
              (RCA), we believe in the transformative power of cricket. We are
              more than just a training facility; we are a haven for passionate
              cricketers who strive for excellence both on and off the field.
              With a commitment to nurturing talent, fostering sportsmanship,
              and instilling a relentless pursuit of greatness, RCA stands as a
              beacon of inspiration for aspiring cricketers. our journey began
              with a vision to create a sanctuary in all seven provinces of
              Nepal where cricket enthusiasts could unleash their full
              potential.
            </p>
            <div className="line-break"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
