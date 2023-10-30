import React from "react";
import Lantern from "../Images/YoutubeImage1.jpg";
import Youtube02 from "../Images/YoutubeImage2.jpg";
import Youtube03 from "../Images/YoutubeImage3.jpg";
import Youtube04 from "../Images/YoutubeImage4.jpg";
import Youtube05 from "../Images/YoutubeImage5.jpg";
import BandCamp from "../Images/Samplingbarcelona.jpg";
import Zonawatusa from "../Images/ZW.png";
import Listen from "../Images/Listentotheland.jpeg";
import "../Styles/Music.css";
import { Container } from "react-bootstrap";

function Music() {
  return (
    <>
      <Container>
        <div className="card mb-3" id="musicCards" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-3">
            <a
                href="https://zonawatusa.bandcamp.com/album/listen-to-the-land-until-it-becomes-your-body
                "
                target="blank">
              <img
                src={Listen}
                id="Listen"
                className="img-fluid rounded-sharp"
                height="200"
                alt="lanternimg"
              /> 
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">2023 “Listen To The Land Until It Becomes Your Body”</h5>
                <p className="card-text">
                This is the album "Sampling Barcelona 2022" by Zona Watusa.<br />
                Covert art by Urbild Editions.

                  <br />
                  
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <a
                href="https://diffusereality.bandcamp.com/album/kazumi-sakoda-vhs-terminal-te0106?from=search&search_item_id=3773077890&search_item_type=a&search_match_part=%3F&search_page_id=2537255317&search_page_no=1&search_rank=6&search_sig=e0206d7efa80837b0c618037fd89496c
"
                target="blank"
              >
                <img
                  src={Zonawatusa}
                  id="zw"
                  className="img-fluid rounded-sharp"
                  alt="youtube2img"
                />
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">
                2023 "VHS Terminal" 
                </h5>
                <p className="card-text">
                This is a mini album made by extracting sounds from old VHS found on the street in Barcelona.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-3">
              <a
                href="https://www.youtube.com/watch?v=rq35tFLTQqc"
                target="blank"
              >
                <img
                  src={Lantern}
                  id="youTubeImg1"
                  className="img-fluid rounded-sharp"
                  height="200"
                  alt="lanternimg"
                />
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">2022 "Lantern"</h5>
                <p className="card-text">
                  Inspired by Asako Yuzuki's novel "Lantern", I composed it for
                  International Women's Day.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <a href="https://youtu.be/eVWkArbC7_o" target="blank">
                <img
                  src={Youtube02}
                  id="youTubeImg2"
                  className="img-fluid rounded-sharp"
                  alt="youtube2img"
                />
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">
                  2021 "el bosque corrompido"
                  <br />
                  video by Daniel Clegg
                </h5>
                <p className="card-text">
                  What was originally a thing is transformed by a person and
                  becomes a thing again over time or by the sheer force of
                  nature.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-md-3">
              <a
                href="https://kazumisakoda.bandcamp.com/album/being-alive"
                target="blank"
              >
                <img
                  src={Youtube03}
                  id="youTubeImg3"
                  className="img-fluid rounded-sharp"
                  alt="youtube3img"
                />
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">2020 "being alive" with Noman </h5>
                <p className="card-text">
                  Sometimes I musically feel the sounds of the city. I made this
                  song through Zoom with Norman in Tokyo during the pandemic.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <a href="https://youtu.be/4Y_GCwwb1r0" target="blank">
                <img
                  src={Youtube04}
                  id="youTubeImg4"
                  className="img-fluid rounded-sharp"
                  alt="youtube4img"
                />
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">2020 "Barceloneta" with Noman</h5>
                <p className="card-text">
                  San Juan is the shortest night of the year. On this day, the
                  sound of fireworks doesn't stop until morning on the
                  barceloneta beach.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-md-3">
              <a
                href="https://soundcloud.com/kazumisakoda/plcataluna-badalona?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                target="blank"
              >
                <img
                  src={Youtube05}
                  id="youTubeImg5"
                  className="img-fluid rounded-sharp"
                  alt="youtube5img"
                />
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">
                  2020 "Pl.Catalunya - Badalona" at Sangen Chakai streaming
                  channel
                </h5>
                <p className="card-text">
                  Summer. The trains on weekends are full for people who go to
                  the sea and those who return from the sea.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <a href="https://kazumisakoda.bandcamp.com/" target="blank">
                <img
                  src={BandCamp}
                  id="bandcamp"
                  className="img-fluid rounded-sharp"
                  alt="bandcampimg"
                />
              </a>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">2019 "Sampling Barcelona" </h5>
                <p className="card-text" id="bcCardTx">
                  1. Plaça Universitat
                  <br />
                  2. Carrer Comtal
                  <br />
                  3. Carrer d'En Robador
                  <br />
                  4. Plaça dels Àngels
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footerInner">
            <p className="footerLink">
              <a href="https://www.instagram.com/kazumi_sakoda/" target="blank">
                INSTAGRAM
              </a>
              <span style={{ fontSize: "8px" }}>•</span>
              <a
                href="https://www.youtube.com/channel/UClGgOLYCBl8Ccz2_nuyjFCw"
                id="videoClip"
                target="blank"
              >
                YOUTUBE
              </a>
              <span style={{ fontSize: "8px" }}>•</span>
              <a
                href="https://kazumisakoda.bandcamp.com/"
                id="videoClip"
                target="blank"
              >
                BANDCAMP
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Music;
