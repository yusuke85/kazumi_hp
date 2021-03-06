import React from "react";
import Image from "../Images/bio3.jpg"
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Bio.css";

const Bio = () => {

  return (
    <Container>
      <Row >
        <Col md={2} />
        <Col md={8}>
          <img src={Image} id="kazumi1" className="img-fluid" alt="bioImage" />
        </Col>
      </Row>
      <Row >
        <Col md={2} />
        <Col md={8}>
          <h3>
            BIO
          </h3>
          <p className="text-center">
            Kazumi Sakoda, a Japanese artist based in Barcelona for the last 4 years,
            investigates through the sounds she collects
            from the streets of Barcelona,the sound differences between the city and the sounds of the city of Tokyo, where she was
            born and grew up. < br />
            She transforms all these materials into music in cassette format, using loops of these handmade tapes.
            Through the recontextualisation of these cassettes, sampling and recordings of urban soundscapes, his compositions blur the genres of experimental and noise music.
          </p>
        </Col>
      </Row>
      <Row >
        <Col md={2} />
        <Col md={8}>
          <h3>
            Live / Performance
          </h3>
          <hr />
          <p className="text-center">
            <a href="https://www.mixcloud.com/Teslafm_net/deltagrama-5-soul-twin/" target="blank">2022 TeslaFM Deltagrama #5 - Soul Twin</a> < br />
            <a href="https://youtu.be/638UDoMve4c" target="blank">2022 Streaming live at SubRadio , "Lantern", Barcelona</a> < br />
            2022   Teorema Festival Barcelona, ”Lantern”, Barcelona < br />
            2022   IWD | MUTEK Barcelona Edition 13, "Lantern", Casa Bonay, Barcelona< br />
            2021   Teorema Festival Barcelona, ”el bosque corrompido”, Barcelona< br />
            2020   KRONOS ART BCN, "being alive" with Noman from Tokyo with Zoom, Santa Mònica< br />
            2020   三元茶会 | 禊伽mitogi,  "Pl.Cataluña - Badalona"  ,  Zoom, Tokio< br />
          </p>
        </Col>
      </Row>
      <div className="BioFooter">
        <p>© KAZUMI SAKODA 2022</p>
      </div>
    </Container>
  )

}

export default Bio
