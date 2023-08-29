import React from 'react'
import './Navbar.css'
import { Fade } from "react-reveal";
import { details } from "../../portfolio.js";
import { NavLink } from 'react-router-dom';
import SeoHeader from '../seoHeader/SeoHeader'
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const Navbar = (props) => {

    return (
        <div>
        <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
        <Fade top duration={2000} distance="20px">
            <SeoHeader/>
            <div>
                <header className="header">
                    <div className="logo">

                        <span className="title">
                            {details.title}
                        </span>
                    </div>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu" style={{ backgroundColor: props.theme.body, color: props.theme.text }}>
                        <li>
                        <NavLink to='/' 
                        style={{color:props.theme.text}}
                        className="mr-2"
                        >Home</NavLink>
                        </li>
                        <li><NavLink to='/education' 
                        style={{ color: props.theme.text }} 
                        className="mr-2"
                        >Education</NavLink>
                        </li>
                        <li><NavLink to='/about' 
                        style={{ color: props.theme.text }} 
                        className="mr-2"
                        >About</NavLink>
                        </li>
                        <li><NavLink to='/Contact' 
                        style={{ color: props.theme.text }}
                        className="mr-2"
                        >Contact</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </Fade>
        </div>
    )
}

export default Navbar
