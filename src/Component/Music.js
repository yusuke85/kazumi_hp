import React from "react";
import Lantern from "../Images/Lantern.jpg"
import Youtube02 from "../Images/Youtube02.jpg"
import Youtube03 from "../Images/Youtube03_beingalive.jpg"
import Youtube04 from "../Images/Youtube04Barceloneta.jpg"
import Youtube05 from "../Images/Youtube05_mitogui.jpg"
import BandCamp from "../Images/BandCamp06_SamplingBarcelona.jpeg"
import "../Styles/Music.css"
import { Container } from "react-bootstrap";

function Music() {

  return (
    <>
      <Container>
        <div class="card mb-3" id="musicCards" style={{ maxWidth: "100%" }}>
          <div class="row g-0">
            <h4>Latest Recordings</h4>
            <div class="col-md-3">
              <a href="https://www.youtube.com/watch?v=rq35tFLTQqc" target="blank"><img src={Lantern} id="youTubeImg1" class="img-fluid rounded-sharp" height="200" alt="..." /></a>
            </div>
            <div class="col-md-3">
              <div class="card-body">
                <h5 class="card-title">2022 "Lantern"</h5>
                <p class="card-text">Inspired by Asako Yuzuki's novel "Lantern", I composed it for International Women's Day.</p>
              </div>
            </div>
            <div class="col-md-3">
              <a href="https://youtu.be/eVWkArbC7_o" target="blank"><img src={Youtube02} id="youTubeImg2" class="img-fluid rounded-sharp" alt="..." /></a>
            </div>
            <div class="col-md-3">
              <div class="card-body">
                <h5 class="card-title">2021 "el bosque corrompido"< br />
                  video by Daniel Clegg</h5>
                <p class="card-text">What was originally a thing is transformed by a person and becomes a thing again over time or by the sheer force of nature.</p>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-md-3">
              <a href="https://kazumisakoda.bandcamp.com/album/being-alive" target="blank"><img src={Youtube03} id="youTubeImg3" class="img-fluid rounded-sharp" alt="..." /></a>
            </div>
            <div class="col-md-3">
              <div class="card-body">
                <h5 class="card-title">2020 "being alive" with Noman </h5>
                <p class="card-text">Sometimes I musically feel the sounds of the city.
                  I made this song through Zoom with Norman in Tokyo during the pandemic.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <a href="https://youtu.be/4Y_GCwwb1r0" target="blank"><img src={Youtube04} id="youTubeImg4" class="img-fluid rounded-sharp" alt="..." /></a>
            </div>
            <div class="col-md-3">
              <div class="card-body">
                <h5 class="card-title">2020 "Barceloneta" with Noman</h5>
                <p class="card-text">San Juan is the shortest night of the year.
                  On this day, the sound of fireworks doesn't stop until morning on the barceloneta beach.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-md-3">
            <a href="https://soundcloud.com/kazumisakoda/plcataluna-badalona?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="blank"><img src={Youtube05} id="youTubeImg5" class="img-fluid rounded-sharp" alt="..." /></a>
          </div>
          <div class="col-md-3">
            <div class="card-body">
              <h5 class="card-title">2020   "Pl.Catalunya - Badalona" at Sangen Chakai streaming channel</h5>
              <p class="card-text">Summer. The trains on weekends are full for people who go to the sea and those who return from the sea.</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="card mb-3" id="musicCards" style={{ maxWidth: "100%" }}>
          <div class="row g-0">
            <h4>bandcamp</h4>
            <div class="col-md-3">
              <a href="https://kazumisakoda.bandcamp.com/" target="blank"><img src={BandCamp} id="bandcamp" class="img-fluid rounded-sharp" alt="..." /></a>
            </div>
            <div class="col-md-3">
              <div class="card-body">
                <h5 class="card-title">2019 "Sampling Barcelona" </h5>
                <p class="card-text">
                  1.
                  Plaça Universitat<br />
                  2.
                  Carrer Comtal<br />
                  3.
                  Carrer d'En Robador<br />
                  4.
                  Plaça dels Àngels<br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerInner">
            <p className="footerLink">
              <a href="https://www.instagram.com/kazumi_sakoda/" target="blank">INSTAGRAM</a><span style={{ fontSize: "8px" }}>•</span>
              <a href="https://www.youtube.com/channel/UClGgOLYCBl8Ccz2_nuyjFCw" id="videoClip" target="blank">YOUTUBE</a><span style={{ fontSize: "8px" }}>•</span>
              <a href="https://kazumisakoda.bandcamp.com/" id="videoClip" target="blank">BANDCAMP</a>
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Music