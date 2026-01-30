function Section({ title, children }) {
  return (
    <section
      id="skills"
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
      <div style={{ marginTop: "clamp(18px, 3vw, 30px)" }}>{children}</div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div
      style={{
        padding: "clamp(14px, 2.5vw, 18px)",
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "clamp(18px, 2vw, 22px)" }}>
        {title}
      </h3>
      <div style={{ marginTop: 10, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

export default function Skills() {
  const hard = [
    "Python",
    "Scikit-Learn",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "API",
    "SQL",
    "R",
    "JavaScript",
    "GCP",
    "Jupyter",
    "Colab",
    "Power BI",
    "Excel",
    "Git",
    "Web Development",
    "Database Management",
    "Information Retrieval",
    "Data Analysis",
    "Data Mining",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
  ];

  const soft = [
    "Leadership",
    "Collaboration",
    "Organized",
    "Detail-oriented",
    "Adaptable",
    "Proactive",
    "Enthusiastic",
    "Teachable",
    "Communication",
    "Creativity",
    "Problem-solving",
  ];

  const certs = [
    "Certified Scrum Product Owner (CSPO)",
    "AWS Certified Cloud Practitioner (CCP)",
  ];

  return (
    <Section title="Skills">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
        }}
      >
        <div style={{ gridColumn: "span 1" }}>
          <Card title="Hard">
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                columns: 2,
                columnGap: 24,
              }}
            >
              {hard.map((t) => (
                <li key={t} style={{ breakInside: "avoid", marginBottom: 4 }}>
                  {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div style={{ gridColumn: "span 1" }}>
          <Card title="Soft">
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                columns: 2,
                columnGap: 24,
              }}
            >
              {soft.map((s) => (
                <li key={s} style={{ breakInside: "avoid", marginBottom: 4 }}>
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div style={{ gridColumn: "span 1" }}>
          <Card title="Certifications">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {certs.map((c) => (
                <li key={c} style={{ marginBottom: 4 }}>
                  {c}
                </li>
              ))}
            </ul>
          </Card>
        </div>

      </div>
    </Section>
  );
}
