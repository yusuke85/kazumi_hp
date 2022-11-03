import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClickableImage from "./ClickableImage";

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

const LandingPage = ({ playing, setPlaying }) => {

  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
    return [playing];
  };
 

  return (
    <>
    <div class="sample01">
 <p>Next ※Barcelona※22/11- 26/11[Instalación] Recorreguts Sonors 2022 @convento Sant Agustí</p> 
 </div>
 
      <h2 id="pleaseClick">Please click on the images!!</h2>
      <Container className="lpPhotos">
        <Row id="item1">
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          
          </Col>
          <ClickableImage
            imgSrc={Bell}
            activeClass="bell"
            imgAlt="picture of a bell"
            audioSrc={BellAudio}
          />
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          </Col>{" "}

          <ClickableImage
            imgSrc={Boat}
            activeClass="boat"
            imgAlt="picture of a boat"
            audioSrc={FuneAudio}
          />
          
          <ClickableImage
            imgSrc={Grass}
            className="grass"
            imgAlt="picture of a grass"
            audioSrc={GrassAudio}
          />
          <ClickableImage
            imgSrc={Pingpong}
            className="pingpong"
            imgAlt="picture of a pingpong"
            audioSrc={PingpongAudio}
          />
        </Row>
        <Row id="item2">
          <ClickableImage
            imgSrc={Bus}
            imgAlt="picture of a bus"
            audioSrc={BusAudio}
          />
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          </Col>
          <ClickableImage
            imgSrc={Macba01}
            imgAlt="picture of a macba"
            audioSrc={MacbaAudio}
          />
          <ClickableImage
            imgSrc={Metro}
            imgAlt="picture of a metro"
            audioSrc={InsideMetro}
          />
          <ClickableImage
            imgSrc={MorningSun}
            imgAlt="picture of a morningSun"
            audioSrc={MorningSunAudio}
          />
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="blankimg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;

