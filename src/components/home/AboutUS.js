import React from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import image from "../../assets/Images";
import { Link } from "react-router-dom";
import { arrowIcon } from "../../helpers/Icon";

const Wrapper = styled.div`
max-width:100%;width:${c.width};margin:0 auto;padding:0 20px 40px;display:flex;column-gap:39px;
& .image{
    flex:1;
    & .banner{width:100%;max-height:395px;object-fit:cover;}
}
& .content{
    flex:1;
    & .heading{color:${colors.black};font-size:26px;line-height:36px;margin:0 0 10px;}
    & .desc{
        color:${colors.lightBlack};font-size:16px;line-height:26px;
        & p{margin:0 0 10px;}
    }
    & .cta-button{
        display:flex;margin:30px 0 0;
        & .link{
            padding:0 20px;height:40px;border-radius:8px;text-transform:uppercase;display:flex;align-items:center;gap:6px;font-weight:500;font-size:14px; background:${colors.black};color:${colors.white};box-shadow:5px 10px 15px ${colors.shadowBlack};transition:all .3s;
            &:hover{
                background:${colors.orange};box-shadow:5px 10px 15px ${colors.shadowOrange};
            }
        }
    }
}
@media (max-width:767px) {
    flex-direction:column;align-items:center;padding:20px;row-gap:10px;
    & .image{max-width:500px;height:100%;}
    & .content{
        & .desc{
            & p{margin:0 0 10px;}
        }
        & .cta-button{
            margin:15px 0 0;
            & .link{
                padding:0 15px;font-size:13px;height:34px;
                & svg{width:17px;}
            }
        }
    }
};

@media (max-width:479px){
    & .content{
        & .heading{font-size:18px;line-height:28px;}
        & .desc{font-size:14px;line-height:24px;}
    }
};
`;

const AboutUs = () => {
    return (
        <Wrapper>
            <div className="image">
                <img className="banner" src={image.banner2} alt="Banner" />
            </div>
            <div className="content">
                <div className="heading">Maximize Your Business Via Innovative & Latest Technologies</div>
                <div className="desc">
                    <p> We handover the innovative and latest technologies that have the power to maximize your business. Our experts designed a proven digital marketing programs to drive maximum growth to your business. We proudly believe to provide the highest standards of feature-rich mobile/web solutions to empower our clients business. With years of experience & team of professionals successfully raise the technical excellence & highlight professionalism from us. Worked for beginners Entreprises and make them achieve their initial goals. We are generally known as the best digital marketing agency in the region who is handling oversea clients with our wide network in India.</p>
                    <p>Our major area of expertise in web designing, web development, search engine marketing, online marketing, search engine optimization, content marketing, email marketing, Social media ads, social media optimization, and e-commerce solution. Our team of developers, designers, digital marketing experts, content writer all are known for delivering the best results.</p><p>We collaborated with a certified team of professional best in their profession. In general, we worked and support various successful startups and large-scale enterprises by providing the best IT solutions. Our focus is to create and innovate new ideas and strategies for the success of our clients. As a result of high accuracy and transparency in the work, we able to make client achieve their desired goals. At Regius Technologies, you not only get the best IT Solutions but also received a culture where we maintain professionalism.</p>
                    <p>Our smart working style let you know who we are! We present cost-effective IT Solutions in broad ways across the globe. We stand for our clients and to make them achieve the best results organically. In fact, it's important to know that businesses do not only need hard work for success. It needs smart work and support of smart people to take the business to the next level. Fortunately, we do both at a genuine cost.</p>
                </div>
                <div className="cta-button">
                    <Link to="/about-us" className="link" >View More <span>{arrowIcon({width:19,height:14,fill:colors.white})}</span></Link>
                </div>
            </div>
        </Wrapper>
    )
}

export default AboutUs;
