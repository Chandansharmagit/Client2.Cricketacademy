import React, { useEffect, useState } from "react";
import ImageGallary from "../imagegallary/playersprofile";
import Footers from "../footer/footers";
import axios from "axios";
import "./events.css";
import { Helmet } from "react-helmet-async";
export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://backendroyal.nepalmodelsecondaryschool.com/events_change"
      );
      setEvents(response.data.reverse());
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>News and Events - Royal Cricket Academy</title>
        <meta
          name="description"
          content="Stay updated with the latest news and events from Royal Cricket Academy. Discover our upcoming events, achievements, and community activities."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <div className="border">
        <div className="container line">
          <h1 className="hq">News and events RCA</h1>
        </div>

        <div className="events-container">
          {events.map((image) => (
            <div className="event-card" key={image._id}>
              <div className="event-card__img">
                <img
                  src={`https://backendroyal.nepalmodelsecondaryschool.com/${image.url}`}
                  alt=""
                />
              </div>
              <div className="event-card__content">
                <h2>{image.title1}</h2>
                <p>{image.paragraph}</p>
                <a href="">See more</a>
              </div>
            </div>
          ))}
        </div>
        <Footers />
      </div>
    </>
  );
}
