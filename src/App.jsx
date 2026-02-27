import { BrowserRouter } from "react-router-dom";
import { Navbar, CustomCursor, Hero, About, Skills, Projects, Achievements, Certifications, Education, Contact, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      {/* Navbar is at the top level — no parent transform/z-index trapping it */}
      <Navbar />
      <div className="bg-dark-bg pt-16 overflow-x-hidden w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
