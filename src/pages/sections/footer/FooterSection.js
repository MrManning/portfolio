import React from "react";
import Section from "../../Section";

function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <Section title={""} styling={"bottom"}>
      <div className={"content"}>
        <div className="text">
          <h2>Contact Me</h2>
          <ul>
            <li>
              <a
                href={"https://www.linkedin.com/in/kylecwmanning/"}
                rel={"noopener noreferrer"}
              >
                <img
                  src={"/icons/linkedin-filled-square.png"}
                  alt={"LinkedIn"}
                />
              </a>
            </li>
            <li>
              <a
                href={"https://github.com/MrManning"}
                rel={"noopener noreferrer"}
              >
                <img src={"/icons/github-filled-square.png"} alt={"Github"} />
              </a>
            </li>
          </ul>
          <p>&copy;{year} Kyle Manning. All rights reserved.</p>
        </div>
      </div>
    </Section>
  );
}

export default FooterSection;
