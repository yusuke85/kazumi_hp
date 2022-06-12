import React, { useState, useEffect } from "react";
import {Col} from "react-bootstrap";


export function ClickableImage({ imgSrc, imgAlt, audioSrc }) {

    let audio = new Audio (audioSrc);
    const [playing, setPlaying] = useState(false);
    
    const toggleAudio = () => setPlaying(!playing);
    
    useEffect(() => {
      playing ? audio.play() : audio.pause();
      audio.loop = true;
    },
    [playing, audio]
     );
    
    const stopPlaying = () => setPlaying(false);
    
    
    useEffect(() => {
      audio.addEventListener("ended", stopPlaying);
      return () => audio.removeEventListener("ended", stopPlaying);
    }, [audio]);

    const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  }

  return (
    
    <Col md={2} sm={2} xs={2}>
      <img
        src={imgSrc}
        
        className={"img-fluid" + (active ? "bell" : "")}
        alt={imgAlt}
        onClick={() => {
          toggleAudio();
          classToggle();
        }}
        />
    </Col>
    
    )
  };

  export default ClickableImage