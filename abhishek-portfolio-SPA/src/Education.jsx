import React from "react";

export default function Education() {
  return (
    <>
      <div className="">
        <div class="card main-education">
          <h2 class="card-header text-center">My Education</h2>
          <div className="sm-main-education">
            <div class="card card-main-education">
              <div class="card-body">
              <img className="education-img" src="./asets/images/education-icon.png" alt="Path Error..." />
                <h4 class="card-title">Diploma</h4>
                <p>2019-2022</p>
                <p class="card-text">
                  Holder of a Diploma in Electrical and Electronics Engineering
                  from the Board of technical Education Uttar Pradesh (BTEUP).
                </p>
              </div>
            </div>

            <div class="card card-main-education">
              <div class="card-body">
              <img className="education-img" src="./asets/images/education-icon.png" alt="Path Error..." />
                <h4 class="card-title">Graduation</h4>
                <p>2020-2023</p>
                <p class="card-text">
                I'm  graduate in Bachelor of Arts from
                  an institution affiliated with the Awadh
                  University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
