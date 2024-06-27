import React, { useEffect, useState } from "react";
import ImageGallary from "../imagegallary/playersprofile";
import Footers from "../footer/footers";
import axios from "axios";
import "./newvideos.css";
import { Helmet } from "react-helmet-async";
export default function Videos() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://backendroyal.nepalmodelsecondaryschool.com/videos"
      );
      setEvents(response.data.reverse());
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Videos Gallary - Royal Cricket Academy</title>
        <meta
          name="description"
          content="Explore the videos gallery of Royal Cricket Academy. Watch our latest cricket training sessions, matches, and events."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <div className="mystyle">
        <div className="container line">
          <h1 className="hq">Videos Gallary RCA</h1>
        </div>

        <main className="fourcard">
          {events.map((event, index) => (
            <div className="supervisor" key={index}>
              <div className="imgicon">
                <video
                  width="550"
                  height="320"
                  controls
                  className="videos-pregination"
                >
                  <source
                    src={`https://backendroyal.nepalmodelsecondaryschool.com/${event.videoUrl}`}
                    type="video/mp4"
                  />
                </video>
                <h1>{event.title}</h1>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footers />
    </div>
  );
}
