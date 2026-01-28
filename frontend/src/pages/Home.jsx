import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import profilePic from "../assets/pfp.png";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "clamp(12px, 2vw, 20px)",
        padding: "clamp(16px, 4vw, 48px)",
      }}
    >

        <img
            src={profilePic}
            alt="Profile"
            style={{
                width: "clamp(90px, 18vw, 140px)",
                height: "clamp(90px, 18vw, 140px)",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "clamp(8px, 2vw, 16px)",
            }}
        />

      <h1
        style={{
          margin: 0,
          fontSize: "clamp(36px, 6vw, 72px)",
          lineHeight: 1.05,
        }}
      >
        Athena Rapinan
      </h1>

      <p
        style={{
          margin: 0,
          maxWidth: "min(90vw, 640px)",
          fontSize: "clamp(14px, 1.6vw, 18px)",
          lineHeight: 1.6,
        }}
      >
        M.S. in Data Science student focused on building full-stack
        applications, leveraging ML to improve services, and using AI to make the
        world a better place.
      </p>

      {/* Icon links */}
      <div
        style={{
          display: "flex",
          gap: "clamp(12px, 2.5vw, 22px)",
          marginTop: "clamp(4px, 1vw, 10px)",
        }}
      >
        <a
          href="https://linkedin.com/in/athenarapinan"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          style={{ display: "grid", placeItems: "center" }}
        >
          <FaLinkedin size={"clamp(22px, 3vw, 30px)"} />
        </a>

        <a
          href="mailto:athena@rapinan.com"
          aria-label="Email"
          style={{ display: "grid", placeItems: "center" }}
        >
          <MdEmail size={"clamp(22px, 3vw, 30px)"} />
        </a>

        <a
          href="https://github.com/arapinan"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          style={{ display: "grid", placeItems: "center" }}
        >
          <FaGithub size={"clamp(22px, 3vw, 30px)"} />
        </a>
      </div>

      {/* Navigation buttons */}
      <div className="home-buttons" style={{ marginTop: "clamp(12px, 3vw, 28px)" }}>
        <Link to="/education" className="home-btn">Education</Link>
        <Link to="/projects" className="home-btn">Projects</Link>
        <Link to="/skills" className="home-btn">Skills</Link>
        <Link to="/about" className="home-btn">About</Link>
      </div>

    </div>
  );
}
