import React, { useEffect, useState } from "react";
import BreadCrumbs from "../BreadCrumbs";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import image from "../assets/Images";
import c from "../constants/Constant";
import colors from "../constants/Colors";
import IndustryServe from "../components/home/IndustryServe";
import Testimonial from "../components/home/Testimonial";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceWrap = styled.div`
    padding:0 0 60px;
    & .service-section {
       width: 100%; max-width: ${c.width};margin: 0 auto;padding: 40px 20px;display: flex;flex-direction: column;row-gap: 30px;
        & .head {
        font-weight: 500;font-size: 16px;line-height: 26px;color: ${colors.black};
        & p{
            margin: 0;
        }
        }
        & .service{ 
            display:flex;flex-direction:column;row-gap:40px;
            & .services-item {
                display: flex;column-gap:50px;
                & .text{
                    flex: 1;
                    & .heading{
                        margin:0 0 15px;font-size:32px;color:${colors.black};line-height: 42px;
                    }
                    & .desc {
                    margin: 0 0 20px;color: ${colors.lightBlack};font-size: 16px;line-height: 26px;
                    }

                    & .lists{
                        display:flex;flex-direction:column;row-gap:12px;margin: 0 0 0 20px;padding: 0;
                        & .list{
                            & .link{
                                text-decoration: underline;color:${colors.lightBlack};font-size:16px;line-height:26px;
                                &:hover{
                                    color:${colors.DarkOrange}
                                }
                            }
                        }
                    }
                }

                & .img {
                    flex:1;
                    & .image{
                        & .banner {
                            width: 100%;height:100%;
                        }
                    }
                }
            }
            :nth-of-type(even){flex-direction:row-reverse;}
        }
    }
    @media (max-width:991px){
        & .service-section{
            & .service {
                & .services-item{
                    column-gap: 30px;
                    & .text{
                        & .heading{
                            font-size:30px;margin:0 0 10px;
                        }
                        & .desc{
                            font-size:15px;line-height:25px;margin:0 0 15px;
                        }
                        & .lists{
                            row-gap:10px;font-size:15px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:767px){
        & .service-section{
            & .services-item{
                flex-direction:column-reverse;align-items: center;row-gap:20px;
                & .text{
                    & .heading{
                        font-size:24px;margin:0 0 5px;
                    }
                    & .desc{
                        font-size:15px;line-height:25px;margin:0 0 15px;
                    }
                    & .lists{
                        row-gap:10px;font-size:15px;
                    }
                }
                & .img{
                    max-width: 400px;
                }
            }
        }
    }
    @media (max-width:767px){
        & .service-section{
            & .services-item{
                flex-direction:column-reverse;align-items: center;row-gap:20px;
                & .text{
                    & .heading{
                        font-size:22px;
                    }
                    & .desc{
                        font-size:14px;line-height:24px;margin:0 0 10px;
                    }
                    & .lists{
                        row-gap:5px;
                       & .list{
                        & .link{
                            font-size:14px;
                        }
                       }
                    }
                }
                & .img{
                    max-width: 400px;
                }
            }
        }
    }
`;


const Service = () => {
    const breadcrumbs = [
        { name: "Home/", path: "/" },
        { name: "Services", path: "/services" },
    ];

    const [servicesData, setServicesdata] =useState({});
    useEffect(()=>{
        getService();
    },[]);

    const getService = () =>{
        return axios.get("api")
        .then((res)=>{
            if(res.status === 200){
                const data = res.data.page;
                setServicesdata(data);
            }else {
                console.error('Error:', res.statusText);
            }
        })
        .catch((error) => {
            console.error('Network Error:', error);
        });
    }
    return (
        <Layout>
            <ServiceWrap>
                <BreadCrumbs crumbs={breadcrumbs} />
                <div className="service-section">
                    <div className="head" dangerouslySetInnerHTML={{__html:servicesData.description}}></div>
                    <div className="service">
                        {Array.isArray(servicesData.services) && servicesData.services.map((service)=>(
                            <div className="services-item" key={service.id}>
                                <div className="text">
                                    <h4 className="heading">{service.name}</h4>
                                    <div className="desc">{service.short_description}</div>
                                    <ul className="lists">
                                        <li className="list"><Link className="link" to="/service/designservice">Logo Design & Branding</Link></li>
                                        <li className="list"><Link className="link" to="/">Responsive Website Design </Link></li>
                                        <li className="list"><Link className="link" to="/">Print Design</Link></li>
                                        <li className="list"><Link className="link" to="/">App Design</Link></li>
                                    </ul>
                                </div>
                                <div className="img">
                                    <div className="image">
                                        { !service.banner ? <img className="banner" src={image.default} alt="Banner" />
                                            : <img className="banner" src={service.banner} alt="Banner" />
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <IndustryServe/>
                <Testimonial/>
            </ServiceWrap>
        </Layout>
    );
};

export default Service;