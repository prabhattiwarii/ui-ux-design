import React from "react";
import styled from "styled-components";
import color from "../../constants/Colors";
import c from "../../constants/Constant";
import {arrowIcon} from "../../helpers/Icon";
import banner from "../../assets/images/banner-img.png"

const BannerWrap = styled.div`
  width:100%;background:url(${banner});background-repeat:no-repeat;background-size:60%;min-height:420px;background-position:bottom right;display:flex;align-items:center;position:relative;
  & .banner{
        max-width:${c.width};width:100%;margin:0 auto;padding:0 20px;
        & .content{
            max-width:554px;
            & .heading{
                color: ${color.black};margin: 0 0 20px;font-size: 42px;line-height:52px;z-index:1;
                & .text-color{color:${color.orange};}
            }
            & .text{color:${color.lightBlack};margin:0 0 20px;line-height:26px;z-index:1;font-size:16px;font-weight:500;width:80%;}
            & .banner-btn{
                display:flex;column-gap:12px;z-index:1;
                & .link{
                    padding:0 20px;height:40px;border-radius:8px;text-transform:uppercase;display:flex;align-items:center;gap:6px;font-weight:500;font-size:14px;cursor:pointer;background:${color.black};color:${color.white};box-shadow:5px 10px 15px ${color.shadowBlack};border:none;transition:all .3s;
                    &:hover{background:${color.orange};color:${color.white};box-shadow:5px 10px 15px ${color.shadowOrange};}
                }
            }     
        }
    }

    @media (max-width:1200px){
        min-height:400px;
        & .banner{
            & .content{
                & .heading{font-size:41px;line-height:51px;}
            }
        }
    }

    @media (max-width:991px){
       min-height:320px;
        & .banner{
            & .content{
                max-width:391px;
                & .heading{font-size:29px;line-height:39px;}
                & .text{width:100%;}
                & .banner-btn{
                    column-gap:8px;
                    & .link{
                        padding:0 10px;height:34px;font-size:12px;
                        & svg{width:17px;}
                    }
                }
            }
        }
    }

    @media (max-width:767px){
        background-size:cover;background-position:center;min-height:480px;
        & .banner{
            & .overlay{position:absolute;background:#ffffff8c;top:0;bottom:0;left:0;right:0;}
            & .content{
                display:flex;flex-direction:column;max-width:100%;align-items:center;text-align:center;
                & .heading{font-size:32px;line-height:42px;margin:0 0 12px;}
                & .text{width:100%;margin:0 0 10px;}
                & .banner-btn{
                    column-gap:12px;justify-content:center;
                    & .link{padding:0 15px;font-size:13px;}
                }
            }

        }
    }

    @media(max-width:479px){
        & .banner{
            & .content{
                & .heading{font-size:28px;line-height:38px;}
                & .text{width:100%;font-size:14px;}
            }
        }
    }

    @media(max-width:430px){
        background-size:cover;background-position:center;min-height:480px;
        & .banner{
            & .content{
                & .heading{font-size:28px;line-height:38px;}
                & .text{width:100%;margin:0 0 10px;font-size:14px;}
                & .banner-btn{
                    row-gap:12px;flex-direction:column;
                }
            }

        }
    }
`;

const Banner = () => {
   
    return (
        <BannerWrap>
            <div className="banner">
            <div className="overlay"></div>
                <div className="content">
                    <h1 className="heading">We Create <span className="text-color">PERFECT</span> Brand Goods<span className="text-color"> VALUE</span></h1>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed mi vitae lacus rhoncus fermentum quis at tellus.</div>
                    <div className="banner-btn">
                        <a className="link" href={`${c.BASE_URL}/services`}>View All Service {arrowIcon({width:19,height:14,fill:color.white})}</a>
                        <a className="link" href={`${c.BASE_URL}/services`}>View All Service {arrowIcon({width:19,height:14,fill:color.white})}</a>
                    </div>
                </div>
            </div>
        </BannerWrap>
    );
};

export default Banner;
