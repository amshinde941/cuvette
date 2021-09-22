import React from 'react';
import '../styles/App.css';
import GreetingLottie from '../Components/DisplayLottie';
const Home = () => {
    return (
        <div className="container">
            <div>
                <div id="landing" className="LandingSection_landingSection">
                    <div className="LandingSection_landingInfo">
                        <h1 className="LandingSection_head">Connecting skilled <br /><span
                            className="LandingSection_head LandingSection_span1">Software
                            Interns<br /></span>with industry leading<br /><span
                                className="LandingSection_head LandingSection_span2">Start Ups</span></h1>
                        <div className="LandingSection_buttonWrapper">
                            <div className="LandingSection_landingButtonCompany companyButtonHover" >Post Internships
                            </div>
                            <div className="LandingSection_landingButtonStudent">Apply for Internships</div>
                        </div>
                    </div>
                    <div className="LandingSection_landingGraphic">
                        <div >
                            <GreetingLottie />
                        </div>
                    </div>
                </div>
                <div className="TrustBrands_trustWrapper">
                    <div className="TrustBrands_divider"></div>
                    <div className="TrustBrands_trustSection">
                        <div className="TrustBrands_trustHeader">Trusted by <br /> 150+ Brands</div>
                        <div className="TrustBrands_marquee">
                            <div className="TrustBrands_gradientStart"></div>
                            <div className="TrustBrands_gradientEnd"></div><span>
                                <div className="TrustBrands_trustLogos TrustBrands_marqueeAnimate1">
                                    <div className="TrustBrands_logos">
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                        <div className="TrustBrands_trustLogo">
                                            <p>Company</p>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="TrustBrands_divider"></div>
                </div>
                <div className="Footer_footerWrapper">
                    <div className="Footer_footer">
                        <div className="Footer_footerLogo">
                            <div className="Footer_logo">
                                <p className="Footer_cuvetteLogo"> Cuvette</p>
                            </div>
                        </div>
                        <div className="Footer_location">
                            <div className="Footer_address"><a href="mailto:cuvette@gmail.com" className="Footer_email">Gmail </a> ||
                                Indiranagar, Bangalore</div>
                            <div className="Footer_copyright">Copyright 2021 Cuvette Tech - All rights reserved</div>
                        </div>
                        <div className="Footer_footerIcons">
                            <a target="_blank" rel="noreferrer" className="Footer_footerIcon" href="https://www.linkedin.com">L</a>
                            <a target="_blank" rel="noreferrer" className="Footer_footerIcon" href="https://www.instagram.com">i</a>
                            <a target="_blank" rel="noreferrer" className="Footer_footerIcon" href="https://www.youtube.com">Y</a>
                            <a target="_blank" rel="noreferrer" className="Footer_footerIcon" href="https://www.facebook.com/cuvette.tech/">F</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;