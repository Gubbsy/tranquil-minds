import React from 'react';
import './HomepageSection.css'

const homepageSection = (props) => {
    return(
    <React.Fragment>
        <div className = "section" id={props.id}>
            <p>This is a {props.sectionName}</p>
        </div>
    </React.Fragment>
    )
}

export default homepageSection;