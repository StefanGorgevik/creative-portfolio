import React from 'react'
import './Projects.css'
import Project from './Project/Project'

function Projects(props) {
    return (
        <div className="projects-main-div">
            <h1 className="about-me-divs-title">Projects</h1>
            <div className="projects-div">
                <Project name="Expense Calculator"
                    info="Full-stack developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and
                            CSS. It is a calculator where you can keep track of your expenses and bought items. It was given as an ending project
                            by Semos Education. I also included a user info page and the option to add another user and merge both of your products."
                    url="https://stark-island-29614.herokuapp.com" />
                <Project name="BodyBuildingMedia - Version 1"
                    info="Full-stack developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and
                            CSS. It is a type of social media where you can keep track of diet and workout plan, and you can see other users' 
                            diets, workout plans and personal info. Updated version is coming up."
                    url="https://bodybuildingmedia.herokuapp.com" 
                    extra="!Upload photo is still not available. I am currently working on it! "/>
                <Project name="Movie Database"
                    info="Front-end developed project, created with ReactJS. For the UI, I used plain HTML and
                            CSS. It is a small front-end project where I used a prepared API, but the information was limited, 
                            so I worked with what I had."
                    url="https://stefangorgevik.github.io/movies/" />
            </div>
        </div>
    )
}

export default Projects;