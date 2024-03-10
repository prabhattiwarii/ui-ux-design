import React from "react";
import styled from "styled-components";
import color from "../../constants/Colors";
import c from "../../constants/Constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {arrowIcon,designIcon,eCommerceIcon,marketingIcon,mobileAppIcon,webDevelopmentIcon} from "../../helpers/Icon";

const Wrap = styled.div`
width:100%;max-width:${c.width};margin:0 auto;box-sizing:border-box;padding:40px 20px;display:flex;flex-direction:column;row-gap:30px;
& .content-section{
    display:flex;align-items:center;justify-content:space-between;column-gap:20px;
    & .left{
        flex:1;
        & .heading{font-size:32px;line-height:42px;font-weight:600;color:${color.black};margin:0 0 10px;}
        & .desc{
            max-width:900px;
            & p{margin:0;color:${color.lightBlack};}
        }
    }
    & .right{
        display:flex;
        & .link{
            padding:0 20px;height:40px;border-radius:8px;text-transform:uppercase;display:flex;align-items:center;gap:6px;font-weight:500;font-size:14px; background:${color.black};color:${color.white};box-shadow:5px 10px 15px ${color.shadowBlack};transition:all .3s;
            &:hover{background:${color.orange};box-shadow:5px 10px 15px ${color.shadowOrange};}
        }
    }
}

& .service-section{
    overflow:hidden;
    & .service-card{
        color:${color.lightDark};text-decoration:none;display:flex;flex-direction:column;padding:30px 20px;margin:15px;border-radius:26px;overflow:hidden;box-shadow:0px 3px 20px #00000029;transition:all 0.2s ease 0s;height:calc(100% - 51px);
        & .icon{
            align-self:center; cursor:pointer;margin:0px 0px 10px;
            & .svg{width:80px;height:80px;fill:${color.orange};}
        }
        & .title{font-size:18px;color:${color.lightDark};font-weight:600;align-self:center;cursor:pointer;margin:0px 0px 10px;text-align:center;}
        & .text{font-size:14px;line-height:22px;text-align:center;margin:0 0 10px;}
        & .read-more{color:${color.orange};font-size:14px;cursor:pointer;text-align:center;}
        &:hover{
            background:${color.orange};
        & .icon{
            & .svg{fill:${color.white};}
        }
        & .title{color:${color.white};}
        & .text{color:${color.white};}
    }
}
}

@media (max-width:991px){
& .content-section{
    & .left{
        & .heading{font-size:30px;line-height:40px;}
    }
}
}

@media (max-width:767px){
padding:20px;
& .content-section{
    flex-direction:column;row-gap:15px;align-items:flex-start;
    & .left{
        & .heading{font-size:24px;line-height:34px;}
        & .desc{font-size:16px;}
    }
    & .right{
        & .link{
            padding:0 12px;font-size:13px;height:34px;
            & svg{width:17px;height:14px;}
        }
    }
}
}

@media (max-width:479px){
& .content-section{
    & .left{
        & .heading{font-size:20px;line-height:28px;}
        & .desc{font-size:14px;}
    }
}
}

`;


const ServiceCard = () => {
    const data = [
        {"id": 1,"name": "Website Development","slug": "web-development-services","description": "With us, get optimum solutions related to Web development services. Our experts provide genuine development packages with technical, design, and development support. We offer an environment where 24x7 support is given to the client for any kind of assistance.",icon:webDevelopmentIcon},
        {"id": 2,"name": "eCommerce Development","slug": "ecommerce-solutions","description": "With more than 4 plus year of experience in eCommerce development. Our in-house team of professionals brings value by providing Magneto & Shopify platform to take your business to the next level in the market. It's the best time to get online now.",icon:eCommerceIcon},
        {"id": 3,"name": "Mobile App Development","slug": "app-development-services","description": "We have a passion to create dynamic, innovative, and user-friendly applications for our customers.  Our team of professionals are best in mobile app development, Strong Web backend development, UI experts, and project managers. We assure to deliver quality work in given deadlines.",icon:mobileAppIcon},
        {"id": 4,"name": "Website Design","slug": "web-designing-services","description": "Transform your website design in catchy design to hold the users on your platform. Let's connect and share your requirement to make it happen in reality. We have professional designers who can makeover your business website in the best way.",icon:designIcon},
        {"id": 5,"name": "Digital Marketing","slug": "digital-marketing-services","description": "We help hundreds of clients by designing ROI related Digital Marketing Campaigns to generate leads for businesses. It's easy to reach potential customers with specific locations to get new customers. Our digital marketers can help you to maximize your reach on social media.",icon:marketingIcon}
    ]
    const option = {
        type: "loop",
        perPage: 4,
        autoplay: "true",
        interval: 6000,
        pagination: false,
        arrows: true,
        loop: true,
        breakpoints: {
            1200: { perPage: 3 },
            867: { perPage: 2 },
            600: { perPage: 1 },
        },
    }
    return (
        <Wrap>
            <div className="content-section">
                <div className="left">
                    <div className="heading">We’re everything you’re looking for</div>
                    <div className="desc">we are a one stop shop to cater all your web needs. We promote transparency and dexterity through our web IT services. We satisfy our clients through well-built websites, incredible applications and successful businesses.</div>
                </div>
                <div className="right">
                    <a className="link" href={`${c.BASE_URL}/services`}>View all services {arrowIcon({ width: 20, height: 20, fill: color.white })}</a>
                </div>
            </div>
            <div className="service-section">
                <Splide options={option}>
                    {data.map((service) => (
                        <SplideSlide key={service.id}>
                            <div className="service-card">
                                {service.icon && (
                                    <a href={`${c.BASE_URL}/${service.slug}`} className="icon">{(service.icon({fill:color.orange}))}</a>
                                )}
                                {service.name && (
                                    <a href={`${c.BASE_URL}/${service.slug}`} className="title">{service.name}</a>
                                )}
                                {service.description && (
                                    <div className="text" dangerouslySetInnerHTML={{ __html: service.description }} />
                                )}
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </Wrap>
    );
};

export default ServiceCard;
