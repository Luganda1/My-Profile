import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons'
import {Link} from 'react-router-dom'
import {Data} from './Data';
import marc from  '../image/tonny.jpg'

export default function SideBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link> 
            </div>
            <nav className={sidebar ? 'nav-menu active' :' nav-menu' }>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose /> 
                        </Link>
                    </li>
                    <img src={marc} alt="tonny" className="card-img"></img>
                    {
                        Data.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                <div className="social-icons">
                    <a href="https://www.instagram.com/t.lugan/" className="insta"><AiIcons.AiOutlineInstagram/></a>
                    <a href="https://www.linkedin.com/in/tonny-luganda-7087b451/" className="linked"><AiIcons.AiFillLinkedin/></a>
                    <a href="https://www.facebook.com/tluganda" className="facebook"><AiIcons.AiFillFacebook/></a>
                    <a href="https://www.reddit.com/tonnytonny1" className="reddit"><AiIcons.AiFillRedditCircle/></a>
                    <a href="https://github.com/Luganda1" className="github"><AiIcons.AiOutlineGithub/></a>
                </div>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}
