import React, { useState, useEffect, useMemo } from "react";
import { Col } from "react-bootstrap";
import "../Styles/LandingPage.css";

export function ClickableImage({ imgSrc, imgAlt, audioSrc, onClick, active}) {

  let audio = useMemo(() => new Audio(audioSrc), [audioSrc]);

  const [playing, setPlaying] = useState(false);

  // const toggleAudio = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing, audio]);

  useEffect(() => {
    const stopPlaying = () => setPlaying(false);
    audio.addEventListener("ended", stopPlaying);
    return () => audio.removeEventListener("ended", stopPlaying);
  }, [audio]);

  // const [active, setActive] = useState(false);
  // const classToggle = () => {
  //   setActive(!active);

  //   return [playing];
  // };

  return (
    <Col md={2} sm={2} xs={2}>
      <img
        src={imgSrc}
        className={"img-fluid" + (active ? ` img-playing` : "")}
        alt={imgAlt}
        onClick={onClick}
        // onClick={() => {
        //   toggleAudio();
        //   classToggle();
        // }}
      />
    </Col>
  );
}

export default ClickableImage;
