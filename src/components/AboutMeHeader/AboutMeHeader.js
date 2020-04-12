import React from 'react'
import './AboutMeHeader.css'
import HeaderList from '../HeaderList/HeaderList'
class AboutMeHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
            ulClass: 'wait'
        }
    }

    handleHover = () => {
        this.setState({ hovered: true })
        setTimeout(() => {
            this.setState({ ulClass: 'about-me-header-ul' })
        }, 700)
    }
    handleHoverLeave = () => {
        this.setState({ hovered: false })
        setTimeout(() => {
            this.setState({ ulClass: 'wait' })
        }, 700)
    }

    render() {
        return (
            <nav className={this.state.hovered ? "about-me-header-active" : "about-me-header"}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverLeave} >
               
                    <HeaderList className={this.state.ulClass  === 'wait' ? 'wait' : 'about-me-header-ul'} divHovered={this.props.divHovered}
                        divs={this.props.divs}
                        hovered={this.state.hovered}
                    />
                {this.state.hovered ? null :
                    <div className="arrow-div">
                        <i className="fas fa-arrow-alt-circle-right"></i>
                    </div>}
            </nav>
        )
    }
}

export default AboutMeHeader;