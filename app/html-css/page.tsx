"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const assignments = [
  {
    image: "/images/HTML.png",
    title: "Assignment 01",
    description: "HTML and CSS page",
    link: "https://bookmark-ten-sigma.vercel.app/",
  },
  {
    image: "/images/2HTML.png",
    title: "Assignment 02",
    description: "HTML and CSS page",
    link: "https://test-msvd4ghqv-mantasha-noor.vercel.app/",
  },
  {
    image: "/images/3HTML.png",
    title: "Assignment 03",
    description: "HTML & CSS Website",
    link: "https://nexcent-3-web-said-oik76gl3f-mantasha-noor.vercel.app/",
  },
];

export default function HtmlCss() {
  return (
    <main className="assignment-page">

      {/* ================= HEADER ================= */}

      <div className="assignment-header">

        <div className="title-row">

          {/* HTML + CSS Logo */}
          <div className="drop">
            <Image
              src="/images/HTML or CSS.png"
              alt="HTML CSS Logo"
              width={150}
              height={150}
            />
          </div>

          <span className="drop-title">
            HTML + CSS
          </span>

        </div>

        <h1>
          HTML & CSS Assignments
        </h1>

        <p>
          My HTML and CSS assignments, layouts and responsive
          website projects.
        </p>

      </div>

      {/* ================= ASSIGNMENTS SLIDER ================= */}

      <section className="water-slider-section">

        <div className="water-slider">

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={50}
            grabCursor={true}

            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}

            navigation={true}

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },

              1000: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}

            className="mySwiper"
          >

            {assignments.map((assignment, index) => (

              <SwiperSlide key={index}>

                <div className="water-card">

                  <div className="water-card-content">

                    {/* Assignment Image */}
                    <div className="water-image">

                      <Image
                        src={assignment.image}
                        alt={assignment.title}
                        width={220}
                        height={145}
                      />

                    </div>

                    {/* Assignment Text */}
                    <div className="water-name-profession">

                      <span className="water-name">
                        {assignment.title}
                      </span>

                      <span className="water-profession">
                        {assignment.description}
                      </span>

                    </div>

                    {/* Stars */}
                    <div className="water-rating">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    {/* View Assignment */}
                    <a
                      href={assignment.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="water-btn"
                    >
                      View Assignment
                    </a>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>

      {/* ================= BACK TO HOME ================= */}

      <div className="back-home-container">
        <Link href="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>

    </main>
  );
}