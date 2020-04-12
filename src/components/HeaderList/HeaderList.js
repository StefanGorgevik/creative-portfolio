import React from 'react'
import './HeaderList.css'

export default function HeaderList(props) {

    if (props.className !== "wait") {
        var lis = props.divs.map((div, i) => {
            return (
                <li className="about-me-header-ul-li"
                    key={i}
                    onMouseEnter={() => props.divHovered(div)}>
                    {div}
                </li>
            )
        })
    }

    return (
        <ul className={props.hovered ? "about-me-header-ul-active" : props.className}>
            {props.className !== ' wait' ? lis : null}
        </ul>
    )
}
