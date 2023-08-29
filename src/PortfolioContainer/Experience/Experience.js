import React from 'react'
import "./Experience.css";
import { experience_work } from "../../portfolio.js";
import Experience from "../../assets/Home/office_work.svg"
import about from '../../assets/Home/about2.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = (props) => {

    return (
        <div>

            <div className='container bg mb-5 '>

                <div className='About description'>
                <h2 style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"  , textAlign: "center"}}>ABOUT ME</h2>
                    
                    <div className='main_picture box pt-3'>
                        <img className='box_img' alt='about' src={about} style={{ width: '350px', height: '350px', borderRadius: '100%'  }}  />
                    </div>

                    

                        <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '15px' }}>Hey there! I'm Vaishnavi Shahakar </h2>
                        I'm a passionate and dedicated web developer with a strong foundation in HTML, CSS, and JavaScript. While I may be at a beginner level, my enthusiasm for crafting interactive and visually appealing websites knows no bounds. Allow me to share a bit about myself and my journey in the world of web development.
                        <br />  <br />
                        <h3 style={{ color: 'black', fontWeight: 'w700'}}>My Journey: </h3>
                        I embarked on my web development journey with a curiosity-driven mindset and a desire to bring ideas to life on the digital canvas. Armed with a solid understanding of HTML, CSS, and JavaScript, I've taken the initial steps towards creating user-friendly and engaging websites. Each project I undertake is a new opportunity to learn and improve, and I'm excited to showcase my progress through my portfolio.
                        <br />  <br />
                        <h3 style={{ color: 'black', fontWeight: 'w700'}}>Skills:</h3>
                  
                        <span style={{ color: 'grey', fontWeight: 'w700', fontSize: '18px'}}>- HTML:</span> I'm proficient in structuring web content using HTML, ensuring that every element is appropriately placed and semantically meaningful. Clean and organized code is at the heart of my approach.
                        <br />
                        <span style={{ color: 'grey', fontWeight: 'w700', fontSize: '18px'}}>- CSS:</span> My styling skills involve turning web pages into captivating experiences. I understand the importance of responsive design and CSS frameworks to create websites that look great on various devices.
                        <br />
                        <span style={{ color: 'grey', fontWeight: 'w700', fontSize: '18px'}}>- JavaScript:</span> With JavaScript, I add interactivity and dynamism to my projects. While I'm still exploring its capabilities, I can implement basic functions and features to enhance user engagement.
                        <br />
                        <span style={{ color: 'grey', fontWeight: 'w700', fontSize: '18px'}}>- Node.js (Basic): </span> I've delved into the world of backend development using Node.js. While my proficiency is at a basic level, I'm excited about the possibilities it offers to create more dynamic and feature-rich web applications.
                        <br />  <br />
                        <h3 style={{ color: 'black', fontWeight: 'w700'}}>Approach:</h3>
                        I believe that every line of code is an opportunity to create something exceptional. Even as a beginner, I take a meticulous approach to coding, focusing on readability, efficiency, and maintainability. My projects reflect my dedication to continuous learning and improvement. Each challenge I encounter is a stepping stone to honing my skills and expanding my capabilities.
                        <br />  <br />
                        <h3 style={{ color: 'black', fontWeight: 'w700'}}>Future Goals:</h3>
                        As I progress on my web development journey, I'm eager to deepen my knowledge in JavaScript and explore more advanced concepts. I'm also dedicated to improving my backend skills to create full-stack applications that offer a seamless user experience. With every project, I'm one step closer to achieving my goals and making a positive impact in the digital realm.
                        <br />  <br />
                        Thank you for visiting my portfolio website and taking the time to learn about me. Feel free to explore my projects and witness firsthand how I'm translating my passion for web development into tangible results. If you have any questions or collaboration opportunities, please don't hesitate to get in touch. Let's build the web together!
                        <br />  <br /> <br />
                 
                </div>


                <div className='row row1 justify-content-between' style={{ textAlign: 'center', }} >
                    <div className='col-12 col-sm-6 col-md-6 mb-2' >
                        <div data-aos="fade-left" data-aos-duration="2000">
                            <div className='picture'>
                                <img src={Experience} alt='experience' style={{ width: '100%', height: '100%', }} />
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-6 mt-5' style={{ justifyContent: 'center', }} >
                        <div data-aos="fade-right" data-aos-duration="3000" style={{ alignItems: 'center', }}>

                            <p className='primary-text ' style={{ fontSize: '40px' }}>Work </p>

                            <div className="cert-card1">
                                <div className="content">
                                    <a href={experience_work.website_link}
                                        target="_blank"
                                        rel="noopener noreferrer" >
                                        <div className="content-overlay"></div>
                                        <div
                                            className="cert-header"
                                            style={{ backgroundColor: experience_work.color_code }}>
                                            <img
                                                className="logo_img"
                                                src={require(`../../assets/Home/${experience_work.logo_path}`)}

                                                alt={experience_work.alt_name}
                                            />
                                        </div>
                                        <div className="content-details fadeIn-top">

                                            <h3 className="content-title" >
                                                WEBSITE
                                            </h3>
                                        </div>
                                    </a>
                                </div>

                                <div className="cert-body">
                                    <h2 className="cert-body-title" >
                                        {experience_work.title}
                                    </h2>
                                    <h3 className="cert-body-subtitle">
                                        {experience_work.subtitle}
                                    </h3>
                                    <h3 className="cert-body-subtitle">
                                        {experience_work.company}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Certifications */}
            <div className='container mb-5'>

            </div>
        </div>

    );
}


export default About
