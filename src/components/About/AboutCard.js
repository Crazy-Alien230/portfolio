import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";
import { GiDramaMasks } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">VARNIT JINDAL</span>{" "}
            from <span className="purple">Siyana, Bulandshahr, India</span>.
            <br />
            I’m currently working as a
            <span className="purple">FrontEnd Developer</span> at{" "}
            <span className="purple">RoboticX Services</span>.
            <br />I hold an Bachelor of Technology in{" "}
            <span className="purple"> Computer Science and Engineering </span> from
            <span className="purple">Teerthanker Mahaveer University, Moradabad</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs <FaBookReader />
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Mangas <GiDramaMasks />
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
