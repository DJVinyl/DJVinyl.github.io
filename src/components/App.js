import React from "react";
import "../styles/App.scss";

import Icon from "./Icon";
import Image from "react-bootstrap/Image";

import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";
import email from "../images/email.png";
import selfPic from "../images/selfPic.jpeg";

export default function App() {
  return (
    <div className="App">
      <Image className="rounded-corners" src={selfPic} alt="Avatar"/>
      <header className="App-header">
        <h1>Mitchell Gonzalez</h1>
        <p>Geomatics Engineer Grad & Software Developer</p>
      </header>
      <div className="RouterBar">
        <Icon website={"https://github.com/DJVinyl"} image={github} />
        <Icon
          website={"https://www.linkedin.com/in/mitchellgonzalez1993/"}
          image={linkedIn}
        />
        <Icon website={"mailto:mitchell.gonzalez@gmail.com"} image={email} />
      </div>
    </div>
  );
}
