import {
  Header,
  Hero,
  About,
  Expertise,
  Skills,
  Experience,
  Projects,
  CaseStudies,
  Awards,
  Testimonials,
  Resume,
  Contact,
  Footer,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <Awards />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
