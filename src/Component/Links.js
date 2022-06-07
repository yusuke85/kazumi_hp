import React from "react";
import useSound from "use-sound";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../Styles/Links.css"
import SB from "../Images/SB.jpg"
import ClickSound from "../Audio/click.wav"
import TopimageSound from "../Audio/TopimageSound.mp3"




function Links() {


  const [playOn] = useSound(ClickSound)
  const [playOn2] = useSound(TopimageSound)


  return (
    <>
      <nav className="nav">
        <LinkContainer to="/" className="rounded float-start">
          <Navbar.Brand id="kazumi" onClick={playOn}>Kazumi Sakoda</Navbar.Brand>
        </LinkContainer>
        <div className="logo">
         <img src={SB} width="300" id="sbLogo" onClick={playOn2} alt="navimg" />
        </div>
        <div className="links">
          <LinkContainer to="/Contact" id="contact" className="rounded float-end">
            <Nav.Link onClick={playOn}>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Music" id="music" className="rounded float-end">
            <Nav.Link onClick={playOn}>Music</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Bio" id="bio" className="rounded float-end">
            <Nav.Link onClick={playOn}>Bio</Nav.Link>
          </LinkContainer>
        </div>
      </nav>
    </>
  )
}
export default Links

