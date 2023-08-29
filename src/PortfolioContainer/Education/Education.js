import React from 'react'

import "./Education.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import education from "../../assets/Home/education.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = (props) => {
    return (
        <div>

            <div className='container bg mb-5 '>
                <div className='row row1 justify-content-between' style={{ textAlign: 'center', }} >
                    <div className='col-12 col-sm-6 col-md-6 mt-5' >

                        <div data-aos="fade-right" data-aos-duration="3000" style={{ alignItems: 'center', }}>
                            
                             {/* Education */}
                            <div className="Education">
                                <main className="row">
                                    <section className="col">

                                        <header className="title">
                                            <h2>EDUCATION</h2>
                                        </header>

                                        <div className="ed_contents">

                                            <div className="box">
                                                <h4>2017 - 2020</h4>
                                                <h3>Bachelor's in Textile Science</h3>
                                                <p>Nikalas Mahila Mahavidyalaya</p>
                                            </div>

                                            <div className="box">
                                                <h4>2020 - 2022</h4>
                                                <h3>Master's in Textile & Clothing</h3>
                                                <p>Yeshwant Mahavidyalaya</p>
                                            </div>

                                        </div>
                                    </section>
                                </main>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-6 mb-2' style={{ textAlign: 'center' }}>
                        <div data-aos="fade-left" data-aos-duration="2000">
                            <div className='picture'>
                                <img src={education} alt='Education' style={{ width: '100%', height: '100%', }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Degrees */}
            {/* <div className='container mb-5'>
                <div className="main" id="educations">
                    <div className="educations-header-div">
                        <Fade bottom duration={2000} distance="20px">
                            <h1 className="educations-header" >
                                Degrees Received
                            </h1>
                        </Fade>
                    </div>
                    <div className="educations-body-div" style={{ textAlign: 'center' }}>
                        jjiifi
                    </div>
                </div>
            </div> */}
            {/* Certifications */}
            <div className='container mb-5'>
                <div >
                    <div className="educations-header-div mb-5">
                        <Fade bottom duration={2000} distance="20px">
                            <h1 className="educations-header" >
                                Certifications
                            </h1>
                        </Fade>
                    </div>
                </div>
                <div className='container'>
                    <div className='row' style={{ textAlign: 'center' }}>
                        {/* SAMPURV */}

                        <div className='col-12 col-sm-6 col-md-6'>
                            <div data-aos="zoom-in">
                                <div className="cert-card">
                                    <div className="content">
                                        <a href={certifications.certificate_link}
                                            target="_blank"
                                            rel="noopener noreferrer" >
                                            <div className="content-overlay"></div>
                                            <div
                                                className="cert-header"
                                                style={{ backgroundColor: certifications.color_code }}>
                                                <img
                                                    className="logo_imgs"
                                                    src={require(`../../assets/Home/${certifications.logo_path}`)}
                                                    alt={certifications.alt_name}
                                                />
                                            </div>
                                            <div className="content-details fadeIn-top">
                                                <h3 className="content-title" >
                                                    certificate
                                                </h3>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="cert-body">
                                        <h2 className="cert-body-title" >
                                            {certifications.title}
                                        </h2>
                                        <h3 className="cert-body-subtitle">
                                            {certifications.subtitle}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MOTIFO */}

                        <div className='col-12 col-sm-6 col-md-6'>
                            <div data-aos="zoom-in">
                                <div className="cert-card">
                                    <div className="content">
                                        <a href={certifications.certificate_link2}
                                            target="_blank"
                                            rel="noopener noreferrer" >
                                            <div className="content-overlay"></div>
                                            <div
                                                className="cert-header"
                                                style={{ backgroundColor: certifications.color_code2 }}>
                                                <img
                                                    className="logo_imgs"
                                                    src={require(`../../assets/Home/${certifications.logo_path2}`)}

                                                    alt={certifications.alt_name2}
                                                />
                                            </div>
                                            <div className="content-details fadeIn-top">

                                                <h3 className="content-title" >
                                                    certificate
                                                </h3>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="cert-body main">
                                        <h2 className="cert-body-title" >
                                            {certifications.title2}
                                        </h2>
                                        <h3 className="cert-body-subtitle">
                                            {certifications.subtitle2}
                                        </h3>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}


export default About
