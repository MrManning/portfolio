import React from 'react';
import Section from 'components/Section';
import linkedin from 'assets/images/linkedin-filled-square.png';
import github from 'assets/images/github-filled-square.png';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section title="footer" styling="bottom">
      <div className="text">
        <h2>Contact Me</h2>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/kylecwmanning/"
              rel="noopener noreferrer"
              aria-label=""
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MrManning"
              rel="noopener noreferrer"
              aria-label=""
            >
              <img src={github} alt="Github" />
            </a>
          </li>
        </ul>
        <p>
          {`\u00A9 ${year} Kyle Manning. All rights reserved.`}
        </p>
      </div>
    </Section>
  );
}

export default Footer;
