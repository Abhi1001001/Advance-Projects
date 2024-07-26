import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-sub-section">
          <div className="text-footer">
            <p>
              Phone : <a  href="tel:+917235047144">+917235047144</a> <br/>
              Email : <a  href="mailto:av159593@gmail.com">av159593@gmail.com</a> <br/>
              designed by Abhishek Vishwakarma 
            </p>
          </div>
          <div className="logo-footer">
            <a href="https://www.linkedin.com/in/abhishek-vishwakarma-127b66227/">
              <img
                src="./asets/images/icon-linkedin.svg"
                height="30px"
                width="30px"
                alt=""
              />
            </a>
            <a href="https://github.com/Abhi1001001">
              <img
                src="./asets/images/icon-github.svg"
                height="30px"
                width="30px"
                alt=""
              />
            </a>
            <a href="mailto:av159593@gmail.com">
              <img
                src="./asets/images/icon-mail.svg"
                height="30px"
                width="30px"
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
