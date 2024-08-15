import React from "react";
import { ReactComponent as HtmlIcon } from "./icons/html.svg";
import { ReactComponent as CSSIcon } from "./icons/css.svg";
import { ReactComponent as JavaScriptIcon } from "./icons/javascript.svg";
import { ReactComponent as ReactIcon } from "./icons/react.svg";
import { ReactComponent as BootStrapIcon } from "./icons/bootstrap.svg";
import { ReactComponent as ReduxIcon } from "./icons/redux.svg";
import { ReactComponent as MaterialUIIcon } from "./icons/material-ui.svg";
import { ReactComponent as GitHubIcon } from "./icons/icon-github.svg";
import { ReactComponent as TailwindCSSIcon } from "./icons/tailwind.svg";

export default function Skills() {
  return (
    <>
      <div className=" my-3 col-6 w-100">
        <div class="card main-skills">
          <h2 class="header-main-skills text-center">My Skills</h2>

          <div className="card-main-skills">
            <div className="sm-card-main-skills">
              <div className="card logo-card-skills mb-3 card-size">
                <HtmlIcon />
                <h4 className="text-skill text-center">HTML</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <CSSIcon />
                <h4 className="text-skill text-center">CSS</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <JavaScriptIcon />
                <h4 className="text-skill text-center">Javascript</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <ReactIcon />
                <h4 className="text-skill text-center mt-2">React</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <BootStrapIcon />
                <h4 className="text-skill text-center">Bootstrap</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <ReduxIcon />
                <h4 className="text-skill text-center">Redux-Saga</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <MaterialUIIcon />
                <h4 className="text-skill text-center">MaterialUI</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <TailwindCSSIcon />
                <h4 className="text-skill text-center">TailwindCSS</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <GitHubIcon />
                <h4 className="text-skill text-center">Github</h4>
              </div>
              <div className="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/icon-api.png" alt="" />
                <h4 className="text-skill text-center">REST API</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 col-6 w-100 card language-main-skills">
        <h2 class="header-main-skills w-100 text-center">My Languages</h2>
        <div className="card-language-main-skills">
          <div className="sm-card-language-main-skills pb-5">
            <div className="progress-bar-text">
              <div className="">English</div>
              <div className="">Hindi</div>
            </div>
            <div className="progress-bar">
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar w-75"></div>
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar w-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
