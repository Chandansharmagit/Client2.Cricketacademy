import React from "react";
import "./featuress.css";
function FeatureCard({ title, content, imgSrc, alt }) {
  return (
    <section classNameName="card">
      <h2 classNameName="card_title">{title}</h2>
      <p classNameName="card_content">{content}</p>
      <img classNameName="card_img" src={imgSrc} alt={alt} />
    </section>
  );
}

function Features() {
  return (
    <div>
      <main className="fourcard">
        <div className="headerr">
          <h1 className="special">SPECIAL FEATURES</h1>
          <p className="description">
            We offer some awesome features that will help you We have some
            special crieteria that will help you.Tailored to meet your
            individual needs and goals.Learn from the best in the industry with
            years of experience.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Features;
