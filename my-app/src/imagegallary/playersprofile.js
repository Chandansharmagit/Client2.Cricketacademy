import React, { useEffect, useState } from "react";
import "./image.css";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Footers from "../footer/footers";

export default function ImageGallary({ setProgress, mystyle }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get(
        "https://backendroyal.nepalmodelsecondaryschool.com/api/players"
      );
      // Sort players by run_score in descending order
      const sortedPlayers = response.data.sort(
        (a, b) => b.run_score - a.run_score
      );
      setPlayers(sortedPlayers);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Players Profile - Royal Cricket Academy</title>
        <meta
          name="description"
          content="Explore the profiles of players at Royal Cricket Academy. View their statistics, achievements, and comments from the head coach."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <div className="HELL" id="your">
        <div className="container line">
          <h1 className="hq">Players profile of rca</h1>
        </div>
        <div className="container emp-profile">
          <div className="grid-container">
            {players.map((player) => (
              <div className="profile-card" key={player._id}>
                <div className="profile-img">
                  <img
                    src={`https://backendroyal.nepalmodelsecondaryschool.com/${player.imageUrl}`}
                    alt={player.names}
                    className="players-image"
                  />
                </div>
                <div className="profile-info">
                  <div className="profile-head">
                    <h5>{player.names}</h5>
                    <h6>{player.role}</h6>
                    <p className="proile-rating">
                      RANKINGS : <span>{player.rank}</span>
                    </p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Timeline
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="profile-details">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label>Total Games Played</label>
                          </div>
                          <div className="col-md-6">
                            <p className="detailing">{player.game_played}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                            <label>Total Catch taken</label>
                          </div>
                          <div className="col-md-6">
                            <p className="detailing">{player.catch_taken}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                            <label>Total Awards</label>
                          </div>
                          <div className="col-md-6">
                            <p className="detailing">{player.total_awards}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                            <label>Wickets</label>
                          </div>
                          <div className="col-md-6">
                            <p className="detailing">{player.wickets_taken}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                            <label>Total Runs Scored</label>
                          </div>
                          <div className="col-md-6">
                            <p className="detailing">{player.run_score}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                            <label>Best Figure</label>
                          </div>
                          <div className="col-md-6">
                            <p className="detailing">{player.best_figure}</p>
                          </div>
                        </div>
                        <hr className="hr" />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <br />
                            <hr />
                            <p className="detailing">
                              comment from head coach: " {player.description} "
                              {player.names}...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}
