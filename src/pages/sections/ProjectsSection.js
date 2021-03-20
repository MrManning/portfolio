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
    <Section title={""} styling={"even"}>
      <div className={"content"}>
        <div className={"text"}>
          <h2>Projects</h2>
          {/* <div className={"repository-list"}>
            {<Repositories data={repositories.projects} />}
          </div> */}
          <div className={"new-repository-list"}>
            {<NewRepositories data={repositories.projects} />}
          </div>
        </div>
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
      <img className={'card--image'} src={`https://loremflickr.com/1280/720?index=${index}`} alt={`Repository - ${repo.name}`}/>
      <div className={"card--content"}>
        <div className={"card--header"}>
          <h3>{repo.name}</h3>
        </div>
        {repo.description}
        <a href={`${repo.html_url}`}>View on GitHub</a>
      </div>
      <div className={"card--bubble"}>
        <div className={"card--bubble-item"}>
          {repo.language ? repo.language : "TBC"}
        </div>
      </div>
    </div>
  ));
}
function NewRepositories(props) {
  let myData = props.data.reverse().map((repo, index) => (
    <div className={'new-card'} key={index}>
      <img className={'new-card__image'} src={`https://loremflickr.com/1280/720?index=${index}`} alt={`Repository - ${repo.name}`}/>
      <div className={'new-card__content'}>
        <h3>{repo.name}</h3> 
        <div>{repo.description}</div>
      </div>
      <div className={"card--bubble"}>
        <div className={"card--bubble-item"}>
          {repo.language ? repo.language : "TBC"}
        </div>
      </div>
    </div>
  ));
  
  // myData.push((
  //   <div className={'new-card'} key={333}>
  //     <img className={'new-card__image'} src={`https://loremflickr.com/1280/720?index=${333}`} alt={`Repository - none`}/>
  //     <div className={'new-card__content'}>
  //       <h3>More Projects to come....</h3> 
  //       <div>test</div>
  //     </div>
  //   </div>
  // ));
  return myData;
}

export default ProjectsSection;
