import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className={'header-component'}>
                <header>
                    <div className={'hamburger-component'}></div>
                    <div className={'header-component__img'}>
                        <img src={'/Paris_BW.jpg'} className={'profile'} alt={'profile'}/>
                    </div>
                    <div className={'header-component__container'}>
                        <div className={'header-component__nav'}>
                            <div className={'links'}>
                                <Link to={"/"}>MELON</Link>
                            </div>
                            <div className={'links'}>
                                <Link to={"/books"}>MELON</Link>
                            </div>
                            <div className={'links'}>
                                <Link to={"/dashboard"}>MELON</Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;