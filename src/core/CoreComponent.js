import React from 'react';

import Header from './header/HeaderComponent';
import Footer from './footer/FooterComponent';

class CoreComponent extends React.Component {
    render() {
        const children = this.props.children;

        return (
            <div className={'main'}>
                <Header/>
                <div className={'index'}>
                    <div className={'index-content'}>
                        {React.cloneElement( children, {} )}
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}


export default CoreComponent;