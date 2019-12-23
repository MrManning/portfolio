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
        axios.get( GITHUB_REPO ).then(
            response => {
                const repositories = response.data;
                this.setState( { isLoading: false, repositories: repositories } );
            }
        );
    }

    getLoading() {
        return (
            <div className={'unknown'}>
                <Logo className={'App-logo'} alt={'logo'}/>
                <h1>Loading...</h1>
            </div>
        );
    }

    getRepositories() {
        const { repositories } = this.state;
        // Add hover transition to component
        // PARAMS needed - name, description (cut off at certain length), html_url
        // PARAMS - maybe a small sub header (commits)

        return repositories.map( ( repo, index ) => (
            <div className={'card-component'} key={`repo--${index}`}>
                <div className={'card--header'}>
                    <h3>{repo.name}</h3>
                </div>
                <div className={'card--content'}>
                    {repo.description}
                </div>
            </div>
        ) );
    }

    render() {
        const { isLoading } = this.state;
        const loadingMessage = this.getLoading();

        const repos = this.getRepositories();

        const main = (
            <div className={'home'}>
                <div className={'repository-list'}>
                    {repos}
                </div>
            </div>
        );

        return isLoading ? loadingMessage : main;
    }
}

HomeComponent.propTypes = {
    isLoading: PropTypes.bool,
    repositories: PropTypes.arrayOf(
        PropTypes.shape( {
            name: PropTypes.string
        } )
    ),
};

export default HomeComponent