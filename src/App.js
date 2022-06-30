import React from "react";
import Links from "./Component/Links"
import LandingPage from "./Component/LandingPage";
import Bio from "./Component/Bio";
import Music from "./Component/Music";
import Contact from "./Component/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  

  return (
      <Router>
    <div className="App">
      <Links />
      <Routes>
      <Route exact path="/" element={<LandingPage /> } />
      <Route exact path="Bio" element={<Bio />} />
      <Route exact path="Music" element={<Music />} />
      <Route exact path="Contact" element={<Contact />} />
      </Routes>
    </div>
      </Router>
  );
}

export default App;

