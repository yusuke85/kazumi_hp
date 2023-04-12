import React from "react";
import Image from "../Images/bio3.jpg";
import Image2 from "../Images/Installation01.JPG";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Bio.css";

const Bio = () => {
  return (
    <Container>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <img src={Image} id="kazumi1" className="img-fluid" alt="bioImage" />
        </Col>
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <h3>BIO</h3>
          <hr />
          <p className="text-center">
            Kazumi Sakoda, a Japanese artist based in Barcelona for the last 5
            years, investigates through the sounds she collects from the streets
            of Barcelona,the sound differences between the city and the sounds
            of the city of Tokyo, where she was born and grew up. <br />
            She transforms all these materials into music in cassette format,
            using loops of these handmade tapes. Through the recontextualisation
            of these cassettes, sampling and recordings of urban soundscapes,
            his compositions blur the genres of experimental and noise music.
          </p>
          <h3>Installation</h3>
          <hr />
          <img src={Image2} id="kazumi2" className="img-fluid" alt="InstallationImage" />
           <p>2022 Recorreguts Sonors, ”el bosque corrompido”, convento Sant Agustí</p>

        </Col>
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <h3>Live / Performance</h3>
          <hr />
          <p className="text-center">
            2023   MOSTRA ,”Sampling Barcelona” y “VHS terminal”, Hangar.org, Barcelona<br />
            2023   dublab BCN, Campo Base 20.03.23 w/ Laura de Díaz  <a href="https://www.mixcloud.com/dublabes/campo-base-200323-w-laura-de-d%C3%ADaz/" target="blank">Link</a><br />
            2023 APS, Live with Mohamed Khtira (Gnawa music), Meteoro, Barcelona<br />
            2022 Live at Flushing Toilets collaborated Museo de Arte UNMSM <a href="https://youtu.be/fgxIPZr8k-o" target="blank">
              Link
            </a>
            <br />
            2022 Teorema Festival Barcelona 2022, "tokyo-barcelona", Barcelona<br />
            2022 MIND FEST, "tokyo-barcelona", Castell d'Amposta <br />
            2022 Zona Watusa Festival 5to anniversario,"Osenchi Tokyo", Barcelona <br />
            2022 El prat rádio, Rastros de Carmín, Barcelona 26 set, 2022
            <a href="https://www.elprat.digital/radio/rastros-de-carmin-63/" target="blank">
              Link
            </a>
            <br />
            2022 街のノイズ, "Lantern", slow room, Gifu Cassette Jam Session
            <a href="https://soundcloud.app.goo.gl/hwJMrEVdKSRj4R7r7" target="blank">Link</a>
            <br />
            2022 屋上環境音02, "Lantern", Shibuya valley, Tokyo <br />
            2022 TeslaFM Deltagrama #5 - Soul Twin
            <a href="https://www.mixcloud.com/Teslafm_net/deltagrama-5-soul-twin/"
              target="blank"> Link
            </a>
            <br />
            2022 Streaming live at SubRadio , "Lantern", Barcelona
            <a href="https://youtu.be/638UDoMve4c" target="blank"> Link
            </a>
            <br />
            2022 Teorema Festival Barcelona, ”Lantern”, Barcelona <br />
            2022 IWD | MUTEK Barcelona Edition 13, "Lantern", Casa Bonay,
            Barcelona
            <br />
            2021 Teorema Festival Barcelona, ”el bosque corrompido”, Barcelona
            <br />
            2020 KRONOS ART BCN, "being alive" with Noman from Tokyo with Zoom,
            Santa Mònica
            <br />
            2020 三元茶会 | 禊伽mitogi, "Pl.Cataluña - Badalona" , Zoom, Tokio
            <br />
          </p>
        </Col>
      </Row>
      <div className="BioFooter">
        <p>© KAZUMI SAKODA 2022</p>
      </div>
    </Container>
  );
};

export default Bio;
