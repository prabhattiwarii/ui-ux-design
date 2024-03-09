import React from "react";
import Layout from "../layout/Layout";
import BreadCrumbs from "../../BreadCrumbs";
import styled from "styled-components";
import c from "../../constants/Constant";
import colors from "../../constants/Colors";
import Testimonial from "../home/Testimonial";


const Wrap = styled.div`
    width:100%;max-width:${c.width};margin:0 auto;box-sizing:border-box;
    & .design-section{
        padding:0 20px;
        & .head-wrap{
            padding: 40px 0 40px;font-size:16px;line-height:26px;color:${colors.lightBlack};
            & span{
                color:${colors.DarkOrange}
            }
        }
        & .content-wrap{
            display:flex;column-gap:50px;padding:0 0 40px;
            & .difference{
                flex:1;
                & .heading{
                    font-size:32px;color:${colors.black};letter-spacing: 1.05px;font-weight:600;margin:0 0 15px;
                }
                & .text{
                    font-size:16px;line-height:26px;color:${colors.lightDark};
                    & span{
                        color:${colors.DarkOrange};
                    }
                }
            }
            & .our-contact{
                flex:1;background:${colors.black};
                & .contact{
                    padding:40px;
                    & .heading{
                        font-size:26px;color:${colors.DarkOrange};margin:0 0 10px;
                    }
                    & .number{
                        font-size:24px;color:${colors.white};margin:0 0 10px;
                    }
                    & .desc{
                        & .text{
                            margin: 0 0 20px;color:${colors.white};font-size:16px;
                            & span{
                                color:${colors.DarkOrange};
                            }
                        }
                    }
                }
            }
        }
        & .contact-us{
            display:flex;background:${colors.DarkOrange};padding:50px;align-items: center;border-radius:30px;
            & .left{
                flex:1 1 0%;
                & .heading {
                    font-size: 32px;line-height:42px;font-weight: 600;color: ${colors.white};margin:0 0 10px;letter-spacing: 1.05px;
                }
                & .text{
                    margin:0;color: ${colors.white};max-width:1000px;font-size:16px;line-height:26px;
                }
            }
            & .right{box-shadow: 5px 10px 15px #EBAC2F4D;
                & .btn-wrap{
                    color:${colors.DarkOrange};background:${colors.white};border:none;padding:0 25px;height:40px;font-size:15px;text-transform:uppercase;cursor:pointer;display:flex;gap:6px;align-items: center;border-radius:8px;
                }
            }
        }
    }

    @media (max-width:991px){
        & .design-section{
            & .head-wrap{
                font-size:15px;line-height:25px;
            }
            & .content-wrap{
                & .difference{
                    & .heading{
                        font-size:28px;margin:0 0 10px;
                    }
                    & .text{
                        font-size:15px;line-height:25px;
                    }
                }
                & .our-contact{
                    & .contact{
                        & .heading{
                            font-size:26px;
                        }
                        & .number{
                            font-size:22px;
                        }
                        & .desc{
                            & .text{
                                font-size:14px;line-height:24px;margin:0 0 8px;
                            }
                        }
                    }
                }
            }
            & .contact-us{
            flex-direction:column;align-items:baseline;row-gap:20px;
            & .left{
                & .heading{
                    font-size:28px;
                }
                & .text{
                    font-size:15px;line-height:25px;
                }
            }
        }
        }
    };
    @media (max-width:767px){
        & .design-section{
            & .head-wrap{
                font-size:14px;line-height:24px;
            }
            & .content-wrap{
                flex-direction:column;row-gap:30px;
                & .difference{
                    & .heading{
                        font-size:24px;margin:0 0 8px;
                    }
                    & .text{
                        font-size:14px;line-height:24px;
                    }
                }
                & .our-contact{
                    & .contact{
                        & .heading{
                            font-size:24px;
                        }
                        & .number{
                            font-size:20px;
                        }
                        & .desc{
                            & .text{
                                font-size:14px;line-height:24px;margin:0 0 9px;
                            }
                        }
                    }
                }
            }
            & .contact-us{
            & .left{
                & .heading{
                    font-size:24px;
                }
                & .text{
                    font-size:14px;line-height:24px;
                }
            }
        }
        }
    };

    @media (max-width:479px){
        & .design-section{
        & .content-wrap{
            & .our-contact{
                & .contact{
                    & .heading{
                        font-size:18px;
                    }
                    & .number{
                        font-size:16px;
                    }
                    & .desc{
                        & .text{
                            font-size:14px;line-height:24px;margin:0 0 5px;
                        }
                    }
                }
            }
        }
        & .contact-us{
            & .left{
                & .heading{
                    font-size:22px;
                }
                & .text{
                    font-size:14px;line-height:24px;
                }
            }
        }
        }
    }
`;

const DesignService = () => {
    const breadcrumbs = [
        { name: "Home/", path: "/" ,},
        {name: "Service/", path: "/service"},
        { name: "Logo Design & Branding" ,path: "/service/designservice" },
    ];
  return (
    <Layout>
        <Wrap>
            <BreadCrumbs crumbs={breadcrumbs} />
            <div className="design-section">
                <div className="head-wrap">
                    A logo that instantly catches the eye and sets a brand apart can only accomplish your marketing goals. The Works Pro is the highly renowned <span>Logo Designing and Branding</span> company in India that has been consistently producing <span>high quality</span> and <span>unique business logos </span>from the past so many years. Our logo creation process starts with consultation and questionnaire that we discuss with our clients to know their vision, needs and business idea. Our team of creatives performs deep market research so that they can come up with effective branding decisions.
                </div>
                <div className="content-wrap">
                    <div className="difference">
                        <div className="heading">
                            How We Are Different?
                        </div>
                        <div className="text">
                            We truly understand that a business logo can either make or break a brand and its presence over the web. We believe that a logo should give a reflection of a business, what it is all about. Our team of graphic designers, artists and logo design experts work closely with each and every client to craft a perfect logo exactly what you need. Our pack of inventive professionals focuses on how your customers will love to interact in this digital era. They go extra mile to produce a substantial result in the form of a perfect <span> “Logo”</span>.
                        </div>
                    </div>
                    <div className="our-contact">
                        <div className="contact">
                            <div className="heading">
                                Looking for a Logo Design & Branding Company?
                            </div>
                            <div className="number">
                                Call: +91-84278-14698
                            </div>
                            <div className="desc">
                                <p className="text">Leading Logo Design & Branding Company India</p> 
                                <p className="text">Our team of <span>graphic designers</span>, artists and <span>logo design</span> experts work closely with each and every client to craft a <span>perfect logo </span> exactly what you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-us">
                        <div className="left">
                        <div className="heading">
                            Interested In Us? Hire Now!
                        </div>
                        <div className="text">
                            It would be a good idea to get in touch with us soon as we could discuss your plans and give a great start as soon as possible. No need to delay your plans anymore when we are here to give you the best. Call at +91-84278-14698
                        </div>
                        </div>
                        <div className="right">
                            <button className="btn-wrap">Contact Us <span><svg viewBox="0 0 19.25 14" width="19" height="14" fill={colors.DarkOrange}><path d="M.31,7.207,7,0l6.728,7.241a.875.875,0,0,1-1.174,1.3L7.876,3.719V18.374a.875.875,0,0,1-1.75,0V3.719L1.5,8.487a.9.9,0,0,1-.626.263A.875.875,0,0,1,0,7.875.987.987,0,0,1,.31,7.207Z" transform="translate(19.25) rotate(90)"></path></svg></span></button>
                        </div>
                    </div>
            </div>
            <Testimonial/>
        </Wrap>
    </Layout>
  )
}

export default DesignService