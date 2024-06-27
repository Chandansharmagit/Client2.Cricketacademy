import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import imageone from "../slider/newone.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./sl.css";

// Import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import AboutUsComponent from "../aboutus/newcomponect";
import AdvertiserServices from "../whychooseus/choose";
import Features from "../specialfetures/features";
import Fixednavbar from "../fixedbackground/fixednavbar";
import Ourteams from "../teams/ourteams";
import Newpricing from "../pricing/newpricing";
import Footers from "../footer/footers";
import images from "../fixedbackground/test.jpeg";
import International from "../internationalplayers/international";

export default function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const title = activeSlide.querySelector(".title");
        const subtitle = activeSlide.querySelector(".subtitle");
        const text = activeSlide.querySelector(".text");

        gsap.fromTo(
          title,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 }
        );
        gsap.fromTo(
          subtitle,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5 }
        );
        gsap.fromTo(
          text,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );
      });
    }
  }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <img
          slot="container-start"
          className="parallax-bg"
          src={imageone}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Namaste and welcome to RCA
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Welcome to Royal Cricket Academy THE RCA
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="slidertext">
              Promoters of the game of cricket and its traditions at the grass
              roots level in the Nepal by educating and providing quality
              cricketing and coaching facilities to impact and improve the lives
              of sports minded people.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Namaste and welcome to RCA
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Welcome to Royal Cricket Academy THE RCA
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="slidertext">
              Promoters of the game of cricket and its traditions at the grass
              roots level in the Nepal by educating and providing quality
              cricketing and coaching facilities to impact and improve the lives
              of sports minded people.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Namaste and welcome to RCA
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Welcome to Royal Cricket Academy THE RCA
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="slidertext">
              Promoters of the game of cricket and its traditions at the grass
              roots level in the Nepal by educating and providing quality
              cricketing and coaching facilities to impact and improve the lives
              of sports minded people.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <AboutUsComponent />
      <International />
      <AdvertiserServices />
      <Features />
      <Fixednavbar />
      <Ourteams />
      <Newpricing />
      <Footers />
    </>
  );
}
