import "./Styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import ScrollToTop from "./utilities/scrollToTop";
import Skills from "./pages/Skills";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
