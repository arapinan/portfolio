import Navbar from "./components/Navbar";
import BackToTop from "./components/Top";

import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <BackToTop />
      <footer
        style={{
          marginTop: "clamp(40px, 8vw, 80px)",
          padding: "24px 0",
          textAlign: "center",
          fontSize: 16,
          opacity: 0.6,
        }}
      >
        © {new Date().getFullYear()} Athena Rapinan
      </footer>
    </>
  );
}
