import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import c from "../constants/Constant";
import color from "../constants/Colors";
import IndustryServe from "../components/home/IndustryServe";
import Testimonial from "../components/home/Testimonial";
import image from "../assets/Images";

const ServiceWrap = styled.div`
    & .service-section{
        width:100%;max-width:${c.width};margin:0 auto;display:flex;flex-direction:column;row-gap:30px;padding:40px 20px 20px;
        & .heading{
            font-weight:500;font-size:16px;line-height:26px;color:${color.black};
            & p{margin:0;}
        }
        & .service{ 
            display:flex;flex-direction:column;row-gap:40px;
            & .services-item{
                display:flex;column-gap:50px;
                & .text{
                    flex:1;
                    & .heading{
                        margin:0 0 15px;
                        & a{font-size:32px;color:${color.black};line-height:42px;}
                    }
                    & .desc{margin:0;color:${color.lightBlack};font-size:16px;line-height:26px;}
                    & .lists{
                        display:flex;flex-direction:column;row-gap:12px;margin:0 0 0 20px;padding:0;
                        & .list{
                            & .link{
                                text-decoration:underline;color:${color.lightBlack};font-size:16px;line-height:26px;
                                &:hover{color:${color.DarkOrange};}
                            }
                        }
                    }
                }
                & .img{
                    flex:1;height:350px;width:100%;
                    & p{margin:0;position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;font-size:16px;color:${color.lightBlack}}
                    & .banner{width:100%;height:100%;object-fit:contain;overflow:hidden;}
                }
            }
            :nth-of-type(even){flex-direction:row-reverse;}
        }
    }
    @media (max-width:991px){
        & .service-section{
            & .service{
                & .services-item{
                    column-gap:30px;
                    & .text{
                        & .heading{
                            margin:0 0 10px;
                            & a{font-size:30px;line-height:40px;}
                        }
                        & .desc{font-size:15px;line-height:25px;margin:0 0 15px;}
                        & .lists{row-gap:10px;font-size:15px;}
                    }
                }
            }
        }
    }
    @media (max-width:767px){
        & .service-section{
            & .heading{font-size:15px;line-height:25px;}
            & .service{
                row-gap:30px;
                & .services-item{
                    flex-direction:column;align-items:center;row-gap:20px;
                    & .text{
                        & .heading{
                            margin:0 0 5px;
                            & a{font-size:24px;line-height:34px;}
                        }
                        & .desc{font-size:15px;line-height:25px;margin:0 0 15px;}
                        & .lists{row-gap:10px;font-size:15px;}
                    }
                    & .img{max-width:400px;}
                }
            }
            :nth-of-type(even){flex-direction:column;}
        }
    }
    @media (max-width:479px){
        & a{font-size:20px !important;line-height:30px !important;}
    }
`;


const Service = () => {
    const breadcrumbs = [
        {name: "Services", path:"/services"},
    ];
    const services = [
        { 
            id: 1,
            "name": "Website Development",
            "slug": "web-development-services",
            "short_description": "With us, get optimum solutions related to Web development services. Our experts provide genuine development packages with technical, design, and development support. We offer an environment where 24x7 support is given to the client for any kind of assistance.",
            "icon":"website-development",
            "banner":image.service1
        },
        {
            id: 2,
            "name": "eCommerce Development",
            "slug": "ecommerce-solutions",
            "short_description": "With more than 4 plus year of experience in eCommerce development. Our in-house team of professionals brings value by providing Magneto & Shopify platform to take your business to the next level in the market. It's the best time to get online now.",
            icon: "e-commerce",
            "banner": image.plceholder
        },
        {
            id: 3,
            "name": "Mobile App Development",
            "slug": "app-development-services",
            "short_description": "We have a passion to create dynamic, innovative, and user-friendly applications for our customers.  Our team of professionals are best in mobile app development, Strong Web backend development, UI experts, and project managers. We assure to deliver quality work in given deadlines.",
            icon: "mobile-app",
            "banner": image.service2
        },
        {
            id: 4,
            "name": "Website Design",
            "slug": "web-designing-services",
            "short_description": "Transform your website design in catchy design to hold the users on your platform. Let's connect and share your requirement to make it happen in reality. We have professional designers who can makeover your business website in the best way.",
            icon: "design",
            "banner": image.service3
        },
        {
            id: 5,
            "name": "Digital Marketing",
            "slug": "digital-marketing-services",
            "short_description": "We help hundreds of clients by designing ROI related Digital Marketing Campaigns to generate leads for businesses. It's easy to reach potential customers with specific locations to get new customers. Our digital marketers can help you to maximize your reach on social media.",
            icon: "marketing",
            "banner": image.service4
        }
    ]
    return (
        <Layout page="services">
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <ServiceWrap>
                <div className="service-section">
                    <div className="head">We offer a complete range of website designing, development and marketing services to both small start-ups to big enterprises at highly competitive rates. We tailor business plans and strategies for each client depending upon their individual business needs.</div>
                    <div className="service">
                        {services.map((service) => (
                            <div className="services-item" key={service.id}>
                                <div className="text">
                                    {service.name && (
                                        <h4 className="heading"><a href={`${c.BASE_URL}/${service.slug}`}>{service.name}</a></h4>
                                    )}
                                    {service.short_description && (
                                        <div className="desc" dangerouslySetInnerHTML={{__html:service.short_description}}/>
                                    )}
                                </div>
                                <div className="img">
                                    {!service.banner ? <img className="banner" src="/assets/images/GalleryImages/default.webp" alt="Banner"/>
                                        : <img className="banner" src={service.banner} alt="Banner" />
                                    }
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