import React from "react";
import { ReactComponent as LinkedInIcon } from "./icons/icon-linkedin.svg";
import { ReactComponent as GitHubIcon } from "./icons/icon-github.svg";
import { ReactComponent as MailIcon } from "./icons/icon-mail.svg";
import { ReactComponent as WhatsAppIcon } from "./icons/icon-whatsapp.svg";

export default function ContectUs() {
  return (
    <>
      <div className="main-contect-us d-flex gap-4">
        <div class="card card-main-contect-us">
          <h2 class="card-header">Connect Me...</h2>
          <div class=" card-body sm-card-main-contect-us">
            <h5 class="card-title">Submit your details for connect with me</h5>

            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your full name"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Enter Email Address
              </label>
              <input
                type="emil"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your email address"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Enter Phone Number
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your phone number"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Enter Profile
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your profile"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary btn-contect-us">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div class="card card-main-contect-us">
          <h2 class="card-header">Find me on...</h2>
          <div class="card-body sm-card-main-contect-us">
            <div className="logo-contect-us w-75">
              <div className="linkedin d-flex">
                <h5 className="linkedin-text me-5 ">Linked-in</h5>
                <a href="https://www.linkedin.com/in/abhishek-vishwakarma-127b66227/">
                  <LinkedInIcon
                    title="Click to open my Linked-in Profile"
                    className="logo-hover-contect-us rounded-2"
                    height={100}
                    width={100}
                  />
                </a>
              </div>
              <div className="github d-flex">
                <h5 className="github-text me-5">Github</h5>
                <a href="https://github.com/Abhi1001001">
                  <GitHubIcon
                    title="Click to open my GitHub Profile"
                    className="logo-hover-contect-us rounded-2"
                    height={100}
                    width={100}
                  />
                </a>
              </div>
              <div className="mail d-flex">
                <h5 className="mail-text me-5">E-mail</h5>
                <a href="mailto:av159593@gmail.com">
                  <MailIcon
                    title="Click to send me an E-mail"
                    className="logo-hover-contect-us rounded-2"
                    height={100}
                    width={100}
                  />
                </a>
              </div>
              <div className="phone d-flex">
                <h5 className="whatsapp-text me-5">WhatsApp</h5>
                <a href="whatsapp:+917235047144">
                  <WhatsAppIcon
                    title="Click for Whatsapp Chat"
                    className="logo-hover-contect-us rounded-2"
                    height={100}
                    width={100}
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
