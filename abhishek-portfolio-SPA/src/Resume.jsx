import React from "react";

export default function Resume() {
  return (
    <>
      <div className="m-3">
        <div className="card main-Resume">
          <div className="card sm-main-resume">
            <h2 className="card-header text-center">My Resume</h2>
            <div className="card-body card-main-resume">
            <object data="./asets/images/Abhishek-CV.pdf" type="application/pdf" width="100%" height="100%"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
