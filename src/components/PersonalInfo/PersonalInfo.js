import React from 'react'
import './PersonalInfo.css'
import '../shared.css'

function PersonalInfo(props) {
    const keys = ["Name", "Professional Headline", "Email", "Phone Number", "Location", "Age", "Resume", "GitHub", "LinkedIn"]
    const values = ["Stefan Gorgevik", "Full stack web developer",
        "stefangorgevik@hotmail.com", "079-231-692", "Skopje, Macedonia", 25,
        'https://drive.google.com/open?id=1HWOa6Lxk1egH4lndr3b4vPnnJhV0_y-h',
        "https://github.com/StefanGorgevik",
        "https://www.linkedin.com/in/stefan-gorgevik-88058918b/"]
    const infoDivs = keys.map((key, i) => {
        return (
            <div key={key + i} className="info-div">
                <p className="key">{key}</p>
                <p className="value">{values[i] === 'https://github.com/StefanGorgevik' ||
                    values[i] === 'https://www.linkedin.com/in/stefan-gorgevik-88058918b/' ||
                    values[i] === 'https://drive.google.com/open?id=1HWOa6Lxk1egH4lndr3b4vPnnJhV0_y-h' ?
                    <a href={values[i]}
                        target="_blank"
                        rel="noopener noreferrer">
                        {keys[i]}</a>
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