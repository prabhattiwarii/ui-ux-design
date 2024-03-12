import React from "react";
import styled from "styled-components";
import color from "../../constants/Colors";
import c from "../../constants/Constant";
import { fbIcon, instaIcon, printrestIcon, twiterIcon} from "../../helpers/Icon";
import { Link } from "react-router-dom";


const FooterWrap = styled.div`
    width:100%;background-color:${color.black};color:${color.white};
    & .footer-section{
        width:${c.width};max-width:100%;margin:0 auto;padding:20px;display:flex;flex-direction:column;row-gap:40px;
        & .footer-head{
            display:flex;justify-content:space-between;border-bottom:1px solid ${color.light};padding:0 0 40px;
            & .head-left{
                & .heading{font-size:48px;font-weight:600;margin:0;letter-spacing:1.6px;}
                & .text{margin:0;font-size:14px;font-weight:300;letter-spacing:0.4px;}
                & span{color:${color.orange};}
            }
            & .head-right{
                display:flex;flex-direction:column;align-items:flex-end;row-gap:14px;
                & .number-email{
                    display:flex;flex-direction:column;align-items:flex-end;row-gap:2px;
                    & .number{font-size:32px;letter-spacing:1.05px;font-weight:600;margin:0;color:${color.white};}
                    & .email{font-size:18px;letter-spacing:0.6px;margin:0;color:${color.lightBlack};text-align:left;}
                }
                & .icon{
                    display:flex;column-gap:21px;
                    & .icon-link{
                        transition:all .3s linear;display:flex;
                        & .icon-img{
                            fill:${color.light};
                            &:hover{fill:${color.orange};}
                        }
                    }
                }
            }
        }
        & .footer-middle{
            display:flex;flex-wrap:wrap;column-gap:50px;
            & .footer-list{
                display:flex;flex-direction:column;width:calc(25% - 37.5px);
                & .heading{margin:0 0 15px;font-size:16px;}
                & .lists{
                    padding:0;margin:0;list-style:none;display:flex;flex-direction:column;row-gap:3px;
                    & .list{
                        & .list-link{
                            color:${color.lightBlack};font-size:14px;transition:.2s;
                            &:hover{color:${color.orange};}
                        }
                    }
                }
            }
        }
        & .footer-bottom{
            display:flex;flex-direction:column;align-items:center;row-gap:10px;
            & .terms-lists{
                list-style:none;margin:0;padding:0;
                & .footer-list{
                    display:inline-block;
                    &:after{content:"|";margin:0 10px;color:${color.lightBlack};}
                    & .list-link{
                        color:${color.lightBlack};font-size:16px;transition:.3s;
                        &:hover{text-decoration:underline;color:${color.orange};}
                    }
                }
                :last-child:after{content:"";margin:0;}
            }
            & .copyright{
                font-size:14px;color:${color.lightBlack};font-weight:300;letter-spacing:0.35px;
                & .link{color:${color.orange};}
            }
        }
    }

    @media(max-width:991px){
        & .footer-section{
            & .footer-head{
                & .head-left{
                    max-width:430px;
                    & .heading{font-size:38px;}
                    & .text{font-size:12px;}
                }
                & .head-right{
                    & .number-email{
                        & .number{font-size:28px;}
                        & .email{font-size:16px;}
                    }
                    & .icon{column-gap:19px;}
                }
            }
        }
    }

    @media(max-width:767px){
        & .footer-section{
            & .footer-head{
                & .head-left{
                    max-width:330px;
                    & .heading{font-size:28px;}
                }
                & .head-right{
                    & .number-email{
                        & .number{font-size:24px;}
                        & .email{font-size:14px;}
                    }
                    & .icon{column-gap:15px;}
                }
            }
            & .footer-middle{
                display:flex;flex-wrap:wrap;column-gap:50px;row-gap:30px;
                & .footer-list{
                   width:calc(50% - 25px);
                   & .heading{margin:0 0 5px;}
                }
            }
            & .footer-bottom{
                & .terms-lists{text-align:center;}
            }
        }
    }

    @media(max-width:600px){
        & .footer-section{
            & .footer-head{
                & .head-left{
                    max-width:271px;
                    & .heading{font-size:24px;}
                }
                & .head-right{
                    & .number-email{
                        & .number{font-size:18px;}
                        & .email{font-size:14px;}
                    }
                    & .icon{column-gap:12px;}
                }
            }
            & .footer-bottom{text-align:center;}
        }
    }

    @media(max-width:479px){
        & .footer-section {
            row-gap:20px;
            & .footer-head{
                flex-direction:column;align-items:flex-start;padding:0 0 27px;row-gap:10px;
                & .head-left{max-width:100%;}
                & .head-right{
                    align-items:flex-start;
                    & .number-email{
                        align-items:flex-start;
                        & .number{font-size:20px;}
                        & .email{font-size:14px;}
                    }
                }
            }
            & .footer-middle {
                & .footer-list {width:100%;}row-gap:20px;
            }
            & .footer-bottom{
                & .terms-lists{
                    display:flex;flex-direction:column;width:100%;
                    :after{display:none;}
                    & .footer-list{border-bottom:1px solid ${color.lightBlack};padding:6px 0;}
                }
            }
        }
    }
`;


const Footer = () => {
    return (
        <FooterWrap>
            <div className="footer-section">
                <div className="footer-head">
                    <div className="head-left">
                        <h2 className="heading">Let's Work Together</h2>
                        <p className="text"><span>Lorem ipsum dolor</span> sit amet consectetur adipiscing elit. Phasellus interdum.</p>
                    </div>
                    <div className="head-right">
                        <div className="number-email">
                            <div className="number">+91-9301829416</div>
                            <div className="email" >i@domainname.com</div>
                        </div>
                        <div className="icon">
                            <a href="/" className="icon-link">{fbIcon({width:"20",height:"20"})}</a>
                            <a href="/" className="icon-link">{twiterIcon({width:"20",height:"20"})}</a>
                            <a href="/" className="icon-link">{instaIcon({width:"20",height:"20"})}</a>
                            <a href="/" className="icon-link">{printrestIcon({width:"20",height:"20"})}</a>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-list">
                        <h5 className='heading'>Company Info</h5>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}`}>Home</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/about-us`}>About Us</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/portfolio`}>Portfolio</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/career`}>Career</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/blog`}>Blog</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/contact-us`}>Contact-Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className='heading'>Web Designing & Development</h5>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/responsive-web-designing`}>Responsive Web Design</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/custom-website-designing`}>Custom Website Designing</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/wordpress-website-development`}>Wordpress Website Development</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/php-website-development`}>PHP Development</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/magento-website-development`}>Magento Website Development</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/website-optimization`}>Website Optimization</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/mobile-templates`}>Mobile Templates</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/mobile-app-development-company-chandigarh`}>Mobile App Development</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/android-app-development-company`}>Android App Marketing</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/iphone-application-development-company-chandigarh`}>Iphone App Development</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/laravel-development-company-chandigarh`}>Larvel App Development</a></li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className='heading'>Ecommerce Solutions</h5>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/ecommerce-consultation`}>Ecommerce Consultation</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/ecommerce-strategy-building`}>Ecommerce Strategy Building</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/ecommerce-web-development`}>Ecommerce Web Development</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/ecommerce-mobile-app-development`}>Ecommerce Mobile App development</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/ecommerce-marketing`}>Ecommerce Marketing</a></li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className='heading'>Digital Marketing</h5>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/seo-company-india`}>SEO Services</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/ppc-company-india`}>PPC Company India</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/social-media-marketing`}>SMM</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/mobile-app-marketing`}>Mobile App Marketing</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/online-reputation-management`}>ORM Services</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/content-writing-services`}>Content Writing Services</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/seo-services-real-estate`}>SEO For Real Estate</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/seo-services-ecommerce`}>SEO For eCommerce</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/seo-services-pharmaceutical-companies`}>SEO For Pharma</a></li>
                            <li className="list"><a className="list-link" href={`${c.BASE_URL}/google-local-listing-services`}>Google Local Listing Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <ul className="terms-lists">
                        <li className="footer-list"><a href={`${c.BASE_URL}/cancellation-policy`} className="list-link">Cancellation Policy</a></li>
                        <li className="footer-list"><a href={`${c.BASE_URL}/disclaimer`} className="list-link">Disclaimer</a></li>
                        <li className="footer-list"><a href={`${c.BASE_URL}/privacy-policies`} className="list-link">Privacy Policies</a></li>
                        <li className="footer-list"><a href={`${c.BASE_URL}/terms-and-conditions`} className="list-link">Terms and Conditions</a></li>
                    </ul>
                    <div className="copyright">Copyright &copy; {c.currentYear}<a className="link" href="/"> {c.APP_NAME}.</a> Powered by Day Care Services.</div>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;
