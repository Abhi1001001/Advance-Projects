import React from "react";

export default function Education() {
  return (
    <>
      <div className="m-3">
        <div className="card main-education">
          <h2 className="card-header text-center">My Education</h2>
          <div className="sm-main-education">
            <div className="card card-main-education">
              <div className="card-body">
                <h4 className="card-title">Diploma</h4>
                <p>2019-2022</p>
                <p className="card-text">
                  Holder of a Diploma in Electrical and Electronics Engineering
                  from the Board of technical Education Uttar Pradesh (BTEUP).
                </p>
                <a href="#" className="btn btn-home">
                  <span className="material-symbols-outlined fs-2">
                    exit_to_app
                  </span>
                </a>
              </div>
            </div>

            <div className="card card-main-education">
              <div className="card-body">
                <h4 className="card-title">Intermediate</h4>
                <p>2017-2019</p>
                <p className="card-text">
                  I completed intermediate in science stream from an institute
                  affiliate with U P Board in 2019.
                </p>
                <a href="#" className="btn btn-home">
                  <span className="material-symbols-outlined fs-2">
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
