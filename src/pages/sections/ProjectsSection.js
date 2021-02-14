import React from "react";
import axios from "axios";
import { ReactComponent as Logo } from "../../logo.svg";
import Section from "../Section";

function ProjectsSection() {
  const [repositories, setRepositories] = React.useState({
    projects: [],
    loading: true,
  });

  const loadingMessage = (
    <div className={"unknown"}>
      <Logo className={"App-logo"} alt={"logo"} />
    </div>
  );

  React.useEffect(() => {
    const GITHUB_REPO = "https://api.github.com/users/MrManning/repos";

    axios
      .get(GITHUB_REPO)
      .then((response) => {
        const repositories = response.data;
        setRepositories({
          projects: repositories,
          loading: false,
        });
      })
      .catch(function (e) {
        console.log("ERROR ", e);
      });
  }, [repositories.loading]);

  const main = (
    <Section title={"Projects"} styling={"even"}>
      <div className={"content repository-list"}>
        {<Repositories data={repositories.projects} />}
      </div>
    </Section>
  );

  return repositories.loading ? loadingMessage : main;
}

const redirectLink = (link) => {
  window.open(link, "_blank", "rel=noopener noreferrer");
};

// const trimDescription = (description) => {
//   if (description <= 70) {
//     return description;
//   }
//
//   return description.substr(0, description.lastIndexOf(" ", 70)) + "...";
// };

function Repositories(props) {
  return props.data.map((repo, index) => (
    <div
      className={"card-component"}
      key={`repo--${index}`}
      onClick={() => redirectLink(`${repo.html_url}`)}
    >
      <div className={"card--content"}>
        <div className={"card--header"}>
          <h3>{repo.name}</h3>
        </div>
        {repo.description}
      </div>
      <div className={"card--bubble"}>
        <div className={"card--bubble-item"}>
          {repo.language ? repo.language : "TBC"}
        </div>
      </div>
    </div>
  ));
}

export default ProjectsSection;
