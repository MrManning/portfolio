import React from 'react';

function Section(props) {
    return (
        <div className={`section section--${props.styling}`} id={props.title}>
            {props.title &&
                <h2>{props.title}</h2>
            }
            {props.children}
        </div>
    )
}

export default Section;
