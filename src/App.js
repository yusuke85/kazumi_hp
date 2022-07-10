import React,{useState, useEffect}from "react";
import Links from "./Component/Links"
import LandingPage from "./Component/LandingPage";
import Bio from "./Component/Bio";
import Music from "./Component/Music";
import Contact from "./Component/Contact"
import FuneAudio from "./Audio/Boat.mp3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const audio = new Audio();
audio.loop = true;
// // 
// function App() {
const App = () => { 


  const [playing, setPlaying] = useState();
  useEffect(() => {
    switch (playing) {
      case "picture of a boat":
        audio.src = FuneAudio;
        audio.play();
        break;
        default:
    }
    return () => {
      audio.pause();
    };
  }, [playing]);
  
  return (
      <Router>
    <div className="App">
      <Links />
      <Routes>
      <Route exact path="/" element={<LandingPage playing={playing} setPlaying={setPlaying}/>} />
      <Route exact path="Bio" element={<Bio />} />
      <Route exact path="Music" element={<Music />} />
      <Route exact path="Contact" element={<Contact />} />
      </Routes>
    </div>
      </Router>
  );
  
}

export default App;
