import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import arrow from "../../assets/images/arrow.svg";
import image from "../../assets/Images";
import axios from "axios";
import { Link } from "react-router-dom";

const SolutionWrap = styled.div`
    max-width: 100%;width: ${c.width};margin: 0 auto;padding:0 20px 40px;display: flex;column-gap: 39px;

    .image {flex:1;
        .banner {
            width: 100%;max-height: 395px;object-fit: cover;
        }
    }
    .content {
        flex: 1;
        .heading {
            color: ${colors.black};font-size: 26px;line-height: 36px; margin:0 0 10px;
        }
        
        .desc {
            color: ${colors.lightBlack};font-size: 15px;line-height: 25px;margin: 0;
            & p{
                margin:0 0 15px;;
            }
        }
        .cta-button {
            display: inline-flex;
            a {
                color: ${colors.white};background: ${colors.black};padding: 10px 20px;border-radius: 8px;text-transform: uppercase;font-weight: 500;display: flex;align-items: center;gap: 6px;font-size: 12px;box-shadow:5px 10px 15px #2E2E2E33;
                .arrow {
                    width: 14px;height:10px;
                }
            }
        }
    }
    @media (max-width: 767px) {
        flex-direction: column; 
        .content {
            flex: 1;display: flex;flex-direction: column;row-gap: 28px;
            .heading {
                color: ${colors.black};font-size: 26px;line-height: 36px; 
            }
            
            .desc {
                font-size: 16px;line-height: 26px;
            }
            
        }
    };

    @media (max-width:479px){
        .content {
        flex: 1;display: flex;flex-direction: column;row-gap: 30px;
        .heading {
            font-size: 17px;line-height: 27px;
        }
        .desc {
            font-size: 12px;line-height: 22px;
        }
        .cta-button {
            a {
               padding: 8px 11px;font-size: 12px;
                .arrow {
                    width: 13px;
                }
            }
        }
    }
    };
`;

const Solution = () => {
    return (
        <SolutionWrap>
            <div className="image">
                <img className="banner" src={image.banner2} alt="Banner" />
            </div>
            {/* <div className="content">
                <div className="heading">
                    {about.heading}
                </div>
                    <div className="desc" dangerouslySetInnerHTML={{__html:about.description}}/>
                <div className="cta-button">
                    <Link to={about.buttonLink}>{about.buttonText}<span> <img className="arrow" src={arrow} alt="Arrow Icon" /></span></Link>
                </div>
            </div> */}
        </SolutionWrap>
    )
}

export default Solution;
