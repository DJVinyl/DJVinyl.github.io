import Icon from "./Icon";
import Image from "react-bootstrap/Image";
import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";
import email from "../images/email.png";
import cv from "../images/CV.png";
import selfPic from "../images/selfPic.jpeg";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header className="App-header">
      <span className="Image">
        <Image className="rounded-corners" src={selfPic} alt="Avatar" />
      </span>
      <span className="link-tree">
        <h1 className="name-header">Mitchell Gonzalez</h1>
        <p className="titles">Geomatics Engineer Grad & Full Stack Developer</p>
        <div className="router-bar">
          <Icon
            website={"https://resume.creddle.io/resume/dmnvgpk3lf3"}
            image={cv}
            subtitle={'Resume'}
          />
          <Icon website={"https://github.com/DJVinyl"} image={github} subtitle={'My Github'} />
          <Icon
            website={"https://www.linkedin.com/in/mitchellgonzalez1993/"}
            image={linkedIn}
            subtitle={'My LinkedIn'}
          />
          <Icon website={"mailto:mitchell.gonzalez@gmail.com"} image={email} subtitle={'Email Me'}/>

        </div>
      </span>
    </header>
  );
}
