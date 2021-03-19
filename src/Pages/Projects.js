import React, {useState, useEffect}from 'react'
import { Parallax } from 'react-parallax'
import cover from '../image/city1.jpg'
import items from '../components/LocalData'
import ProjectLayout from '../components/ProjectLayout'
import Loading from '../components/Loading'

const url = 'https://course-api.com/react-tours-project'

const inlineStyle = {
    // background : '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#042a2bff',
    // color: '#fff',
    padding: '15px',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
}

export default function Projects() {

    //destructuring data for our local api
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    
        const fetchProjects = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            // const response = await fetch(items)
            const project= await response.json()
            setLoading(false)
            setProjects(project)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        }
        useEffect(() => {
        fetchProjects()
        }, [])
        if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
        }
        else {
        return (
            <>
            <div className="wrapper">
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
                            width: '70px',
                            height: '20px',
                            // borderRadius: '50%',
                            // background: `rgba(200, 255, 0, ${percentage * .3})`,
                            background: `rgba(255, 255, 255, ${percentage * .9})`,
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
                        <div style={inlineStyle} className='welcome'>My Projects</div>                  
                    </div>
                </Parallax>

                <section className="section">
                <div className='cocktails-center'>
                    {items.map(item => {
                    return <ProjectLayout key={item.id} {...item} />
                    })}
                </div>
                </section>
                </div>
            </>

        )
                }
}

