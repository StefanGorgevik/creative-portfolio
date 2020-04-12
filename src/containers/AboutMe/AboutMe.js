import React from 'react'
import './AboutMe.css'
import AboutMeHeader from '../../components/AboutMeHeader/AboutMeHeader'
import EducationCourses from '../../components/EducationCourses/EducationCourses'
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo'
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills'
import Projects from '../../components/Projects/Projects'

class AboutMe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            divs: ["Personal Info", "Education & Courses", "Technical Skills", "Projects"],
            hoveredDiv: 'Personal Info'
        }
    }

    divHovered = (div) => {
        this.setState({
            hoveredDiv: div
        })
        console.log(this.state.hoveredDiv)
    }

    renderSwitch() {
        switch (this.state.hoveredDiv) {
            case 'Personal Info':
                return <PersonalInfo/>;
            case 'Education & Courses':
                return <EducationCourses/>;
            case 'Technical Skills':
                return <TechnicalSkills/>;
            case 'Projects':
                return <Projects/>;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="about-me-main-div">
                <AboutMeHeader
                    divs={this.state.divs}
                    hoveredDiv={this.state.hoveredDiv}
                    divHovered={this.divHovered} />
                <div className="about-me-div">
                    {this.renderSwitch()}
                </div>
            </div>
        )
    }
}

export default AboutMe;