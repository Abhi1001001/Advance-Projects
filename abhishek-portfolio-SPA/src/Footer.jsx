import React from "react";
import { ReactComponent as LinkedInIcon } from './icons/icon-linkedin.svg';
import { ReactComponent as GitHubIcon } from './icons/icon-github.svg';
import { ReactComponent as MailIcon } from './icons/icon-mail.svg';

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
              <LinkedInIcon
                height={30}
                width={30}
              />
            </a>
            <a href="https://github.com/Abhi1001001">
            <GitHubIcon
                height={30}
                width={30}
              />
            </a>
            <a href="mailto:av159593@gmail.com">
            <MailIcon
                height={30}
                width={30}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
