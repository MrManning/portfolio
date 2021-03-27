import React from 'react';
import Section from 'components/Section';
import profile from 'assets/images/profile_photo_size_comp.jpg';
import code from 'assets/images/code.jpg';
import WorkItem from 'components/WorkItem';

function About() {
  return (
    <>
      <Section title="header" styling="top">
        <h1>Hey I&apos;m Kyle!</h1>
        <p>I&apos;m a Full-Stack Software Engineer from London</p>
      </Section>
      <Section title="aboutme" styling="even">
        <div className="img-cropper">
          <img src={profile} className="profile" alt="Profile" />
        </div>
        <div className="text">
          <h2>About me</h2>
          <p>
            Before making my jump to Computer Science I studied Computer Games
            Technology with the hope of becoming a Game Developer. I loved the
            idea of being able to contribute towards something that would put
            a smile on someone&apos;s face and then realised I could create the
            same feeling through any software.
          </p>
        </div>
      </Section>
      <Section title="work" styling="odd">
        <div className="img-cropper">
          <img src={code} className="profile" alt="Code" />
        </div>
        <div className="text">
          <h2>Work</h2>
          Here&apos;s a brief history of my employment:
          <ul className="work__list">
            <li>
              <WorkItem period="Oct. 2020 - Present" company="Nando's" jobTitle="Software Engineer">
                Developing an end-to-end process for updating the menu using
                JavaScript and Rust
              </WorkItem>
            </li>
            <li>
              <WorkItem period="Oct. 2019 - Sep. 2020" company="MOO" jobTitle="Software Engineer Associate">
                Developing and adding frontend features to an admin platform
                using JavaScript and React.js
              </WorkItem>
            </li>
            <li>
              <WorkItem period="Jul. 2017 - Jul. 2018" company="We Create Digital" jobTitle="Junior Web Developer">
                Creating and maintaining websites on my university degree
                placement year using PHP, Laravel and JavaScript
              </WorkItem>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}

export default About;
