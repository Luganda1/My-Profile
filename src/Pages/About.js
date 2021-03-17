


import React from 'react';
// import TextAnimator from "../components/TextAnimator"
import 'materialize-css';
import Button from "../components/Button"
import {Link} from 'react-router-dom'
import { AiOutlineArrowDown } from "react-icons/ai";
import NavbarTop from "../components/NavbarTop"

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    _onMouseMove = (e) => {
        const width = this.refs.titleContainer.clientWidth;
        const height = this.refs.titleContainer.clientHeight;
        const oX = (e.nativeEvent.offsetX/width) * 100;
        const oY = (e.nativeEvent.offsetY/height) * 100;
        // console.log(Math.floor(oX), Math.floor(oY));
        this.setState({
            x: oX,
            y: oY
        });
    }

    _onMouseOut = () => {
        this.setState({
            x: 0,
            y: 0
        });
    }

    render() {
        
        const {x, y} = this.state;
        const maskStyle = {
            '--maskX': x,
            '--maskY': y
        }
        return (
            <>
            <div className="bio" >
            <div className="bio-container">
            <div className="titleContainer"
                onMouseMove={this._onMouseMove}
                onMouseOut={this._onMouseOut}
                ref="titleContainer"
                style={maskStyle}
            >               
                
                    <div className="titleWrapper">
                        <h2>Hi! I'm Tonny Luganda, a self taught full-stack developer, passionate about building excellent UX/UI
                    React application that transforms the lives of those around me. </h2>
                    </div>
                    <div className="cloneWrapper">
                    <h2>Hi! I'm Tonny Luganda, a self taught full-stack developer, passionate about building excellent UX/UI
                    React application that transforms the lives of those around me. </h2>
                    </div>
                </div>

                <div className="about">
                <div class="arrow">
                    <AiOutlineArrowDown/>
                </div>
                    {/*  I use a creative 
                    approach to problem solve, always energetic and eager to learn new skills. */}
                </div>
                <Link to="/projects" className="check-projects">
                    <Button label="CLICK ME!"></Button>
                </Link>
            </div>
            </div>
            <div className="footerbtm">
                <NavbarTop/>
            </div>
        </>
        )
    }
}

   
export default About;