import nycImg from "../assets/columbia.png";
import uciImg from "../assets/uci.png";
import hikeImg from "../assets/hike.jpg";
import hockeyImg from "../assets/hockey.jpg";

function Section({ title, children }) {
  return (
    <section
      style={{
        maxWidth: "min(1000px, 92vw)",
        margin: "0 auto",
        padding: "clamp(20px, 4vw, 56px)",
        paddingBottom: 0,
      }}
    >
      <h2 style={{ fontSize: "clamp(22px, 2.4vw, 32px)", margin: 0 }}>
        {title}
      </h2>
      <div style={{ marginTop: "clamp(14px, 2vw, 22px)" }}>
        {children}
      </div>
    </section>
  );
}

function Card({ img, alt, children }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 14,
        padding: "clamp(14px, 2.5vw, 18px)",
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
      }}
    >
      <img
        src={img}
        alt={alt}
        style={{
          width: "100%",
          height: "clamp(170px, 22vw, 230px)",
          objectFit: "cover",
        }}
      />
      <div style={{ lineHeight: 1.7, fontSize: "clamp(14px, 1.5vw, 16px)" }}>
        {children}
      </div>
    </div>
  );
}

export default function About() {
  const hobbies = [
    "Fitness: Hiking, Running, Cycling, Team Sports",
    "Music: Ukulele, Guitar",
    "Other: Travel, Photography, Languages, Drawing, NHL",
  ];

  const bucketlist = [
    "Backpack Patagonia's Torres del Paine O-Circuit",
    "Run a half marathon",
    "Start a blog",
  ];

  return (
    <section id="about">
      <Section title="About">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: 12,
            alignItems: "start",
          }}
        >
          <Card img={nycImg} alt="Columbia University">
            <strong>Columbia University</strong>
            <br />
            M.S. Data Science | Sep 2025 – Dec 2026
          </Card>

          <Card img={uciImg} alt="UC Irvine">
            <strong>University of California, Irvine</strong>
            <br />
            B.S. Computer Science | Sep 2022 – Jun 2025
          </Card>

          <Card img={hockeyImg} alt="hockey">
            <strong>Hobbies</strong>
            <br />
            <ul style={{ marginTop: 0, paddingLeft: 18, marginBottom: 0 }}>
              {hobbies.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Card>

          <Card img={hikeImg} alt="hike">
            <strong>2026 Bucket List</strong>
            <br />
            <ul style={{ marginTop: 0, paddingLeft: 18, marginBottom: 0 }}>
              {bucketlist.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </section>
  );
}
