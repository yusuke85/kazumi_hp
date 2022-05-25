import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ContactPhoto from "../Images/CONTACT.jpg"
import "../Styles/Contact.css"


function Contact() {

  return (
    <Container fluid >
      <Row fluid >
        <Col md={2} />
        <Col md={5} xs={12}>
          <img src={ContactPhoto} id="contactPhoto" class="img-fluid" max-width="100%" width="600" height="auto" alt="..." />
        </Col>
        <Col id="contactform" md={3} xs={12}>
          <p className="forContact"> For all booking, hiring, please send correspondence.
            <br /><a href="kazumisakodamusic@gmail.com">kazumisakodamusic@gmail.com</a>
          </p>
          <div className="snsLinks">
            <ul>
              <li>
                <a href="https://www.instagram.com/kazumi_sakoda/" target="blank">INSTAGRAM</a>
              </li>
              <li>
                <a href="https://www.facebook.com/kazumisakodaf" id="videoClip" target="blank">Facebook</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UClGgOLYCBl8Ccz2_nuyjFCw" id="videoClip" target="blank">YOUTUBE</a>
              </li>
              <li>
                <a href="https://kazumisakoda.bandcamp.com/" id="videoClip" target="blank">BANDCAMP</a>
              </li>
              <li>
                <a href="https://soundcloud.com/kazumisakoda" id="videoClip" target="blank">Soundcloud</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row >
    </Container >
  )
}

export default Contact