import React from "react";
import Section from "../Section";

function AboutSection() {
  return (
    <>
      <Section styling={"top"}>
        <div className={"content header"}>
          <h1>Hey I'm Kyle!</h1>
          <p>I'm a Full-Stack Software Engineer from London</p>
        </div>
      </Section>
      <Section styling={"even"}>
        <div className={"content aboutme"}>
          <div className={"img-cropper"}>
            <img
              src={"/profile_photo.jpeg"}
              className={"profile"}
              alt={"profile"}
            />
          </div>
          <div className={"text"}>
            <h2>About me</h2>
            <p>
              Before making my jump to Computer Science I studied Computer Games
              Technology with the hope of becoming a Game Developer. I loved the
              idea of being able to contribute towards something that would put
              a smile on someone's face and then realised I could create the
              same feeling through any software.
            </p>
          </div>
        </div>
      </Section>
      <Section styling={"odd"}>
        <div className={"content work"}>
          <div className={"img-cropper"}>
            <img src={"/work.png"} className={"profile"} alt={"profile"} />
          </div>
          <div className={"text"}>
            <h2>Work</h2>
            Here's a brief history of my employment:
            <ul className={"work__list"}>
              <li>
                <div className={"work__list-style"}></div>
                <div className={"work__period"}>Oct. 2020 - Present</div>
                <div className={"work__details"}>
                  <h3>Nando's</h3>
                  <p>Software Engineer</p>
                  <p>
                    Developing an end-to-end process for updating the menu using
                    JavaScript and Rust
                  </p>
                </div>
              </li>
              <li>
                <div className={"work__list-style"}></div>
                <div className={"work__period"}>Oct. 2019 - Sep. 2020</div>
                <div className={"work__details"}>
                  <h3>MOO</h3>
                  <p>Software Engineer Associate</p>
                  <p>
                    Developing and adding frontend features to an admin platform
                    using JavaScript and React.js
                  </p>
                </div>
              </li>
              <li>
                <div className={"work__list-style"}></div>
                <div className={"work__period"}>Jul. 2017 - Jul. 2018</div>
                <div className={"work__details"}>
                  <h3>We Create Digital</h3>
                  <p>Junior Web Developer</p>
                  <p>
                    Creating and maintaining websites on my university degree
                    placement year using PHP, Laravel and JavaScript
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

export default AboutSection;
