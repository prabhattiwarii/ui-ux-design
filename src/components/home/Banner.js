import React from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import arrow from "../../assets/images/arrow.svg";
import image from "../../assets/Images";

const BannerWrap = styled.div`
  width: 100%;background: url(${image.banner1});background-repeat: no-repeat;background-size: 60%;min-height: 420px;background-position: bottom right;display: flex;align-items: center;position:relative;

  & .banner {
        max-width: ${c.width};width: 100%;margin: 0 auto;padding:0 20px;

        & .content {
            max-width: 554px;
            & .heading {
                color: ${colors.black};margin: 0 0 20px;font-size: 42px;line-height: 52px;z-index: 1;
                & .text-color {
                    color: ${colors.orange};
                }
            }
            & .text {
                color: ${colors.lightBlack};margin: 0 0 20px;line-height: 26px;z-index: 1;font-size:16px;font-weight: 500;width:80%;
            }
            & .banner-btn {
                display: flex;column-gap: 12px;z-index: 1;
                .link-1,
                .link-2 {
                    padding: 10px 30px;border-radius: 8px;text-transform: uppercase;display: flex;align-items: center;gap: 6px;font-weight:500;font-size:14px;
                    &.link-1 {
                        background: ${colors.black};color: ${colors.white};box-shadow: 5px 10px 15px #2E2E2E33;
                    }
                    &.link-2 {
                        background: ${colors.orange};color: ${colors.white};box-shadow: 5px 10px 15px #EBAC2F4D;
                    }
                    & .arrow {
                        width: 14px;height:10px;
                    }
                }
            }     
        }
    }

    @media (max-width:1620px){
        min-height: 500px;
    }
    @media (max-width:1420px){
        min-height: 440px;
    }
    @media (max-width: 1200px) {
        min-height: 400px;
        & .banner {
            & .content {
                & .heading {
                    font-size: 41px;line-height: 51px;
                }
                & .banner-btn {
                    .link-1,
                    .link-2 {
                        padding: 9px 28px;
                    }
                }
            }
        }
    }

    @media (max-width: 991px) {
       min-height: 320px;
        & .banner {
            & .content {
                max-width: 391px;
                & .heading {
                    font-size: 29px;line-height: 39px;
                }
                & .text {
                    width:100%;
                }
                & .banner-btn {
                    column-gap:4px;
                & .link-1,
                & .link-2 {
                    padding:9px 5px;
                }
                }
            }
        }
    }

    @media (max-width: 767px) {
        background-size: cover;background-position: center;min-height:480px;
        & .banner{
            & .overlay{
            position:absolute;background:#ffffff8c;top:0;bottom:0;left:0;right:0;
            }
            & .content{
                display:flex;flex-direction:column;max-width:100%;lign-items:center;text-align:center;
                & .heading{font-size: 32px;line-height: 42px;}
                & .text{width:100%;margin:0 0 10px;}
                & .banner-btn{
                    column-gap: 12px;
                    & .link-1,
                    & .link-2 {padding: 12px;}
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
                    <h1 className="heading">
                        We Create <span className="text-color"> PERFECT</span> Brand Goods{" "}
                        <span className="text-color">VALUE</span>
                    </h1>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed mi vitae lacus rhoncus fermentum quis at tellus.
                    </div>
                    <div className="banner-btn">
                        <a className="link-1" href="/">
                            View All Service <span> <img className="arrow" src={arrow} alt="" /></span>
                        </a>
                        <a className="link-2" href="/">
                            View All Service<span> <img className="arrow" src={arrow} alt="" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </BannerWrap>
    );
};

export default Banner;
