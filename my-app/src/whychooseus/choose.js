import React, { useEffect } from "react";
import "./chooses.css";
import gsap from "gsap";

import { useRef } from "react";
const AdvertiserServices = () => {
  const sliderref = useRef(null);
  useEffect(() => {
    const sections = document.querySelectorAll(".projects__card");

    sections.forEach((section) => {
      const whyChooseUs = section.querySelector(".why-choose-us");

      gsap.fromTo(
        whyChooseUs,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Adjust the start point as needed
            end: "bottom 20%", // Adjust the end point as needed
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section classNameName="projects section" id="projects" ref={sliderref}>
        <h2 classNameName="section__title-1">
          <h1 id="why-choose-us">Why Choose us</h1>
      
        </h2>

        <ul className="cards">
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--fence"></div>
              <div className="card__content">
                <div className="card__title">EXPERT COACHING STAFF</div>

                <p className="card__text">
                  Our coaches are seasoned professionals with extensive
                  experience in both playing and coaching cricket at high
                  levels.
                </p>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--river"></div>
              <div className="card__content">
                <div className="card__title">HOLISTIC TRAINING PROGRAMS</div>
                <p className="card__text">
                  Our programs cover all facets of cricket, from batting,
                  bowling, and fielding to fitness, nutrition, and mental
                  conditioning.
                </p>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--record"></div>
              <div className="card__content">
                <div className="card__title">Special Events</div>
                <p className="card__text">
                  We boast world-className training facilities equipped with the
                  latest technology, including advanced bowling machines and
                  high-quality practice pitches.
                </p>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--flowers"></div>
              <div className="card__content">
                <div className="card__title">Turf Wicket</div>
                <p className="card__text">
                  A turf wicket is more than just a playing surface—it's a
                  game-changer for cricket enthusiasts and professional players
                  alike. Here's why a turf wicket stands out as the preferred
                  choice:
                </p>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--npl"></div>
              <div className="card__content">
                <div className="card__title">REGULAR TOURNAMENTS AND GAMES</div>
                <p className="card__text">
                  Join us for our thrilling regular tournaments and games!
                  Whether you're a seasoned pro or just starting out, our
                  competitive yet friendly environment offers something for
                  everyone.
                </p>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div className="card">
              <div className="card__image card__image--chandan"></div>
              <div className="card__content">
                <div className="card__title">Diverse Game Selection</div>
                <p className="card__text">
                  Hosting U16 and U19 selection events at our own ground offers
                  a unique opportunity for young cricket players to showcase
                  their talents in a familiar and supportive environment.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AdvertiserServices;
