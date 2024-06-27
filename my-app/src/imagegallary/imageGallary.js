import React, { useEffect, useState } from "react";
import axios from "axios";
import "./imageGallarys.css";
import Footers from "../footer/footers";
import { Helmet } from "react-helmet-async";
export default function AllImage({ setProgress, mystyle }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://backendroyal.nepalmodelsecondaryschool.com/Imagegallary"
      );
      setEvents(response.data.reverse());
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Image Gallery - Royal Cricket Academy</title>
        <meta
          name="description"
          content="Explore the latest image gallery of Royal Cricket Academy. Discover our events, activities, and more."
        />
        <meta
          property="og:title"
          content="Image Gallery - Royal Cricket Academy"
        />
        <meta
          property="og:description"
          content="Explore the latest image gallery of Royal Cricket Academy. Discover our events, activities, and more."
        />
        <meta
          property="og:url"
          content="https://royalcricketacademy.com/imageGallary"
        />
        <link
          rel="canonical"
          href="https://royalcricketacademy.com/imageGallary"
        />
      </Helmet>
      <div className="mystyle">
        <div className="container line">
          <h1 className="hq">Image Gallary RCA</h1>
        </div>

        <div className="image-grid-container">
          {events.map((event) => (
            <div className="image-grid" key={event._id}>
              <img
                src={`https://backendroyal.nepalmodelsecondaryschool.com/${event.imageUrl}`}
                alt={`Image ${event._id}`}
                className="image-grids"
              />
            </div>
          ))}
        </div>
      </div>
      <Footers />
    </>
  );
}
