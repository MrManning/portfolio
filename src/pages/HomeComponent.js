import React from 'react';
import axios from 'axios';
import { ReactComponent as Logo } from '../logo.svg';
import PropTypes from 'prop-types';

class HomeComponent extends React.Component {
    // TODO
    // - GET request for my profile
    // - response with all repos which are public
    // - return repos in a div (spit out the info for now)
    // - Update loading state
    // - Set default values

    constructor( props ) {
        super( props );
        this.state = {
            isLoading: true,
            repositories: []
        };
    }

    componentDidMount() {
        const GITHUB_REPO = 'https://api.github.com/users/MrManning/repos';

        axios.get( GITHUB_REPO )
            .then( ( response ) => {
                    const repositories = response.data;
                    this.setState( { isLoading: false, repositories: repositories } );
            })
            .catch(function(e) {
              console.log("ERROR ", e);
            });
    }

    getLoading() {
        return (
            <div className={'unknown'}>
                <Logo className={'App-logo'} alt={'logo'}/>
            </div>
        );
    }

    redirectLink( link ) {
        window.open( link, '_blank', 'rel=noopener noreferrer' )
    }

    render() {
        const { isLoading } = this.state;
        const loadingMessage = this.getLoading();
        const repos = this.getRepositories();

        const main = (
            <div className={'home'}>
            <h2>Projects</h2>
                <div className={'repository-list'}>
                    {repos}
                </div>
            </div>
        );

        return isLoading ? loadingMessage : main;
    }

    getRepositories() {
        const { repositories } = this.state;

        return repositories.map( ( repo, index ) => (
            <div className={'card-component'} key={`repo--${index}`}
                 onClick={() => this.redirectLink( `${repo.html_url}` )}>
                <div className={'card--header'}>
                    <h3>{repo.name}</h3>
                </div>
                <div className={'card--content'}>
                    {repo.description}

                    <div className={'card--bubble'}>
                        {repo.language ? (
                            <div className={'card--bubble-item'}>
                                {repo.language}
                            </div>
                        ) : ''}
                    </div>
                </div>
            </div>
        ) );
    }
}

HomeComponent.defaultProps = {
    isLoading: true,
    repositories: [],
};

HomeComponent.propTypes = {
    isLoading: PropTypes.bool,
    repositories: PropTypes.array
};

export default HomeComponent
