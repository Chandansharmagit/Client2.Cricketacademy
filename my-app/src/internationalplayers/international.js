import React from "react";
import "./international.css";
export default function International() {
  return (
    <>
      <div className="flex-box-pegination">
        <div className="items-image-box">
          <img
            src="https://www.cricnepal.com/wp-content/uploads/2023/06/Kishore-Mahato-768x512.jpg"
            alt=""
            className="national-players-image"
          />
        </div>
        <div className="items-image-box">
          <div className="personal-details">
            <h3 className="">Kishore Mahato</h3>
            <p>National Player from RCA</p>
          
          </div>

          <div className="user-details">
            <p className="animation">
                <h1 className="mna">Message from National Player</h1>
                <br />
              Welcome to Royal Cricket Academy! We believe that everyone can
              learn and improve at cricket. We don't care about your age,
              gender, or skill level. We just want you to have fun and enjoy the
              game. We are committed to providing you with a positive and
              supportive environment. We want you to feel comfortable asking
              questions and learning from your coaches and teammates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
