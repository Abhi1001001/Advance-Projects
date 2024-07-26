import React from "react";

export default function Education() {
  return (
    <>
      <div className="m-3">
        <div class="card main-education">
          <h2 class="card-header text-center">My Education</h2>
          <div className="sm-main-education">
            <div class="card card-main-education">
              <div class="card-body">
                <h4 class="card-title">Diploma</h4>
                <p>2019-2022</p>
                <p class="card-text">
                  Holder of a Diploma in Electrical and Electronics Engineering
                  from the Board of technical Education Uttar Pradesh (BTEUP).
                </p>
                <a href="#" class="btn btn-home">
                  <span class="material-symbols-outlined fs-2">
                    exit_to_app
                  </span>
                </a>
              </div>
            </div>

            <div class="card card-main-education">
              <div class="card-body">
                <h4 class="card-title">Intermediate</h4>
                <p>2017-2019</p>
                <p class="card-text">
                  I completed intermediate in science stream from an institute
                  affiliate with U P Board in 2019.
                </p>
                <a href="#" class="btn btn-home">
                  <span class="material-symbols-outlined fs-2">
                    exit_to_app
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
