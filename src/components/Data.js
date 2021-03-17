import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as GrIcons from "react-icons/gr";

export const Data = [
    {
        title: "About",
        path: '/',
        icon: <CgIcons.CgDetailsMore/>,
        className: 'nav-text'
    },
    {
        title: "PortiFolio",
        path: '/projects',
        icon: <FaIcons.FaBoxes/>,
        className: 'nav-text'
    },
    {
        title: "Resume",
        path: '/resume',
        icon: <MdIcons.MdLibraryBooks/>,
        className: 'nav-text'
    },
    // {
    //     title: "Blog",
    //     path: '/blog',
    //     icon: <FaIcons.FaBlogger/>,
    //     className: 'nav-text'
    // },

]