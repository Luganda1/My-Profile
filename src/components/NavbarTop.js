import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons'
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
    width: "100%",
    left: 0,
    bottom: 0,
    fontSize: '30px',
    colors: "#042a2bff",
    },
    });

    export default function NavbarTop() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
        showLabels
        // className={classes.root}
        className='footers'
    >
        <BottomNavigationAction  href="#" icon={<AiIcons.AiOutlineInstagram/>} />
        <BottomNavigationAction  href="#" icon={<AiIcons.AiFillLinkedin/>} />
        <BottomNavigationAction  href="#" icon={<AiIcons.AiFillFacebook/>} />
        <BottomNavigationAction  href="#" icon={<AiIcons.AiFillRedditCircle/>} />
        <BottomNavigationAction  href="#" icon={<AiIcons.AiOutlineGithub/>} />

    </BottomNavigation>
    );
    }


    /**
label="instagram"
label="linked"
label="facebook"
label="reddit"
label="github"
     */