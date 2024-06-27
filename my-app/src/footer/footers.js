import React from "react";
import "./foot.css";
import { Link } from "react-router-dom";
export default function Footers() {
  return (
    <div>
      <footer className="footer-distributed ">
        <div className="footer-left">
          <h3>
            ROYAL CRICKETACADEMY{" "}
            <span>
              {/* <img
                src="https://www.hiclipart.com/free-transparent-background-png-clipart-ogvgq"
                alt=""
              /> */}
            </span>
          </h3>

          <p className="footer-links">
            <Link to="/" className="link-1">
              home
            </Link>

            <Link to="/registration">Registration</Link>

            <Link to="/staff">Teams</Link>

            <Link to="/result">Check profile</Link>
          </p>

          <p className="footer-company-name">Contact : 9845427041</p>
          <a href="https://www.facebook.com/raghunagh.sharma">
            <p className="footer-company-name">Developer - Chandan sharma </p>
          </a>
          <span>
            <img
              className="rounded-circle"
              alt="avatar1"
              src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-1/438163929_1480113435909491_340285003192813421_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8Kuoh15qPucQ7kNvgHHHvKh&_nc_ht=scontent.fktm17-1.fna&oh=00_AYDAOO-1REZK9rL7u2OSLBjSHx0QQaXLkSF2KoeOyMLd8g&oe=664705FD"
            />
          </span>
       
          <span></span>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Devchuli Nagarapalika</span>Gandaki Pradesh ,Nepal
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>982-4457178</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:royalcricketacdemy@gmail.com">
                royalcricketacdemy@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About RCA</span>
            At Royal cricket academy (RCA), we believe in the transformative
            power of cricket. We are more than just a training facility; we are
            a haven for passionate cricketers who strive for excellence both on
            and off the field. With a commitment to nurturing talent, fostering
            sportsmanship, and instilling a relentless pursuit of greatness, RCA
            stands as a beacon of inspiration for aspiring cricketers. our
            journey began with a vision to create a sanctuary in all seven
            provinces of Nepal where cricket enthusiasts could unleash their
            full potential.
          </p>

        
        </div>
        <div className="map">
       
        </div>
      </footer>
    </div>
  );
}
