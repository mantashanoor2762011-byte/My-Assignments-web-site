import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </Link>

        <div className="nav-links">

          <Link href="/" className="active">
            Home
          </Link>

          <Link href="/about" className="portfolio-btn">
            About
          </Link>
          
            <Link href="/html-css">
            HTML / CSS
          </Link>

          <Link href="/javascript">
            JavaScript
          </Link>

          <Link href="/react">
            React
          </Link>

          <Link href="/nextjs">
            Next.js
          </Link>

          <Link href="/" className="back-portfolio-btn">
            ← Back to Portfolio
          </Link>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="small-title">
            Web Development Collection
          </div>

          <h1>
            My Web Development
            <span> Assignments</span>
          </h1>

          <p>
            A collection of my web development assignments and projects.
            Each project represents my learning journey and skills in
            modern web technologies.
          </p>

          <div className="hero-buttons">

            <Link href="#projects" className="primary-btn">
              View All Projects →
            </Link>

            <Link href="/about" className="secondary-btn">
              About Me
            </Link>

          </div>

        </div>


        {/* LAPTOP */}

        <div className="hero-laptop">
          <img
            src="/images/hero.png"
            alt="Web Development"
          />
        </div>

      </section>


      {/* ================= FILTERS ================= */}

      <div className="filters">

        <Link href="#projects" className="filter active-filter">
          ▦ All
        </Link>

        <Link href="/html-css" className="filter">
          HTML / CSS
        </Link>

        <Link href="/javascript" className="filter">
          JavaScript
        </Link>

        <Link href="/react" className="filter">
          ⚛ React
        </Link>

        <Link href="/nextjs" className="filter">
          ▲ Next.js
        </Link>

      </div>


      {/* ================= PROJECTS ================= */}

      <section className="projects" id="projects">

        {/* HTML CSS */}

        <div className="project-card">

          <div className="drop-image">
            <img
              src="/images/HTML or CSS.png"
              alt="HTML CSS"
            />
          </div>

          <h2>HTML / CSS</h2>

          <p>
            My HTML and CSS assignments, responsive layouts and
            creative website designs.
          </p>

          <div className="stars">
            ★ ★ ★ ★ ☆
          </div>

          <Link href="/html-css" className="view-btn">
            View Projects →
          </Link>

        </div>


        {/* JAVASCRIPT */}

        <div className="project-card">

          <div className="drop-image">
            <img
              src="/images/java.png"
              alt="JavaScript"
            />
          </div>

          <h2>JavaScript</h2>

          <p>
            JavaScript assignments including interactive websites,
            functions, DOM and practical projects.
          </p>

          <div className="stars">
            ★ ★ ★ ★ ☆
          </div>

          <Link href="/javascript" className="view-btn">
            View Projects →
          </Link>

        </div>


        {/* REACT */}

        <div className="project-card">

          <div className="drop-image">
            <img
              src="/images/react.png"
              alt="React"
            />
          </div>

          <h2>React</h2>

          <p>
            React projects and assignments using components,
            props, state and modern UI.
          </p>

          <div className="stars">
            ★ ★ ★ ★ ☆
          </div>

          <Link href="/react" className="view-btn">
            View Projects →
          </Link>

        </div>


        {/* NEXT */}

        <div className="project-card">

          <div className="drop-image">
            <img
              src="/images/next.png"
              alt="Next.js"
            />
          </div>

          <h2>Next.js</h2>

          <p>
            Next.js projects including App Router, pages,
            components and modern web applications.
          </p>

          <div className="stars">
            ★ ★ ★ ★ ☆
          </div>

          <Link href="/nextjs" className="view-btn">
            View Projects →
          </Link>

        </div>

      </section>


      {/* ================= BOTTOM ================= */}

      <section className="bottom-box">

        <div>
          <h2>
            More Projects Coming Soon! 🚀
          </h2>

          <p>
            I'm constantly learning and building new projects.
          </p>
        </div>

        <a href="mailto:example@gmail.com">
          Get In Touch
        </a>

      </section>

    </main>
  );
}