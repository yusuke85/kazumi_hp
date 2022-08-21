import React, { useState, useEffect, useMemo } from "react";
import { Col } from "react-bootstrap";
import "../Styles/LandingPage.css";

export function ClickableImage({ imgSrc, imgAlt, audioSrc }) {
  let audio = useMemo(() => new Audio(audioSrc), [audioSrc]);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing, audio]);

  useEffect(() => {
    const stopPlaying = () => setPlaying(false);
    audio.addEventListener("ended", stopPlaying);
    return () => audio.removeEventListener("ended", stopPlaying);
  }, [audio]);

  const classToggle = () => {
    setPlaying(!playing);
  };

  return (
    <Col md={2} sm={2} xs={2}>
      <img
        src={imgSrc}
        className={"img-fluid" + (playing ? ` img-playing` : "")}
        alt={imgAlt}
        onClick={() => {
          classToggle();
        }}
      />
    </Col>
  );
}

export default ClickableImage;
