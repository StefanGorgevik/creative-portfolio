import React from 'react'
import './Courses.css'

export default function Courses() {
    var coursesTitles = ['Udemy - Web Developer Bootcamp by Colt Steele','Udemy - React - The Complete Guide by Maximilian Schwarzmüller',
    'Udemy - NodeJS - The Complete Guide by Maximilian Schwarzmüller', 'Udemy - The Complete JavaScript Course by Jonas Schmedtmann']
    var courses = coursesTitles.map((course, i) => {
        return (
            <li key={course + i}><i className="fas fa-circle-notch"></i>{course}</li>
        )
    })
    return (
        <div className="courses-div">
                    <h1>Courses</h1>
                    <p className="courses-p">Before joining Semos Education, I had previous experience by following several courses on Udemy, including:</p>
                    <ul className="courses-ul">
                        {courses}
                    </ul>
                </div>
    )
}
