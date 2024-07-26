import React from "react";

export default function Resume() {
  return (
    <>
      <div className="m-3">
        <div class="card main-Resume">
          <div className="card sm-main-resume">
            <h2 class="card-header text-center">My Resume</h2>
            <div class="card-body card-main-resume">
            <object data="./asets/images/Abhishek-CV.pdf" type="application/pdf" width="100%" height="100%"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
