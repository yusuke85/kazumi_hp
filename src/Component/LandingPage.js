import React, { useState, useEffect,} from "react";
import { Container, Row, Col } from "react-bootstrap";

import Boat from "../Images/Boat.jpeg";
import Bus from "../Images/Bus.jpeg";
import Grass from "../Images/Grass.jpeg";
import Macba01 from "../Images/Macba01.JPG";
import Metro from "../Images/Metro.jpeg";
import MorningSun from "../Images/MorningSun.jpeg";
import Pingpong from "../Images/Pingpong.jpeg";
import Bell from "../Images/Bell.jpeg";
import Blank from "../Images/Blank-0001.jpg";

import FuneAudio from "../Audio/Boat.mp3";
import InsideMetro from "../Audio/OnTheMetro.mp3";
import MorningSunAudio from "../Audio/MorningS.mp3";
import BusAudio from "../Audio/Bus.mp3";
import GrassAudio from "../Audio/Grass.mp3";
import MacbaAudio from "../Audio/Macba.mp3";
import BellAudio from "../Audio/new_Bell.mp3";
import PingpongAudio from "../Audio/pingpong.wav";

import "../Styles/LandingPage.css";

const useAudio = (
  InsideMetro,
  FuneAudio,
  MorningSunAudio,
  BusAudio,
  GrassAudio,
  BellAudio,
  MacbaAudio,
  PingpongAudio
) => {
  let audio = new Audio(
    InsideMetro,
    FuneAudio,
    MorningSunAudio,
    BusAudio,
    GrassAudio,
    BellAudio,
    MacbaAudio,
    PingpongAudio
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  const stopPlaying = () => setPlaying(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", stopPlaying);
    return () => audio.removeEventListener("ended", stopPlaying);
  }, [audio]);

  return [playing, toggle];
};


const LandingPage = (props) => {
  const [playingFune, toggleFune] = useAudio(FuneAudio);
  const [playingInsideMetro, toggleInsideMetro] = useAudio(InsideMetro);
  const [playingMorningSunAudio, toggleMorningSunAudio] = useAudio(MorningSunAudio);
  const [playingBusAudio, toggleBusAudio] = useAudio(BusAudio);
  const [playingGrassAudio, toggleGrassAudio] = useAudio(GrassAudio);
  const [playingBellAudio, toggleBellAudio] = useAudio(BellAudio);
  const [playingMacbaAudio, toggleMacbaAudio] = useAudio(MacbaAudio);
  const [playingPingpongAudio, togglePingpongAudio] = useAudio(PingpongAudio);

  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  };
  
  return (
    <>
      <h2 id="pleaseClick">Please click on the images!!</h2>
      <Container className="lpPhotos">
        <Row id="item1">
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img
              src={Bell}
              id={active ? "bell" : ""}
              className="img-fluid"
              alt="bellimg"
              onClick={() => {
                toggleBellAudio();
                classToggle();
              }}
            />
            {playingBellAudio}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img
              src={Boat}
              id={active ? "boat" : ""}
              className="img-fluid"
              alt="boatimg"
              onClick={() => {
                toggleFune();
                classToggle();
              }}
            />
            {playingFune}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img
              src={Grass}
              id={active ? "grass" : ""}
              className="img-fluid"
              alt="grassimg"
              onClick={() => {
                toggleGrassAudio();
                classToggle();
              }}
            />
            {playingGrassAudio}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img
              src={Pingpong}
              id={active ? "pingpong" : ""}
              className="img-fluid"
              alt="pingpongimg"
              onClick={() => {
                togglePingpongAudio();
                classToggle();
              }}
            />
            {playingPingpongAudio}
          </Col>
        </Row>
        <Row id="item2">
          <Col md={2} sm={2} xs={2}>
            <img
              src={Bus}
              id={active ? "bus" : ""}
              className="img-fluid"
              alt="busimg"
              onClick={() => {
                toggleBusAudio();
                classToggle();
              }}
            />
            {playingBusAudio}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img
              src={Macba01}
              id={active ? "macba" : ""}
              className="img-fluid"
              alt="macbaimg"
              onClick={() => {
                toggleMacbaAudio();
                classToggle();
              }}
            />
            {playingMacbaAudio}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img
              src={Metro}
              id={active ? "metro" : ""}
              className="img-fluid"
              alt="metroimg"
              onClick={() => {
                toggleInsideMetro();
                classToggle();
              }}
            />
            {playingInsideMetro}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img
              src={MorningSun}
              id={active ? "morningSun" : ""}
              className="img-fluid"
              alt="morningimg"
              onClick={() => {
                toggleMorningSunAudio();
                classToggle();
              }}
            />
            {playingMorningSunAudio}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;

// const [active2, setActive2] = useState(false);
  // const classToggle2 = () => {
  //   setActive2(!active2);
  // };
  // const [active3, setActive3] = useState(false);
  // const classToggle3 = () => {
  //   setActive3(!active3);
  // };
  // const [active4, setActive4] = useState(false);
  // const classToggle4 = () => {
  //   setActive4(!active4);
  // };
  // const [active5, setActive5] = useState(false);
  // const classToggle5 = () => {
  //   setActive5(!active5);
  // };
  // const [active6, setActive6] = useState(false);
  // const classToggle6 = () => {
  //   setActive6(!active6);
  // };
  // const [active7, setActive7] = useState(false);
  // const classToggle7 = () => {
  //   setActive7(!active7);
  // };
  // const [active8, setActive8] = useState(false);
  // const classToggle8 = () => {
  //   setActive8(!active8);
  // };

