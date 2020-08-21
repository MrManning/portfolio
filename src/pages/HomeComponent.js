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
        };
    }

    componentDidMount() {
        const GITHUB_REPO = 'https://api.github.com/users/MrManning/repos';
        axios.get( GITHUB_REPO )
            .then( response => response.json() )
            .then( ( response ) => {
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

    redirectLink( link ) {
        window.open( link, '_blank', 'rel=noopener noreferrer' )
    }

    getRepositories() {
        const { repositories } = this.props.repositories;

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

    render() {
        const { isLoading } = this.props.isLoading;
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

HomeComponent.defaultProps = {
    isLoading: true,
    repositories: [],
};

HomeComponent.propTypes = {
    isLoading: PropTypes.bool,
    repositories: PropTypes.array
    // repositories: PropTypes.arrayOf(
    //     PropTypes.shape( {
    //         name: PropTypes.string
    //     } )
    // ),
};

export default HomeComponent