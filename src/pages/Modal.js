import {useState} from 'react';
import styled from 'styled-components';
import {focusOnFeild,hasValidationError,validationError} from '../helpers/GlobalHelpers';
import color from '../constants/Colors';
import axios from 'axios';


const Wrapper = styled.div`
    position: fixed;inset: 0px;z-index: 999;display: flex;justify-content: center;align-items: center;background:${color.bgLight};
    & .back{position: absolute;inset: 0px;}
    & .careerform-main{
        background: ${color.white};z-index:9999;max-width: 800px;width: calc(100% - 40px);position: relative;border-radius: 17px;overflow: hidden;
        & .form-head{
            display: flex;justify-content: center;padding: 20px 40px 30px;position: relative;
            & span{font-size: 22px;line-height: 25px;font-weight: 600;color:${color.black};}
            & .cross{cursor: pointer;z-index: 1;width: 25px;height: 25px;display:flex;align-items: center;justify-content: center;border: none;border-radius: 20px;background: rgb(206, 25, 25);position: absolute;right: 13px;top: 18px;padding: 0px;}
        }
        & .body{
            padding: 0px 25px 25px;display: flex;flex-direction: column;max-height:90vh;overflow: hidden auto;
            & .form-group{
                width: 100%;display: flex;flex: 1;column-gap: 20px;
                & .input-form{
                    width:100%;display: flex;flex-direction: column;margin: 0 0 20px;
                    & .file-wrap{
                        display: flex;align-items: center;justify-content: center;column-gap: 20px;min-height: 80px;border: 1px solid ${color.darkWhite};border-radius: 6px;
                        & .upload-file{display: none;}
                        & .upload-text{font-size: 16px;color:${color.black};}
                        & .browse{
                            padding:0 25px;height:35px;background:${color.black};color:white;border:none;cursor:pointer;border-radius:6px;transition:.2s;
                            &:hover{background:${color.DarkOrange};color:${color.white};}
                        }
                    }
                    & .has-input-error{border-color:red !important;}
                }
            }
            & .form-btn{
                text-align:center;
                & .apply-btn{
                    padding:0 25px;height:35px;background:${color.black};color:white;border:none;cursor:pointer;border-radius:6px;transtion:.2s;
                    &:hover{background:${color.DarkOrange};color:${color.white};}
                }
            }
            & .modal{
                position:fixed;inset:0px;z-index: 99999;display: flex;justify-content:center;align-items:center;
                & .modal-content{
                    background:green;color:${color.white};padding:20px;text-align:center;display:flex;align-items:center;border-radius:8px;
                    & .close{cursor:pointer;height:17px;}
                    & p{color:${color.white};margin:0;}
                }
            }
        }
    }
`;
const Modal = ({onCloseModal,career}) => {
    const [form, setForm] = useState({first_name:"",last_name:"",email:"",phone:"",city:"",state:"",qualification:"",resume:"",job_type:career.name});
    const [isOpen, setIsOpen] = useState(true);
    const [errors, setErrors] = useState([]);
    const [character, setCharacter] = useState(0);
    const maxCharacterLimit = 500;
    const handleClose = () => {
        setIsOpen(false);
        onCloseModal();
    };
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('Selected file:', file);
        setForm({ ...form, resume: file });
    };
      

    const handleKeyPress = (e) => {
        if (e.key && e.key.length === 1 && !/\d/.test(e.key)) {
            e.preventDefault();
        }
    }

    const handleClick = () => {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    };
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'qualification') {
            if (value.length <= maxCharacterLimit) {
                setCharacter(maxCharacterLimit - value.length);
                setForm({ ...form, [name]: value });
            }
        } else {
            setForm({ ...form, [name]: value });
        }
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const formData = new FormData();
                for (const key in form) {
                    key !== "resume" && formData.append(key, form[key] || "");
                }
                form.resume && formData.append("resume", form.resume);
                
                const response = await axios.post('http://localhost:3002/contact', formData);
                console.log("API Response:", response.data);
                } catch (error) {
                console.error("API Error:", error);
                }
            }
        };

      const hasSameDigits = (phone) => {
        return /^(.)\1+$/.test(phone);
    }

    const validate = () => {
        const newError = {};
        let positionFocus = "";
        const phoneRE = /^[0-9]{10}$/;
        // eslint-disable-next-line
        const emailRe = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        
        if(!form.first_name || !form.first_name.trim()){
            newError["first_name"] = "Required";
            positionFocus = positionFocus || "first_name";
        }else if(form.first_name.length > 30){
            newError["first_name"] = "Maximum 30 characters allowed";
            positionFocus = positionFocus || "first_name";
        }
        if(!form.last_name || !form.last_name.trim()){
            newError["last_name"] = "Required";
            positionFocus = positionFocus || "last_name";
        }else if(form.last_name.length > 30){
            newError["last_name"] = "Maximum 30 characters allowed";
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
        if(!form.city || !form.city.trim()){
            newError["city"] = "Required";
            positionFocus = positionFocus || "city";
        }
        if(!form.state || !form.state.trim()){
            newError["state"] = "Required";
            positionFocus = positionFocus || "state";
        }
        if(!form.qualification || !form.qualification.trim()){
            newError["qualification"] = "Required";
            positionFocus = positionFocus || "qualification";
        }else if(form.qualification.length > 100){
            newError["qualification"] = "Maximum 100 characters allowed";
            positionFocus = positionFocus || "qualification";
        }
        if (!form.resume) {
            newError["resume"] = "Required";
            positionFocus = positionFocus || "resume";
        }
        setErrors(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }
    return (
        isOpen && (
            <Wrapper>
                <div className="back"></div>
                <div className='careerform-main'>
                    <div className='form-head'>
                        <span>You are applying for {career.name}</span>
                        <button className='cross' onClick={handleClose}>h</button>
                    </div>
                    <div className="body">
                        <form onSubmit={handleSubmit} autoComplete='off'>
                            <div className="form-group">
                                <div className="input-form">
                                    <input className={hasValidationError(errors, "first_name") ? "has-input-error" : ""} type="text" placeholder="First Name" name="first_name" value={form.first_name} onChange={handleChange} />
                                    {hasValidationError(errors, "first_name") ? (<div className="error">{validationError(errors, "first_name")}</div>) : null}
                                </div>
                                <div className="input-form">
                                    <input className={hasValidationError(errors, "last_name") ? "has-input-error" : ""} type="text" placeholder="Last Name" name="last_name" value={form.last_name} onChange={handleChange} />
                                    {hasValidationError(errors, "last_name") ? (<div className="error">{validationError(errors, "last_name")}</div>) : null}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-form">
                                    <input className={hasValidationError(errors, "email") ? "has-input-error" : ""} type="text" placeholder="Email Address" name="email" value={form.email} onChange={handleChange} />
                                    {hasValidationError(errors, "email") ? (<div className="error">{validationError(errors, "email")}</div>) : null}
                                </div>
                                <div className="input-form">
                                    <input className={hasValidationError(errors, "phone") ? "has-input-error" : ""} type="tel"  maxLength={10} placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} onKeyPress={handleKeyPress}/>
                                    {hasValidationError(errors, "phone") ? (<div className="error">{validationError(errors, "phone")}</div>) : null}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-form">
                                    <input className={hasValidationError(errors, "city") ? "has-input-error" : ""} type="text" placeholder="city" name="city" value={form.city} onChange={handleChange} />
                                    {hasValidationError(errors, "city") ? (<div className="error">{validationError(errors, "city")}</div>) : null}
                                </div>
                                <div className="input-form">
                                    <input className={hasValidationError(errors, "state") ? "has-input-error" : ""} type="text" placeholder="state" name="state" value={form.state} onChange={handleChange} />
                                    {hasValidationError(errors, "state") ? (<div className="error">{validationError(errors, "state")}</div>) : null}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-form">
                                    <textarea className={hasValidationError(errors, "qualification") ? "has-input-error" : ""} placeholder="Qualifcation Details" name="qualification" value={form.qualification} onChange={handleChange}/>
                                    {hasValidationError(errors, "qualification") ? (<div className="error">{validationError(errors, "qualification")}</div>) : null}
                                    <p className="limit">{character} characters left</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-form">
                                    <div className={`file-wrap ${hasValidationError(errors, "resume") ? "has-input-error" : ""}`}>
                                        <input type="file" id="file-input" accept="image/*,.doc,.docx,.ppt,.pptx,.pdf" style={{display:'none'}}  name="resume" onChange={handleFileChange}/>
                                        {form.resume ? 
                                            (<><span className="file-text">{form.resume.name}</span><button className="browse" type="button"  onClick={handleClick}>Change</button></>):
                                            (<><span className="upload-text">Upload your resume</span><button className="browse" type="button" onClick={handleClick}>Browse</button></>)
                                        }
                                    </div>
                                    {hasValidationError(errors, "resume") ? (<div className="error">{validationError(errors, "resume")}</div>) : null}
                                </div>
                            </div>
                            <div className='form-btn'>
                                <button className='apply-btn' type='submit'>SUBMIT NOW</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Wrapper>
        )
    )
}

export default Modal
