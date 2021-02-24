import { Height } from '@material-ui/icons'
import React from 'react'

export default function Resume() {
    return (
        <div className="resume">
            <iframe src="/Resume.pdf" 
            title="Resume"
            width="100%"
            height="100%"
            // color='hsla(203, 30%, 26%, 1)'
            scrolling="no"
            >
        Presss me: <a href="/Resume.pdf" >Download PDF</a>
</iframe>
        </div>
    )
}
//https://drive.google.com/file/d/1adRYF2QtvC600ay6NKgbyvDCn0LsgYne/view?usp=sharing