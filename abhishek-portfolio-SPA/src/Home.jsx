import React from "react";

export default function Home() {
  return (
    <>
    {/* edited */}
      <div className=""> 
        <div class="card main-home text-start">
          <div class="card-header fs-2 ">Abhishek Vishawakarma</div>
          <div class="card-body card-main-home ">
            <div className="sm-card-main-home col-12 col-sm-6">
              <h1 class="card-title main-text-home">
                I'm a Front-end Developer
              </h1>
              <p class="card-text card-text-home">
                I'm a dedicated software developer with a passion for creating
                innovative digital solutions.I aim to contribute to a dynamic
                team, drive innovation, and continuously enhance my expertise in
                front-end technologies.Eager to contribute to projects that
                prioritize user experience and performance, while staying
                up-to-date with the latest industry trends and best practices.
              </p>
              <a href="#" class="btn btn-home">
                <span class="material-symbols-outlined fs-2">exit_to_app</span>
              </a>
            </div>
            <div className="img-home col-12 col-sm-5 ">
              <img
                src="./asets/images/Portfolio-img.png"
                height="100%"
                width="100%"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
