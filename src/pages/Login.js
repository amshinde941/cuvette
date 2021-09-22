import React, { Component } from "react";
import '../styles/login.css';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {showEmailLogin: true};
        // This binding is necessary to make `this` work in the callback
        this.handleClicklogin = this.handleClicklogin.bind(this);
      }
    
      handleClicklogin() {
        this.setState(prevState => ({
          showEmailLogin: !prevState.showEmailLogin
        }));
      }


    render(){
    return (
        <div className="container">
            <div className="Separator_separatortop"></div>
            <div className="LoginPage_loginPage">
                <div className="LoginPage_left">
                    <div className="InternshipInfo_internshipInfo">
                        <div className="InternshipInfo_internshipInfoTop">
                            <div className="InternshipInfo_internshipHeading">
                                Find your dream job!
                            </div>
                            <p className="InternshipInfo_smallText">
                                Trusted by 6500+ students
                            </p>
                            <div className="InternshipInfo_internshipCompany">
                                <div style={{ display: "inline-flex" }}>
                                    <p className="InternshipInfo_internshipCompany_logo">company</p>
                                    <p className="InternshipInfo_internshipCompany_logo">company</p>
                                    <p className="InternshipInfo_internshipCompany_logo">company</p>
                                </div>
                                <div style={{ display: "inline-flex" }}>
                                    <p className="InternshipInfo_internshipCompany_logo">company</p>
                                    <p className="InternshipInfo_internshipCompany_logo">company</p>
                                    <p className="InternshipInfo_internshipCompany_logo">company</p>
                                </div>
                            </div>
                        </div>

                        <div className="InternshipInfo_internshipInfoCenter">
                            <div className="InternshipInfo_internshipInfoCenterItem">
                                <div className="InternshipInfo_itemDetails">
                                    <h1 className="InternshipInfo_itemDetailsTitle">1000+</h1>
                                    <p className="InternshipInfo_itemDetailsSubtitle">internships</p>
                                </div>
                            </div>
                            <div className="InternshipInfo_internshipInfoCenterItem">
                                <div className="InternshipInfo_itemDetails">
                                    <h1 className="InternshipInfo_itemDetailsTitle">5k+</h1>
                                    <p className="InternshipInfo_itemDetailsSubtitle">min. stipend</p>
                                </div>
                            </div>
                            <div className="InternshipInfo_internshipInfoCenterItem">
                                <div className="InternshipInfo_itemDetails">
                                    <h1 className="InternshipInfo_itemDetailsTitle">900+</h1>
                                    <p className="InternshipInfo_itemDetailsSubtitle">companies</p>
                                </div>
                            </div>
                            <div className="InternshipInfo_internshipInfoCenterItem">
                                <div className="InternshipInfo_itemDetails">
                                    <h1 className="InternshipInfo_itemDetailsTitle">100%</h1>
                                    <p className="InternshipInfo_itemDetailsSubtitle">verified jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="InternshipInfo_internshipInfoBottom">
                            <div className="InternshipInfo_socialLinks">
                                <a target="_blank" rel="noreferrer" className="InternshipInfo_socialIcon" href="https://www.linkedin.com">i</a>
                                <a target="_blank" rel="noreferrer" className="InternshipInfo_socialIcon" href="https://www.linkedin.com">L</a>
                                <a target="_blank" rel="noreferrer" className="InternshipInfo_socialIcon" href="https://www.linkedin.com">Y</a>
                            </div>
                            <div className="InternshipInfo_internInfoDetails">
                                <ul className="InternshipInfo_detailsList">
                                    <li className="InternshipInfo_detailsListItem">
                                        <span>©️ Cuvette 2021</span>
                                    </li>
                                    <li className="InternshipInfo_detailsListItem">
                                        <p>|</p>
                                    </li>
                                    <li className="InternshipInfo_detailsListItem">
                                        <a href="/login">Terms of service</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="LoginPage_right">
                    <div className={this.state.showEmailLogin? "dont_show":"LoginWithEmail_loginWithMobile"}>
                        <h1 className="LoginWithEmail_heading">Sign in</h1>
                        <form className="LoginWithEmail_form">
                            <div className="LoginWithEmail_formEmail">
                                <div className="LoginWithEmail_formEmailLabel">
                                    <label for="">Mobile Number</label>
                                    <span className="LoginWithEmail_linkPhoneNumber" onClick={this.handleClicklogin}>Use Email Address</span>
                                </div>
                                <div className="LoginWithEmail_formEmailInput">
                                    <input className="basic-input" name="number" type="text" placeholder="Enter Mobile Number" defaultvalue="" />
                                </div>
                            </div>
                            <div className="LoginWithEmail_formButton">
                                <button className="Button_button Login_button" type="submit">
                                    <span>Request OTP -&gt;</span>
                                </button>
                                <button className="Button_button Button_button-outline GoogleSigninButton_google" type="button">
                                    <span>G Login with Google</span>
                                </button>
                            </div>
                            <div className="Separator_separator"></div>
                            <div className="LoginWithEmail_createAccountLink">
                                New to Cuvette?
                                <span>Create an account</span>
                            </div>
                        </form>
                    </div>
                    <div className={this.state.showEmailLogin? "LoginWithEmail_loginWithEmail":"dont_show"}>
                        <h1 className="LoginWithEmail_heading">Sign in</h1>
                        <form className="LoginWithEmail_form">
                            <div className="LoginWithEmail_formEmail">
                                <div className="LoginWithEmail_formEmailLabel">
                                    <label for="">Email Address</label>
                                    <span className="LoginWithEmail_linkPhoneNumber" onClick={this.handleClicklogin}>Use phone number</span>
                                </div>
                                <div className="LoginWithEmail_formEmailInput">
                                    <input className="basic-input" name="email" type="text" placeholder="Enter Email Address" defaultvalue=" " />
                                </div>
                            </div>
                            <div className="LoginWithEmail_formPassword">
                                <label className="LoginWithEmail_formPasswordLabel" for="">Password</label>
                                <div>
                                    <div className="PasswordInput_formPasswordInput">
                                        <input name="password" type="password" placeholder="Enter password" defaultvalue="" />
                                    </div>
                                </div>
                            </div>
                            <div className="LoginWithEmail_forgetPassword basic-link">Forget Password?</div>
                            <div className="LoginWithEmail_formButton">
                                <button className="Button_button Login_button" type="submit">
                                    <span>Login now -&gt;</span>
                                </button>
                                <button className="Button_button Button_button-outline GoogleSigninButton_google" type="button">
                                    <span>G Login with Google</span>
                                </button>
                            </div>
                            <div className="Separator_separator"></div>
                            <div className="LoginWithEmail_createAccountLink">
                                New to Cuvette?
                                <span>Create an account</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
    }
}

export default Login;