import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"

import Boat from "../Images/Boat.jpeg"
import Bus from "../Images/Bus.jpeg"
import Grass from "../Images/Grass.jpeg"
import Macba01 from "../Images/Macba01.JPG"
import Metro from "../Images/Metro.jpeg"
import MorningSun from "../Images/MorningSun.jpeg"
import Pingpong from "../Images/Pingpong.jpeg"
import Bell from "../Images/Bell.jpeg"
import Blank from "../Images/Blank.gif"

import FuneAudio from "../Audio/hune.mp3"
import InsideMetro from "../Audio/MetroNaka.mp3"
import MorningSunAudio from "../Audio/asahi.mp3"
import BusAudio from "../Audio/BUS.mp3"
import GrassAudio from "../Audio/grass.mp3"
import BellAudio from "../Audio/kanenooto.wav"
import MacbaAudio from "../Audio/MACBA.mp3"
import PingpongAudio from "../Audio/pingpong.wav"

import "../Styles/LandingPage.css"



const useAudio = () => {
  const [audio] = useState(new Audio(FuneAudio));
  const [playing, setPlaying] = useState(false);


  const toggle = () => setPlaying(!playing);

  // const play = useCallback(() => {
  //   playing ? audio.play() : audio.pause();
  //   audio.loop = true;
  // })

  //   useEffect(() => {function doSomting(){
  //     playing ? audio.play() : audio.pause();
  //     audio.loop = true;
  //   }doSomting()
  // },[playing, audio]
  //  );

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

// -------------------------------------------------//

const useAudio2 = () => {
  const [audio] = useState(new Audio(InsideMetro));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

// -------------------------------------------------//

const useAudio3 = () => {
  const [audio] = useState(new Audio(MorningSunAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};
// -------------------------------------------------//

const useAudio4 = () => {
  const [audio] = useState(new Audio(BusAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};
// -------------------------------------------------//

const useAudio5 = () => {
  const [audio] = useState(new Audio(GrassAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};
// -------------------------------------------------//

const useAudio6 = () => {
  const [audio] = useState(new Audio(BellAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};
// -------------------------------------------------//

const useAudio7 = () => {
  const [audio] = useState(new Audio(MacbaAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};
// -------------------------------------------------//

const useAudio8 = () => {
  const [audio] = useState(new Audio(PingpongAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};




const LandingPage = () => {

  const [playing, toggle] = useAudio(FuneAudio);
  const [playing2, toggle2] = useAudio2(InsideMetro)
  const [playing3, toggle3] = useAudio3(MorningSunAudio)
  const [playing4, toggle4] = useAudio4(BusAudio)
  const [playing5, toggle5] = useAudio5(GrassAudio)
  const [playing6, toggle6] = useAudio6(BellAudio)
  const [playing7, toggle7] = useAudio7(MacbaAudio)
  const [playing8, toggle8] = useAudio8(PingpongAudio)

  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active)
  }
  const [active2, setActive2] = useState(false);
  const classToggle2 = () => {
    setActive2(!active2)
  }
  const [active3, setActive3] = useState(false);
  const classToggle3 = () => {
    setActive3(!active3)
  }
  const [active4, setActive4] = useState(false);
  const classToggle4 = () => {
    setActive4(!active4)
  }
  const [active5, setActive5] = useState(false);
  const classToggle5 = () => {
    setActive5(!active5)
  }
  const [active6, setActive6] = useState(false);
  const classToggle6 = () => {
    setActive6(!active6)
  }
  const [active7, setActive7] = useState(false);
  const classToggle7 = () => {
    setActive7(!active7)
  }
  const [active8, setActive8] = useState(false);
  const classToggle8 = () => {
    setActive8(!active8)
  }


  return (
    <body>
      <h2 id="pleaseClick">
        Please click on the images!!
      </h2>
      <Container className="lpPhotos">
        <Row id="item1">
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="..." />
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Bell} id={active6 ? "bell" : ""} className="img-fluid" alt="..." onClick={() => { toggle6(); classToggle6() }} />{playing6}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="..." />
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Boat} id={active ? "boat" : ""} className="img-fluid" alt="..." onClick={() => { toggle(); classToggle() }} />{playing}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Grass} id={active5 ? "grass" : ""} className="img-fluid" alt="..." onClick={() => { toggle5(); classToggle5() }} />{playing5}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Pingpong} id={active8 ? "pingpong" : ""} className="img-fluid" alt="..." onClick={() => { toggle8(); classToggle8() }} />{playing8}
          </Col>
        </Row>
        <Row id="item2">
          <Col md={2} sm={2} xs={2}>
            <img src={Bus} id={active4 ? "bus" : ""} className="img-fluid" alt="..." onClick={() => { toggle4(); classToggle4() }} />{playing4}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="..." />
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Macba01} id={active7 ? "macba" : ""} className="img-fluid" alt="..." onClick={() => { toggle7(); classToggle7() }} />{playing7}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Metro} id={active2 ? "metro" : ""} className="img-fluid" alt="..." onClick={() => { toggle2(); classToggle2() }} />{playing2}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={MorningSun} id={active3 ? "morningSun" : ""} className="img-fluid" alt="..." onClick={() => { toggle3(); classToggle3() }} />{playing3}
          </Col>
          <Col md={2} sm={2} xs={2}>
            <img src={Blank} id="blank" className="img-fluid" alt="..." />
          </Col>
        </Row>
      </Container>
    </body>

  )
}

export default LandingPage