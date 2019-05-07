import React from 'react';
import HomepageSection from '../../components/HomepageSection/HomepageSection'
import "./Homepage.css"

const Homepage = () => {
    return(
        <div className = "homepage">
            <HomepageSection sectionName="What is Councelling?" id="section1"/>
            <HomepageSection sectionName="About Me" id="section2"/>
            <HomepageSection sectionName="Services" id="section3"/>
            <HomepageSection sectionName="Book an Appointment" id="section4"/>
        </div>
    )
}

export default Homepage;