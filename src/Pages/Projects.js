import React from 'react'
import { Parallax } from 'react-parallax'
import bg from '../image/cover.jpeg'
import cover from '../image/cover1.jpg'
import GridLayout from 'react-grid-layout'


const image1 = 'https://image.shutterstock.com/z/stock-photo-glitter-vintage-lights-background-gold-silver-blue-and-black-de-focused-226746934.jpg'
const inlineStyle = {
    // background : '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#042a2bff',
    padding: '15px',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
}

export default function Projects() {

        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
    return (
        <>
            <Parallax 
                bgImage={cover} 
                strength={500}
                // strength={-500}
                // blur={{ min: -1, max: 5 }
                renderLayer={
                    percentage => (
                        <div
                        style={{
                        position: 'absolute',
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        background: `rgba(200, 255, 0, ${percentage * .5})`,
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) scale(${percentage * 5})`,
                        transition: '0.3 linear',
                        }}
                        ></div>
                    )
                }
                >
                <div style={{height: '400px'}}>
                    <div style={inlineStyle} className='welcome'>Welcome</div>                  
                </div>
            </Parallax>
            <div style={{margin: '20px'}}><h1>|  |  |</h1></div>
            {/* <div style={{height:'100vh'}}></div> */}
            <div className="project">
                <div className="grid-container">
                    <div className="grid item1">1</div>
                    <div className="grid item2">2</div>
                    <div className="grid item3">3</div>
                    <div className="grid item4">4</div>
                    <div className="grid item5">5</div>
                    <div className="grid item6">6</div>
                    <div className="grid item7">7</div>
                    <div className="grid item8">8</div>
                    <div className="grid item9">9</div>
                </div>
            </div>
        </>
    )
}