import React from "react";

export default function ContectUs() {
  return (
    <>
      <div className="main-contect-us d-flex">
        <div className="card card-main-contect-us mx-3">
          <h2 className="card-header">Connect Me...</h2>
          <div className=" card-body sm-card-main-contect-us">
            <h5 className="card-title">Submit your details for connect with me</h5>

            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Enter Email Address
              </label>
              <input
                type="emil"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Enter Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Enter Profile
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your profile"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary btn-contect-us">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="card card-main-contect-us mx-3">
          <h2 className="card-header">Find me on...</h2>
          <div className="card-body sm-card-main-contect-us">
            <div className="logo-contect-us w-75">
              <div className="linkedin d-flex">
                <h5 className="me-5 ">Linked-in</h5>
                <a href="https://www.linkedin.com/in/abhishek-vishwakarma-127b66227/">
                  <img
                    className="logo-hover-contect-us rounded-2"
                    src="./asets/images/icon-linkedin.svg"
                    height="100px"
                    width="100px"
                    alt=""
                  />
                </a>
              </div>
              <div className="github d-flex">
                <h5 className="me-5">Github</h5>
                <a href="https://github.com/Abhi1001001">
                  <img
                    className="logo-hover-contect-us rounded-2"
                    src="./asets/images/icon-github.svg"
                    height="100px"
                    width="100px"
                    alt=""
                  />
                </a>
              </div>
              <div className="mail d-flex">
                <h5 className="me-5">E-mail</h5>
                <a href="mailto:av159593@gmail.com">
                  <img
                    className="logo-hover-contect-us rounded-2"
                    src="./asets/images/icon-mail.svg"
                    height="100px"
                    width="100px"
                    alt=""
                  />
                </a>
              </div>
              <div className="phone d-flex">
                <h5 className="me-5">WhatsApp</h5>
                <a href="whatsapp:+917235047144">
                  <img
                    className="logo-hover-contect-us rounded-2"
                    src="./asets/images/icon-whatsapp.svg"
                    height="100px"
                    width="100px"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
