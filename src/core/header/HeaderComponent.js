import React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className={'header-component'}>
                <header>
                    <div className={'hamburger-component'}></div>
                    <div className={'header-component__container'}>
                        <div className={'header-component__nav'}>
                            <div className={'links'}>
                                <Link to={'/'}>Home</Link>
                            </div>
                            <div className={'links'}>
                                <Link to={'/books'}>TBC</Link>
                            </div>
                            <div className={'links'}>
                                <Link to={'/dashboard'}>TBC</Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
