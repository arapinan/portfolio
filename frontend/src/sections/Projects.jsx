import questImg from "../assets/sidequest.png";
import researchImg from "../assets/thesis.png";
import yelpImg from "../assets/yelp.png";
import searchImg from "../assets/search.png";

function Section({ title, children }) {
  return (
    <section
      id="projects"
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

function Chip({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.12)",
        background: "rgba(255,255,255,0.65)",
        fontSize: 13,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function Card({ img, alt, title, desc, tech = [], live, github, paper, workshops }) {
  return (
    <article
      style={{
        display: "grid",
        gap: 12,
        padding: "clamp(14px, 2.5vw, 18px)",
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
        border: "1px solid rgba(0,0,0,0.06)",
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

      <div style={{ lineHeight: 1.65 }}>
        <h3 style={{ margin: 0, fontSize: "clamp(18px, 2vw, 22px)" }}>
          {title}
        </h3>

        <p
          style={{
            margin: "8px 0 0",
            fontSize: "clamp(14px, 1.5vw, 16px)",
          }}
        >
          {desc}
        </p>

        {!!tech.length && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 12,
            }}
          >
            {tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        )}

        {(live || github || paper || workshops) && (
          <div style={{ display: "flex", gap: 14, marginTop: 14 }}>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.35)",
                }}
              >
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.35)",
                }}
              >
                GitHub
              </a>
            )}
            {paper && (
              <a
                href={paper}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.35)",
                }}
              >
                Paper
              </a>
            )}
            {workshops && (
              <a
                href={workshops}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.35)",
                }}
              >
                Workshops
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function OtherNotableProjects() {
  const items = [
    {
      title: "WordleBot",
      desc:
        "Developed an AI Wordle solver by modeling the game as a constraint satisfaction problem and selecting guesses using a Shannon entropy–based information gain heuristic. Achieved a 100% success rate over 100 games with an average of 4.3 guesses per puzzle and sub-10-second runtime by simulating all possible feedback patterns and dynamically pruning the candidate search space.",
        tech: [
        "Python",
        "Constraint Satisfaction",
        "Information Theory",
        "Shannon Entropy",
        "Search Algorithms",
        "Probabilistic Reasoning",
      ]
    },
    {
      title: "ZotStreaming",
      desc:
        "Developed a command-line database management system for a streaming platform using Python and MySQL. Built a structured CLI that parses user commands into parameterized SQL queries to support data ingestion, inserts, updates, deletions, and analytical queries across multiple normalized tables. Ensured robustness by enforcing relational constraints, and handling duplicate keys & NULL values.",
      tech: [
        "Python",
        "MySQL",
        "SQL",
        "Relational Schema Design",
        "Query Parsing",
        "Data Integrity Constraints",
      ]
    },
  ];

  return (
    <div style={{ marginTop: 28 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 18 }}>
          Other Notable Projects
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 12,
        }}
      >
        {items.map((p) => (
          <article
            key={p.title}
            style={{
              padding: "clamp(14px, 2.2vw, 18px)",
              background: "#fff",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <h4 style={{ margin: 0, fontSize: 16 }}>{p.title}</h4>

            <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.65 }}>
              {p.desc}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 12,
              }}
            >
              {p.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "SideQuest NYC",
      desc: "AI-powered NYC activity planner that generates personalized itineraries—leveraging a RAG pipeline to combine real-time event retrieval with LLM reasoning to eliminate conflicts and decision fatigue.",
      tech: ["React", "Node.js", "Express", "Google Cloud", "Gemini/VertexAI", "RapidAPI"],
      live: "https://arapinan.github.io/side-quest-bot/",
      github: "https://github.com/arapinan/side-quest-bot",
      img: questImg,
      alt: "SideQuest NYC",
    },
    {
      title: "Habit-Building App Design Research",
      desc: "Designed and evaluated mobile app feature concepts that help college students break goals into actionable habits and sustain them long-term, using iterative co-design workshops with undergraduate participants.",
      tech: ["UX/UI Research", "Co-design Workshops", "Prototyping", "Behavior Change", "HCI"],
      paper: "https://docs.google.com/document/d/1wEvDVz9m_JIPxhoaBrK2kiOslPbiXV2jQPwBtilC4sQ/edit?usp=sharing",
      workshops: "https://drive.google.com/drive/folders/1PAj-L9iFPd9wKRhtnzimm_tC-NQ078Ks?usp=sharing",
      img: researchImg,
      alt: "Research project",
    },
    {
      title: "QuickSearch",
      desc: "Built a search engine for a corpus of thousands of web pages by designing a custom inverted index, implementing tokenization, stemming, and weighted term scoring. Ranked results using TF-IDF and cosine similarity under strict performance constraints.",
      tech: ["Information Retrieval", "Python", "Inverted Index", "TF-IDF", "Cosine Similarity", "Text Processing",],
      github: "https://github.com/arapinan/IR24W-A3-G1",
      img: searchImg,
      alt: "Information Retrieval Search Engine",
    },
    {
      title: "Yelp Reviews EDA & Prediction",
      desc: "Performed exploratory data analysis on Yelp reviews to uncover trends in user sentiment and ratings. Trained machine learning models (Random Forest, SVM, Regression) to predict star ratings using feature engineering (text vectorization, sentiment analysis).",
      tech: ["Python", "Pandas", "Scikit-learn", "NLP", "Data Visualization", "Optimization"],
      paper: "https://docs.google.com/document/d/1A3NuKi5XyCrRCqygL9cjwOG855uPbHJgqd52kk0yZXE/edit?usp=sharing",
      img: yelpImg,
      alt: "Yelp Reviews EDA",
    },
  ]

  return (
    <Section title="Projects">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 12,
        }}
      >
        {projects.map((p, index) => (
          <Card key={p.title || index} {...p} />
        ))}
      </div>

      <OtherNotableProjects />
    </Section>
  );
}
