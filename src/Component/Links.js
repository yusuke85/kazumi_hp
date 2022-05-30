import React from "react";
import useSound from "use-sound";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../Styles/Links.css"
import SB from "../Images/SB.jpg"
import ClickSound from "../Audio/click.wav"




function Links() {


  const [playOn] = useSound(ClickSound)


  return (
    <>
      <nav className="nav">
        <LinkContainer to="/" className="rounded float-start">
          <Navbar.Brand id="kazumi" onClick={playOn}>Kazumi Sakoda</Navbar.Brand>
        </LinkContainer>
        <div className="logo">
          <img src={SB} width="300" id="sbLogo" alt="..." />
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

