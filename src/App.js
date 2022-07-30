import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Develop from "./pages/Develop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
function App() {
  return (
    <div className="App">
      <div class="scrollbar" id="style-11">
        <div class="force-overflow"></div>
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/develop" element={<Develop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
