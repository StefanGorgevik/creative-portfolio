import React from 'react'
import './PersonalInfo.css'
import '../shared.css'


function PersonalInfo(props) {
    const keys = ["Name", "Professional Headline", "Email", "Phone Number", "Location", "Age",]
    const values = ["Stefan Gorgevik", "Full stack web developer", "stefangorgevik@hotmail.com", "079-231-692", "Skopje, Macedonia", 25]
    const infoDivs = keys.map((key, i) => {
        return (
            <div key={key + i} className="info-div">
                <p className="key">{key}</p>
                <p className="value">{values[i]}</p>
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