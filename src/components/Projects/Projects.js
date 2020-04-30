import React from 'react'
import './Projects.css'
import Project from './Project/Project'

function Projects(props) {
    return (
        <div className="projects-main-div">
            <h1 className="about-me-divs-title">Projects</h1>
            <div className="projects-div">
                <Project name="Budget Architect"
                    info="Full-stack developed project, made with NodeJS and ReactJS. 
                    I used MongoDB as a database and mongoose for creating the model.  
                    For style, I used plain CSS, and for deployment, I used Heroku."
                    url="https://budgetarchitect.herokuapp.com/" />
                <Project name="BodyBuildingMedia"
                    info="The first version of a bodybuilding social media, which is a full-stack developed project, 
                    created with ReactJS, Node.js, and MongoDB. It is a responsive website and for UI, I used plain HTML and CSS. 
                    Photo upload mode was created with the help of Cloudinary and the project is deployed on Heroku."
                    url="https://bodybuildingmedia.herokuapp.com" />
                <Project name="Expense Calculator"
                    info="Full-stack developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and
                            CSS. It is a calculator where you can keep track of your expenses and bought items. It was given as an ending project
                            by Semos Education."
                    url="https://stark-island-29614.herokuapp.com" />

                <Project name="Rick n' Morty"
                    info="Front-end developed project, created with ReactJS, using React Hooks. For the UI, I used plain HTML and
                            CSS. It is a small front-end project where I used an API and made a responsive web page."
                    url="https://stefangorgevik.github.io/ricknmorty/" />
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