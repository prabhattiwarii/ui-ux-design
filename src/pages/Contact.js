import React, { useState } from 'react'
import {focusOnFeild, hasValidationError, validationError} from "../helpers/GlobalHelpers";
import axios from 'axios'
import styled from "styled-components";
import colors from '../constants/Colors';
import {mapIcon,emailIcon,phoneIcon} from "../helpers/Icon";
import c from "../constants/Constant";
import Layout from '../components/layout/Layout';
import BreadCrumbs from "../BreadCrumbs"

const ContactWrap = styled.div`
    width:100%;max-width:${c.width};margin: 0px auto;box-sizing:border-box;padding:20px;
        & .head-wrap{font-size:16px;color:${colors.lightDark};display:flex;justify-content:center;};
        & .contact-wrap{
            display:flex;gap:35px;
            & .contact-info{
                display:flex;flex-direction:column;row-gap:10px;flex:1;
                & .contact-heading{font-size:24px;line-height:30px;color:${colors.lightDark};font-weight:600;}
                & .contact-text{font-size:16px;color:${colors.lightDark};margin:0;}
                & .contact-call{
                    display:flex;flex-direction:column;row-gap:10px;
                    & .contact-wrap{
                        align-items:center;gap:15px;
                        border-bottom: 1px solid ${colors.orange};padding: 20px;
                        & span{border:1px solid ${colors.orange};width:36px;height:36px;border-radius:100%;display:flex;align-items:center;justify-content:center;}
                        & .heading{
                            font-size:14px;color:${colors.lightDark};
                            & .heading-detail{color:${colors.black};font-size:16px;letter-spacing: 0.4px;}
                        }
                    }
                }
                & .map{
                    max-width:681px;margin:40px 0 0;
                    & iframe{width:100%;}
                }
                & .form{
                    & .form-group{
                        width: 100%;display: flex;flex: 1;column-gap: 20px;
                        & .input-form{
                            width:100%;display: flex;flex-direction: column;margin: 0 0 20px;position:relative;
                            & label{margin:0 0 5px;font-size:16px;color:${colors.black};letter-spacing:0.4px;}
                            & .has-input-error{border-color:red !important;}
                            & select{
                                color:${colors.black};box-sizing:border-box;font-size:14px;height:40px;padding:6px 12px;border:1px solid #00000029;box-shadow: 0px 0px 10px #00000029;letter-spacing: 0.4px;border-radius:6px;width:100%;-webkit-appearance: none;-moz-appearance:none;text-indent: 1px;text-overflow: '';
                                & option{color:${colors.black};box-sizing:border-box;font-size:14px;font-family:'Poppins';}
                            }
                        }
                    }
                    & .form-btn{
                        & .apply-btn{
                            padding:0 25px;height:35px;background:${colors.DarkOrange};color:white;border:none;cursor:pointer;border-radius:6px;transition:.2s;
                            &:hover{background:${colors.black};color:${colors.white};}
                        }
                    }
                }
                & .modal{
                    position:fixed;inset:0px;z-index:99999;display:flex;justify-content:center;align-items:center;
                    & .modal-content{
                        background:green;color:${colors.white};padding:20px;text-align:center;display:flex;align-items:center;border-radius:8px;
                        & .close{cursor:pointer;height:17px;}
                        & p{color:${colors.white};margin:0;}
                    }
                }
            }
        }
    }
    @media (max-width:767px){
        & .contact-wrap{
            flex-direction:column-reverse;row;gap:30px !important;
            & .contact-info{
                & .contact-call{
                    flex-direction:row;
                    & .contact-wrap{flex-direction:row !important;column-gap:10px !important;}
                }
                & .map{
                    margin:30px 0 0 !important;
                    & iframe{height:300px !important;}
                }
                & .form{
                    & .form-group{
                        & .input-form{
                            margin:0 0 12px !important;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:479px){
        & .contact-wrap{
            & .contact-info{
                row-gap:4px !important;
                & .contact-heading{font-size:20px !important;}
                & .contact-text{font-size:15px !important;}
                & .map{
                    margin:25px 0 0 !important;
                    & iframe{height:265px !important;}
                }
                & .contact-call{
                    & .contact-wrap{
                        & .heading{width:246px;}
                    }
                }
                & .form{
                    & .form-group{
                        flex-direction:column !important;
                        & .input-form{
                            margin:0 0 10px !important;
                            & label{font-size:14px !important;}
                        }
                    }
                }
            }
        }
    }
`;


const Contact = () => {

    const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", message: "" })
    const [error, setErrors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const {data} = await axios.post("http://localhost:3002/careers",form)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleKeyPress =(e) =>{
        if (e.key && e.key.length === 1 && !/\d/.test(e.key)) {
            e.preventDefault();
        }
    }
    const hasSameDigits = (phone) => {
        return /^(.)\1+$/.test(phone);
    }

    const validate = () => {
        const newError = {};
        let positionFocus = "";
        const emailRe = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        // eslint-disable-next-line
        const phoneRE = /^[0-9]{10}$/;
         const urlRE = /^(https?:\/\/)?(?!w\.com)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        if(!form.first_name || !form.first_name.trim()){
            newError["first_name"] = "Required";
            positionFocus = positionFocus || "first_name";
        }else if(form.first_name.length > 20){
            newError["first_name"] = "Maximum 20 characters allowed";
            positionFocus = positionFocus || "first_name";
        }
        if(!form.last_name || !form.last_name.trim()){
            newError["last_name"] = "Required";
            positionFocus = positionFocus || "last_name";
        }else if(form.last_name.length > 20){
            newError["last_name"] = "Maximum 20 characters allowed";
            positionFocus = positionFocus || "last_name";
        }
        if(!form.email || !form.email.trim()){
            newError["email"] = "Required";
            positionFocus = positionFocus || "email";
        }else if(!emailRe.test(form.email)){
            newError["email"] = "Invalid Email";
            positionFocus = positionFocus || "email";
        }
        if (!form.phone || !form.phone.trim()) {
            newError["phone"] = "Required";
            positionFocus = positionFocus || "phone";
        } else if (!phoneRE.test(form.phone) || hasSameDigits(form.phone)) {
            newError["phone"] = "Please enter a valid 10-digit phone number with non-repeating digits.";
            positionFocus = positionFocus || "phone";
        }
        if (form.website && !urlRE.test(form.website)) {
            newError["website"] = "Please enter a valid website URL.";
            positionFocus = positionFocus || "website";
        }

        if(!form.message || !form.message.trim()){
            newError["message"] = "Required";
            positionFocus = positionFocus || "message";
        }
        setErrors(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }

    const breadcrumbs = [
        { name: "Home/", path: "/" },
        { name: "Contact Us", path: "/contact"},
    ];
    return (
        <Layout>
        <BreadCrumbs crumbs={breadcrumbs}/>
        <ContactWrap>
        <div className="contact-wrap">
                <div className="contact-info">
                    <div className="contact-heading">Contact Info</div>
                    <p className="contact-text">Always Excited to Discuss Unique Solution For Business</p>
                    <div className="contact-call">
                        <a href="tel:7341111171" className="contact-wrap">
                            <span>{phoneIcon({width:18,height:18,fill:colors.DarkOrange})}</span>
                            <div className="heading"><div className="heading-detail">Phone</div>+91-7341111171</div>
                        </a>
                        <a href="mailto:info@regiustechnologies.com" className="contact-wrap">
                            <span>{emailIcon({width:18,height:18,fill:colors.DarkOrange})}</span>
                            <div className="heading"><div className="heading-detail">Email</div>info@regiustechnologies.com</div>
                        </a>
                        <a href="https://www.google.com/maps?q=SCO+40,2nd+Floor,Sector+11,Panchkula,Haryana,India" target="_blank" rel="noopener noreferrer" className="contact-wrap">
                            <span>{mapIcon({width:18,height:18,fill:colors.DarkOrange})}</span>
                            <div className="heading"><div className="heading-detail">Address</div>SCO 40, 2nd Floor, Sector 11, Panchkula, Haryana, India</div>
                        </a>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109778.02692604!2d76.70652620645801!3d30.70255967075429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f936ed6a2b757%3A0x898668d7061b40f0!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1696438764296!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" frameBorder = "0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="unique"></iframe>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-heading">Let’s get Started!</div>
                    <p className="contact-text">Request your FREE Consultation.</p>
                    <form action="" className="form" onSubmit={handleSubmit} autoComplete="off">
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="firstName">First Name</label>
                                <input className={hasValidationError(error, "first_name") ? "has-input-error" : ""} type="text" placeholder="First Name" name="first_name" value={form.first_name} onChange={handleChange} />
                                {hasValidationError(error, "first_name") ? (<div className="error">{validationError(error, "first_name")}</div>) : null}
                            </div>
                            <div className="input-form">
                                <label htmlFor="lastName">Last Name</label>
                                <input className={hasValidationError(error, "last_name") ? "has-input-error" : ""} type="text" placeholder="Last Name" name="last_name" value={form.last_name} onChange={handleChange} />
                                {hasValidationError(error, "last_name") ? (<div className="error">{validationError(error, "last_name")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="email">Email</label>
                                <input className={hasValidationError(error, "email") ? "has-input-error" : ""} type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
                                {hasValidationError(error, "email") ? (<div className="error">{validationError(error, "email")}</div>) : null}
                            </div>
                            <div className="input-form">
                                <label htmlFor="phone">Phone Number</label>
                                <input className={hasValidationError(error, "phone") ? "has-input-error" : ""} type="text" maxLength={10} placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange}  onKeyPress={handleKeyPress}/>
                                {hasValidationError(error, "phone") ? (<div className="error">{validationError(error, "phone")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="website" className={`input ${hasValidationError(error, "website") ? "has-input-error" : ""}`}>Website</label>
                                <input name="website" type="text" placeholder="www.example.com" value={form.website} onChange={handleChange}/>
                                {hasValidationError(error, "website") && <span className="error">{validationError(error, "website")}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                            <label htmlFor="interest">Interest</label>
                                <select onChange={handleChange} value={form.interest} name="interest" className={hasValidationError(error, "interest") ? "has-input-error" : ""}>
                                    <option value="">Select</option>
                                    <option value="website-design">Website Design</option>
                                    <option value="website-development">Website Development</option>
                                    <option value="online-marketing">Online Marketing (Adwords/Remarketing)</option>
                                </select>
                                {hasValidationError(error, "interest") ? (<div className="error">{validationError(error, "interest")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <label htmlFor="description">Description</label>
                                <textarea className={hasValidationError(error, "message") ? "has-input-error" : ""} placeholder="Type your message..." name="message" value={form.message} onChange={handleChange} />
                                {hasValidationError(error, "message") ? (<div className="error">{validationError(error, "message")}</div>) : null}
                            </div>
                        </div>
                        <div className='form-btn'>
                            <button className='apply-btn' type='submit'>SUBMIT NOW</button>
                        </div>
                    </form>
                </div>
            </div>
        </ContactWrap>
        </Layout>
    )
}

export default Contact