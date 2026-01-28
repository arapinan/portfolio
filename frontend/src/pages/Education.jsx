import nycImg from "../assets/columbia.png";
import uciImg from "../assets/uci.png";

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

export default function Education() {
  const gradCourses = [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Data Visualization",
    "Causal Inference",
    "Databases / Data Engineering",
  ];

  const gradAwards = [
    "Data Science Student Council (Professional Development Committee)",
    "Teaching Assistant / Research (if applicable)",
    "Hackathons / Projects (if applicable)",
  ];

  const uciAwards = [
    "CS student (graduated in 3 years)",
    "Clubs / orgs (Circle K, etc.)",
    "Research / internships / leadership (if applicable)",
  ];

  return (
    <main
      style={{
        maxWidth: "min(1000px, 92vw)",
        margin: "0 auto",
        padding: "clamp(16px, 3vw, 28px)",
        paddingTop: "clamp(32px, 6vw, 64px)",
      }}
    >

      <Section title="Columbia University">
            <Card img={nycImg} alt="Columbia University">
              <strong>Currently in NYC</strong> studying at <strong>Columbia University</strong>.
              <br />
              M.S. in Data Science — expected graduation: <strong>December 2026</strong>.

              <strong>Relevant Courses</strong>
              <ul style={{ marginTop: 10, paddingLeft: 18 }}>
                {gradCourses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>

              <strong style={{ display: "block", marginTop: 14 }}>
                Awards & Activities
              </strong>
              <ul style={{ marginTop: 10, paddingLeft: 18 }}>
                {gradAwards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Card>
      </Section>

      <Section title="University of California, Irvine">
        <Card img={uciImg} alt="UC Irvine">
          <strong>Undergrad:</strong> UC Irvine
          <br />
          <strong>Major:</strong> Computer Science — <strong>graduated in 3 years</strong>
          <br />

          <strong style={{ display: "block", marginTop: 12 }}>
            Awards & Activities
          </strong>
          <ul style={{ marginTop: 10, paddingLeft: 18 }}>
            {uciAwards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Card>
      </Section>
    </main>
  );
}
