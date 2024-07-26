import React from "react";

export default function Skills() {
  return (
    <>
      <div className=" my-3 col-6 w-100">
        <div class="card main-skills mx-3">
          <h2 class="header-main-skills text-center">My Skills</h2>

          <div className="card-main-skills">
            <div className="sm-card-main-skills">
              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/html.svg" alt="" />
                <h4 className="text-skill text-center">HTML</h4>
              </div>

              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/css.svg" alt="" />
                <h4 className="text-skill text-center">CSS</h4>
              </div>

              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/javascript.svg" alt="" />
                <h4 className="text-skill text-center">Javascript</h4>
              </div>

              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/react.svg" alt="" />
                <h4 className="text-skill text-center mt-2">React</h4>
              </div>

              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/bootstrap.svg" alt="" />
                <h4 className="text-skill text-center">Bootstrap</h4>
              </div>

              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/redux.svg" alt="" />
                <h4 className="text-skill text-center">Redux</h4>
              </div>

              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/material-ui.svg" alt="" />
                <h4 className="text-skill text-center">MaterialUI</h4>
              </div>

              <div class="card logo-card-skills mb-3 card-size">
                <img src="./asets/images/icon-github.svg" alt="" />
                <h4 className="text-skill text-center">Github</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 col-6">
        <div class="card language-main-skills ms-3">
          <h2 class="header-main-skills w-100 text-center">My Languages</h2>
          <div className="card-language-main-skills">
            <div className="sm-card-language-main-skills pb-5">
              <div className="">English</div>
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

              <div className="">Hindi</div>
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
