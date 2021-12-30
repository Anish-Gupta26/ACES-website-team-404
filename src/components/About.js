import React from 'react'
import image1 from '../assets/logo2.png'
import image2 from '../assets/logo3.png'
function About() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                            <h1>About Us</h1>
                            <h2>Vision and Mission</h2>
                            <p>ACES Nirma University aims to make students technically stronger by organising various workshops and seminars on the latest technologies. The organisation also contributes to the betterment of society by organising socially relevant technical activities.</p>
                            <div className="text-center text-lg-start">
                                <button type="button" className="btn btn-outline-primary">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src={image1} className="img-fluid" alt=""/>  
                    </div>
                    <div className="col-lg-3 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src={image2} className="img-fluid" alt=""/>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About
