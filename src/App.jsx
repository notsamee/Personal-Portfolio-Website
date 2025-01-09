import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Header.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import ProjectHeader from './ProjectHeader.jsx';

function App() {
  return(
    // <>
    //   <Header />
    //   <Home />
    //   <About />
    //   <Projects />
    //   <Skills />
    //   <Footer />
    // </>
    
    <>
    <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <About />
              <Projects />
              <Skills />
              <Footer />
            </>
          }/>
          <Route path="/SortingAlgorithmVisualizer" element={
            <>
              <ProjectHeader/>
              <div style={{ width: "100%", height: "100vh" }}>
                <iframe
                  src="https://samee-hanif.github.io/sorting-algorithm-visualizer/"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="New Project"
                ></iframe>
              </div>
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App
