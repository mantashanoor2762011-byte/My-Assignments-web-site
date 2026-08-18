"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-content">
          <span className="about-tag">ABOUT MY WORK</span>

          <h1>
            My <span>Assignments</span>
          </h1>

          <p>
            Welcome to my assignment website! This website showcases my
            web development assignments and projects created during my
            learning journey.
          </p>

          <Link href="/" className="about-btn">
            Back to Home
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-card">
          <h2>About This Website</h2>

          <p>
            This website is created to present my HTML, CSS, JavaScript,
            React, and Next.js assignments in an organized and attractive
            way.
          </p>

          <p>
            Each assignment represents a step in my web development
            journey. I am continuously learning new technologies and
            improving my coding and design skills.
          </p>
        </div>

        <div className="about-card">
          <h2>What You’ll Find Here</h2>

          <div className="about-list">
            <div>💻 HTML & CSS Assignments</div>
            <div>⚡ JavaScript Projects</div>
            <div>⚛️ React Projects</div>
            <div>▲ Next.js Projects</div>
            <div>🎨 Creative Web Designs</div>
            <div>🚀 Learning Projects</div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="journey-section">
        <h2>My Learning Journey</h2>

        <p>
          My goal is to combine creativity with technology and build
          modern, responsive, and user-friendly websites. Through these
          assignments, I am gaining practical experience and developing
          confidence in web development.
        </p>
      </section>
    </main>
  );
}