import hikeImg from "../assets/hike.jpg";
import hockeyImg from "../assets/hockey.jpg";

function Section({ title, children }) {
  return (
    <section style={{ marginTop: "clamp(22px, 4vw, 44px)" }}>
      <h2 style={{ fontSize: "clamp(20px, 2.2vw, 28px)", marginBottom: 12 }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ img, alt, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gap: 14,
        padding: "clamp(14px, 2.5vw, 18px)",

        background: "#fff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
        transition: "transform 160ms ease, box-shadow 160ms ease",
      }}
    >
      <img
        src={img}
        alt={alt}
        style={{
          width: "100%",
          height: "clamp(180px, 30vw, 260px)",
          objectFit: "cover"
        }}
      />
      <div style={{ lineHeight: 1.7, fontSize: "clamp(14px, 1.5vw, 16px)" }}>
        {children}
      </div>
    </div>
  );
}

function TwoCol({ left, right }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16,
      }}
    >
      {left}
      {right}
    </div>
  );
}

export default function About() {
  const hobbies = [
    "Hiking",
    "Sketching",
    "Ukulele / Guitar",
    "Traveling",
    "Running",
    "Team sports",
    "Watching the SJ Sharks",
    "Photography",
  ];

  const bucketlist = [
    "Backpack Patagonia (Torres del Paine O-Circuit)",
    "Run a half marathon / marathon",
    "Hike in Switzerland",
  ];

  return (
    <main
      style={{
        maxWidth: "min(1000px, 92vw)",
        margin: "0 auto",
        padding: "clamp(16px, 3vw, 28px)",
        paddingTop: "clamp(20px, 4vw, 40px)",
      }}
    >

      <Section>
        <TwoCol
          left={
            <div>
              <h2 style={{ marginBottom: 10 }}>Hobbies</h2>

              <Card img={hockeyImg} alt="Bay Area">
              </Card>
            </div>
          }
          right={
            <div>
              <h2 style={{ marginBottom: 10 }}>Bucket List</h2>

              <Card img={hikeImg} alt="Bucket List">
                <ul style={{ marginTop: 0, paddingLeft: 18 }}>
                  {bucketlist.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            </div>
          }
        />
      </Section>
    </main>
  );
}
