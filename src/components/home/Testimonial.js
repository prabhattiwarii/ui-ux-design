import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import image from "../../assets/Images";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";
import c from "../../constants/Constant";

const Wrap = styled.div`
    width:100%;background:url(${image.testimonialbg});background-size: 67%;background-position:right;background-repeat: no-repeat;padding:80px 20px;margin: 0 auto;
    & .testimonial{
        max-width: 1000px;width:100%;margin:0 auto;display: flex;column-gap:30px;
        & .image{
            max-width: 360px;
            & .testimonial-img {
                width: 100%;display:flex;
            }
        }
        & .content {
        width:70%;max-width:100%;overflow:hidden;
            & .heading {
                color: ${colors.lightDark};font-size: 32px;line-height:42px;letter-spacing: 1.05px; font-weight:600;margin:0 0 10px
            }
            & .text {
                & .review {
                    color: ${colors.gray};font-size: 16px;line-height: 26px;margin: 0;font-style:italic ;margin:0 0 10px;
                }
                & .rating{
                    display:flex;width:100%;max-width:100%;position:relative;margin:0 0 15px;
                    & .empty-star{
                        display:flex;align-items:center;fill:${colors.DarkOrange}
                    }
                }
                & .client-information{
                    display: flex;align-items: center;column-gap: 10px;
                    & .client-img{
                        width:50px;height:50px;display:flex;position:relative;
                        & img{
                            position: absolute;height: 100%;width: 100%;inset: 0px;object-fit: cover;color: transparent;border-radius:100%;
                        }
                    }
                    & .client-info{
                        & .name{
                            color:${colors.orange};
                        }
                        & .city{
                            font-size:14px;
                        }
                    }
                }
            }
        }

        & .splide{
            & .splide__arrow--prev{
                left:-2em;
                top: 4rem;
            }
            & .splide__arrow--next{
                right: -1em;
                top: 4rem;
            }
        }
    }

    @media (max-width: 991px){
        & .testimonial{
            & .content {
                & .heading {
                    font-size: 28px;line-height:38px;
                }
            }
        }
    }
    @media (max-width: 767px) {
        background-size: 100%;
        & .testimonial{
            flex-direction: column;align-items: center;row-gap: 20px;
            & .content{
                width: -webkit-fill-available;text-align:center;
                & .heading {
                    font-size: 24px;line-height:34px;
                }
                & .text{
                    & .rating{
                        justify-content: center;
                    }
                    & .client-information{
                        justify-content: center;
                    }
                }
            }
        }
    }
    @media (max-width: 479px) {
        & .testimonial{
            & .image{
                width:80%;display:flex;justify-content:center;
            };
            & .content{
                row-gap:0px;flex-direction:column;
                & .heading{
                    font-size:23px;line-height:33px;
                }
                & .text{
                    & .desc{
                        font-size:16px;line-height:26px;
                    }
                    & .name{
                        font-size:14px;
                        & .role{
                            font-size:13px;
                        }
                    }
                }
            }
        }
    };
`;

const Testimonial = () => {


    const [testimonial, SetTesimonial] = useState({});
    useEffect(()=>{
        getTesti();
    },[])

    const getTesti =()=>{
        return axios.get(c.BASE_URL)
        .then((res)=>{
            if(res.status === 200){
                const testiData = res.data.testimonials;
                SetTesimonial(testiData);
            }else {
                console.error('Error:', res.statusText);
              }
            })
            .catch((error) => {
              console.error('Network Error:', error);
        });
    }
    const option ={ 
        type: "loop",
        arrows:false, 
        perPage: 1,
        autoplay:"true",
        interval: 6000,
        loop: true,
        pagination:false,
    }
    return (
        <Wrap>
            <div className="testimonial">
                <div className="image">
                    <img className="testimonial-img" src={image.testimonialimg} alt="Testimonl" />
                </div>
                <div className="content">
                    <div className="heading">{testimonial.heading}</div>
                    <Splide options={option} className="splide">
                    {Array.isArray(testimonial.data) && testimonial.data.map((msg)=>(
                        <SplideSlide className="text">
                            <div className="review">{msg.message}</div>
                            <div className="rating">
                                <div class="empty-star">
                                    <svg viewBox="0 0 24 24" width="20" height="20"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"></path></svg>
                                    <svg viewBox="0 0 24 24" width="20" height="20"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"></path></svg>
                                    <svg viewBox="0 0 24 24" width="20" height="20"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"></path></svg>
                                    <svg viewBox="0 0 24 24" width="20" height="20"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"></path></svg>
                                    <svg viewBox="0 0 24 24" width="20" height="20"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"></path></svg>
                                </div>
                            </div>
                            <div className="client-information">
                                <div className="client-img">
                                    <img src={msg.author_pic || image.plceholder} alt="" />
                                </div>
                                <div className="client-info">
                                    <div className="name">
                                        -{msg.name}
                                    </div>
                                    <div className="city">
                                        {msg.city}
                                    </div>
                                </div>
                            </div> 
                        </SplideSlide>
                        ))}
                    </Splide>  
                </div>
            </div>
        </Wrap>
    )
}

export default Testimonial;
