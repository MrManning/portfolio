import React from "react";
import ProjectsSection from "./sections/ProjectsSection.js";
import AboutSection from "./sections/AboutSection.js";

function Home() {
  const back = () => {
    document.querySelector("#root").scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <AboutSection />
      <ProjectsSection />
      <button className={"back-to-top"} onClick={() => back()} />
    </React.Fragment>
  );
}

export default Home;
