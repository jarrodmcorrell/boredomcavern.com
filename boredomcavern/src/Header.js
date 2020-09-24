import React from 'react';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'; //Games Icon
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'; //Inspiration Icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EcoIcon from '@material-ui/icons/Eco';
import StoreIcon from '@material-ui/icons/Store';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Header() {
    return (
        <div className="banner">
            <div className="left">
                <div className="hamburger"><FontAwesomeIcon icon={faBars}/></div>
                <h4 className="logo">BOREDOM CAVERN</h4>
            </div>
            <div class="categories">
                <div className="category lefty"><SportsEsportsIcon fontSize="large"/><span>Games</span></div>
                <div className="category"><EmojiObjectsIcon fontSize="large"/><span>Inspiration</span></div>
                <div className="category"><FontAwesomeIcon icon={faNewspaper} className="news"/><span>News</span></div>
                <div className="category"><FastfoodIcon fontSize="large"/><span>Food</span></div>
                <div className="category"><EcoIcon fontSize="large"/><span>Seasonal</span></div>
                <div className="category righty"><StoreIcon fontSize="large"/><span>Shop</span></div>
            </div>
            <div className="profile">
                <Link to="/register" className="profile"><FontAwesomeIcon className="profileIcon" icon={faUser}/></Link>
            </div>
        </div>
    )

}
export default Header; 
