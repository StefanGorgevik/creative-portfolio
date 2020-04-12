import React from 'react'
import './PersonalInfo.css'
import '../shared.css'


function PersonalInfo(props) {
    const keys = ["Name", "Professional Headline", "Email", "GitHub", "Phone Number", "Location", "Age",]
    const values = ["Stefan Gorgevik", "Full stack web developer", "stefangorgevik@hotmail.com", "https://github.com/StefanGorgevik", "079-231-692", "Skopje, Macedonia", 25]
    const infoDivs = keys.map((key, i) => {
        return (
            <div key={key + i} className="info-div">
                <p className="key">{key}</p>
                <p className="value">{values[i] === 'https://github.com/StefanGorgevik' ?
                    <a href="https://github.com/StefanGorgevik"
                        target="_blank"
                        rel="noopener noreferrer">
                        {values[i]}</a>
                    : values[i]}</p>
            </div>
        )
    })
    return (
        <div className="personal-main-info-div">
            <h1 className="about-me-divs-title">Personal Info</h1>
            {infoDivs}
        </div>
    )
}

export default PersonalInfo;