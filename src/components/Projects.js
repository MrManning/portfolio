import React from 'react';
import axios from 'axios';
import Section from 'components/Section';
import { ReactComponent as Logo } from 'assets/images/loading.svg';

const GITHUB_REPO = 'https://api.github.com/users/MrManning/repos';

function Projects() {
  const [repositories, setRepositories] = React.useState({
    projects: [],
    loading: true,
  });

  React.useEffect(() => {
    axios
      .get(GITHUB_REPO, { headers: { Accept: 'application/vnd.github.v3+json' } })
      .then((response) => {
        const repos = response.data;
        setRepositories({
          projects: repos,
          loading: false,
        });
      })
      .catch(() => {
        // Handle catch state
      });
  }, [repositories.loading]);

  const loadingMessage = (
    <Section styling="even">
      <Logo className="App-logo" alt="logo" />
    </Section>
  );

  const main = (
    <Section title="projects" styling="even">
      <div className="text">
        <h2>Projects</h2>
        <div className="repository-list">
          <ProjectItems data={repositories.projects} />
        </div>
      </div>
    </Section>
  );

  return repositories.loading ? loadingMessage : main;
}

function ProjectItems(props) {
  return props.data.map((repo) => (
    <div className="card-component" key={`repo--${repo.id}`}>
      <div className="card--content">
        <h3>{repo.name}</h3>
        {repo.description
            && (
              <p>{repo.description}</p>
            )}
        <a href={`${repo.html_url}`} rel="noopener noreferrer" target="_blank" className="btn">View on GitHub</a>
      </div>

      {repo.language
          && (
            <div className="card--bubble">
              <div className="card--bubble-item">
                {repo.language}
              </div>
            </div>
          )}
    </div>
  ));
}

export default Projects;
