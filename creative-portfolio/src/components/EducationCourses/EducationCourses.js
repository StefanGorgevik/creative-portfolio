import React from 'react'
import './EducationCourses.css'
import '../shared.css'

function EducationCourses(props) {
    return (
        <div className="education-courses-main-div">
            <h1 className="about-me-divs-title">Education & Courses</h1>
            <div className="education-courses-div">
                <div className="education-div">
                    <h1>Education</h1>
                        <h3>Semos Education, Skopje, North Macedonia</h3>
                        <p>March 2019 - February 2020</p>
                        <h4>
                            I have worked and understood the connection between the front-end and the back-end when it comes to developing
                            a web application, including the architectural pattern MVC. I have a good understanding of the communication
                            between the handlers of the back-end and the UI in the front end. During the whole year, I have learned
                            Javascript, DOM,ReactJS, NodeJS and MongoDB, altogether with multiple libraries.
                        </h4>
                        <a href="https://stark-island-29614.herokuapp.com" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="visit-btn">Visit the project</button></a>
                </div>
                <div className="courses-div">
                    <h1>Courses</h1>
                    <p className="courses-p">Before joining Semos Education, I had previous experience by following several courses on Udemy, including:</p>
                    <ul className="courses-ul">
                        <li><i className="fas fa-circle-notch"></i>Udemy - Web Developer Bootcamp by Colt Steele</li>
                        <li><i className="fas fa-circle-notch"></i>Udemy - React - The Complete Guide by Maximilian Schwarzmüller</li>
                        <li><i className="fas fa-circle-notch"></i>Udemy - NodeJS - The Complete Guide by Maximilian Schwarzmüller</li>
                        <li><i className="fas fa-circle-notch"></i>Udemy - The Complete JavaScript Course by Jonas Schmedtmann</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EducationCourses;