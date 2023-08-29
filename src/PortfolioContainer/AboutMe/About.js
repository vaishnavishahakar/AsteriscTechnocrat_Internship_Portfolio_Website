import React from 'react'
import Typical from 'react-typical';
import SoftwareSkill from "../softwareSkills/SoftwareSkill";
import "./About.css";
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { details, skills } from "../../portfolio.js";
import codeing from "../../assets/Home/developers.webp"
import web from "../../assets/Home/web-development-3391183-2822001.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = (props) => {
    const theme = props.theme;
    return (
        <div>
            <div className='container bg mb-5' style={{paddingLeft: '10px' , paddingRight:'10px' }}>
                <div className='row row1 justify-content-between mt-5'>
                    <Fade right duration={1000} distance="20px">
                        <div className='col-12 col-sm-6 col-md-6 mb-2' style={{ paddingRight: '0px', textAlign: 'center' }}>
                            <div className='picture'>
                                <img src={codeing} alt='home' style={{ width: '100%', height: '100%', }} />
                            </div>
                        </div>
                    </Fade>
                    <div className='col-12 col-sm-6 col-md-6 mt-5'>
                        <Fade left duration={1000} distance="20px">
                            <Fade left duration={1500} distance="20px">
                                <span className='primary-text mb-3' style={{ fontSize: '40px' }}>
                                    {" "}
                                    Hello <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" alt='gif' width="38px" />
                                    I'M <span className='hello'>{details.firstname}</span>
                                </span>
                            </Fade>
                            <Fade left duration={2000} distance="20px">
                                <h2 className=' desc mb-5'>
                                    {" "}
                                    <Typical
                                        steps={
                                            [
                                                'Web Developer  ', 500,
                                                'Front-End Developer  ', 500,
                                            ]}
                                        loop={Infinity}
                                        wrapper="p"
                                    ></Typical>
                                </h2>
                            </Fade>
                            <Fade left duration={2500} distance="20px">
                                <h4 className='skill' style={{ textAlign: 'left', fontSize: '25px' }}>{details.description}</h4>
                            </Fade>
                            <Fade left duration={3000} distance="20px">
                                <SocialMedia theme={theme} />
                                <div className='profile-options'>

                                    <a href='CV_Vaishnavi.pdf' download='Vaishnavi Shahakar.pdf'>
                                        <button className='btn highlighted-btn'>Get Resume</button>
                                    </a>
                                </div>
                            </Fade>

                        </Fade>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                    <h1 className="skills-header" >
                        What I Do?
                    </h1>
                    <h5 className='second_title'>AN AMBITIOUS WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h5>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="3000">
                    <SoftwareSkill logos={skills.techstack} />
                </div>

            </div>
        
            {/* Full Stack  */}
            <div className='container'>
                <div className='row row1 justify-content-between mt-5'>
                    <div className='col-12 col-sm-6 col-md-6 mb-2 ' style={{ textAlign: 'center', }} >
                        <div data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">
                            <span className='primary-text mb-5' style={{ fontSize: '40px', alignItems: 'center' }}>
                                {skills.skill2}
                            </span>
                            <SoftwareSkill logos={skills.softwareSkills2} />
                            <p className='skill' style={{ textAlign: 'left' }}>{skills.skill2_desc}<br />{skills.skill22_desc}<br />{skills.skill23_desc}</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6'>

                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                            className='picture '>
                            <img src={web} alt='web' style={{ width: '100%', height: '100%', }} />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default About
