import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Resume from "./Resume";
import ContectUs from "./ContectUs";

export default function NavBar() {
  return (
    <>
      <nav
        id="navbar-example2"
        className="navbar nav-background navbar-expand-lg px-3 mb-3 sticky-top"
      >
        <div class="container-fluid">
          <img
            className="navbar-brand"
            src="./asets/images/logo.png"
            height="50px"
            width="220px"
            alt="...."
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="nav nav-pills">
              <li className="nav-item" role="presentation">
                <Link to="#home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="#skills" className="nav-link ">
                  Skills
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="#projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="#education" className="nav-link">
                  Education
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="#resume" className="nav-link">
                  Resume
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="#contect-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example p-3 rounded-2"
        tabindex="0"
      >
        <div id="home">
          <Home />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="resume">
          <Resume />
        </div>

        <div id="contect-us">
          <ContectUs />
        </div>
      </div>
    </>
  );
}
