import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ContactPhoto from "../Images/facecopy.jpeg"
import "../Styles/Contact.css"


function Contact() {

  return (
    <Container  >
      <Row >
        <Col md={2} />
        <Col md={5} xs={12}>
          <img src={ContactPhoto} id="contactPhoto" className="img-fluid" max-width="100%" width="600" height="auto" alt="contactphoto" />
        </Col>
        <Col id="contactform" md={3} xs={12}>
          <p className="forContact"> For all booking, hiring, please send correspondence.
            <br /><a href="mailto:kazumisakodamusic@gmail.com">Please send message from hear</a>
          </p>
          <div className="snsLinks">
            <ul>
              <li>
                <a href="https://www.instagram.com/kazumi_sakoda/" target="blank">INSTAGRAM</a>
              </li>
              <li>
                <a href="https://www.facebook.com/kazumisakodaf" id="fbLink" target="blank">Facebook</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UClGgOLYCBl8Ccz2_nuyjFCw" id="youthbeLink" target="blank">YOUTUBE</a>
              </li>
              <li>
                <a href="https://kazumisakoda.bandcamp.com/" id="bandcampLink" target="blank">BANDCAMP</a>
              </li>
              <li>
                <a href="https://soundcloud.com/kazumisakoda" id="soundcloudLink" target="blank">Soundcloud</a>
              </li>
              <li>
                <a href="https://music.apple.com/us/artist/kazumi-sakoda/1622921958" id="applemusicLink" target="blank">Apple Music</a>
              </li>
              <li>
                <a href="https://open.spotify.com/artist/1quOeSochs11YMU7VxuUI5?si=roH2uQvNTRWqkpycLmzcnw" id="spotifyLink" target="blank">Spotify</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row >
    </Container >
  )
}

export default Contact