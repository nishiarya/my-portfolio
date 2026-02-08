import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Awards,
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
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
