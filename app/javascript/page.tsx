

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
    image: "/images/1java.png",
    title: "Assignment 02",
    description: "Online learning ",
    link: "https://last-task-6dmegb2go-mantasha-noor.vercel.app/",
  },
   {
    image: "/images/2java.png",
    title: "Assignment 01",
    description: "Salt'n papper website",
    link: "https://mantasha-salt-79wegid5s-mantasha-noor.vercel.app/",
  }
];

export default function HtmlCss() {
  return (
    <main className="assignment-page">

      {/* ================= HEADER ================= */}

      <div className="assignment-header">

        <div className="title-row">

          {/* javascript Logo */}
          <div className="drop">
            <Image
              src="/images/java.png"
              alt="HTML CSS Logo"
              width={150}
              height={150}
            />
          </div>

          <span className="drop-title">
           JAVASCRIPT
          </span>

        </div>

        <h1>
          JavaScript Assignments
        </h1>

        <p>
       My JavaScript assignments and interactive web projects.
        </p>

      </div>

      {/* ================= ASSIGNMENTS SLIDER ================= */}

      <section className="water-slider-section">

        <div className="water-slider">

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={50}
            grabCursor={true}

            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}

            navigation={true}

          

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