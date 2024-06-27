import React from "react";
import "./team.css";
import { Helmet } from "react-helmet-async";
export default function Ourteams() {
  return (
    <>
      <Helmet>
        <title>Our Teams - Royal Cricket Academy</title>
        <meta
          name="description"
          content="Meet our dedicated team at Royal Cricket Academy, including mentors and players. Learn about our commitment to cricket excellence and community."
        />
      </Helmet>
      <div className="main-teams">
        <div className="another-main-teams">
          <div className="teams-container">
            <h1 className="our-teams">Our Teams</h1>
          </div>

          <div className="card-grid">
            <div className="card member-box shadow-lg">
              <span className="shape"></span>
              <img
                className="card-img-top"
                src="https://www.cricnepal.com/wp-content/uploads/2023/08/Kishore-Mahato-2-768x512.jpg"
                alt="Profile image"
              />
              <div className="card-body">
                <p className="name">Kishore Mahato</p>
                <p className="yy">Player with mentor</p>
                <p className="yy">
                  Welcome to Royal Cricket Academy! We believe that everyone can
                  learn and improve at cricket. We don't care about your age,
                  gender, or skill level. We just want you to have fun and enjoy
                  the game. We are committed to providing you with a positive
                  and supportive environment. We want you to feel comfortable
                  asking questions and learning from your coaches and teammates.
                </p>
              </div>
            </div>

            <div className="card member-box shadow-lg">
              <span className="shape"></span>
              <img
                className="card-img-top"
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/187950459_2956947937922104_3326920040116797528_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEWAQb1nvQwmawzvASVmqCiWqMiQ9n4UiRaoyJD2fhSJCITmiENEI3ZtQ_fGqqIWodVBseq0pd3pBWYtkCJq6e7&_nc_ohc=e4AG1SwspDcQ7kNvgGNiuGG&_nc_ht=scontent.fktm21-1.fna&oh=00_AYAPsSRR_tsg134xDpajVk7ExFlw4vrzboo5uO0cBLglcw&oe=66A4764C"
                alt="Profile image"
              />
              <div className="card-body">
                <p className="name">Kailash Pangeni</p>
                <p className="yy">Mentor with player</p>
                <p className="yy">
                  Welcome to Royal Cricket Academy! I am so excited to welcome
                  you to our academy. We are a passionate group of cricket
                  lovers who are dedicated to helping our players reach their
                  full potential. We believe that everyone can learn to play
                  cricket, regardless of their age, ability, or background. We
                  offer a variety of programs to fit your needs, from beginner
                  to advanced.
                </p>
              </div>
            </div>

            <div className="card member-box shadow-lg">
              <span className="shape"></span>
              <img
                className="card-img-top"
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/83436850_260991534877043_8500821863218282496_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFrTvn2QafgJq1b1hcn5hQ6ZkEcPdxcSvdmQRw93FxK90N0kLsweoAUDt4pUMaMFXvEId8IFHQ4xk3YBLLwoJM3&_nc_ohc=GqSznYlt5DEQ7kNvgEm7r3z&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCQBGtqg0WlExSCzhYuXAYO2YM0opHvEPlUMNLFJ-rFEQ&oe=669CFF23"
                alt="Profile image"
              />
              <div className="card-body">
                <p className="name">Santosh Neupane</p>
                <p className="yy">Mentor with player</p>
                <p className="yy">
                  Welcome to Royal Cricket Academy! I am so excited to welcome
                  you to our academy. We are a friendly and supportive community
                  of cricket lovers, and we are here to help you reach your full
                  potential. Whether you are a beginner or an experienced
                  player, we have something for you. We offer a variety of
                  programs and courses, from basic skills training to advanced
                  coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
