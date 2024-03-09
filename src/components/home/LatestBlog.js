import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import arrow from "../../assets/images/arrow.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";

const Wrap = styled.div`
    width:100%;max-width: ${c.width};margin: 0 auto;box-sizing:border-box;padding:40px 20px;display: flex;flex-direction: column;row-gap: 30px;
    & .content-section {
        display: flex;align-items: center;justify-content: space-between;column-gap:20px;
        & .left {
            flex:1 1 0%;
            & .heading {
                font-size: 32px;line-height:42px;font-weight: 600;color: ${colors.black};margin:0 0 10px;
            }
            & .desc {
                color: ${colors.lightBlack};max-width:1000px;
                & p{
                  margin:0;
                }
            }
        };
        & .right {
            text-transform: uppercase;display: flex;align-items: center;
            & .link-2 {
                background: ${colors.black};color: ${colors.white};padding: 10px 20px;border-radius: 8px;font-weight: 500;font-size: 12px;gap:6px;display:flex;align-items:center;box-shadow:5px 10px 15px #2E2E2E33;
                & .arrow {
                    width: 14px;height:10px;
                }
            }
        };
    }

    & .blog-section {
        overflow:hidden;
        & .blogwrap {
            display:flex;flex-direction:column;box-shadow: 0 0 12px #0000002b;border-radius: 16px;height: calc(100% - 26px);margin:15px;
            & .date {
            font-size: 14px;color: ${colors.lightBlack};padding: 0 16px;
            }
            & .img {
                display: flex;position: relative;width: 100%;height: 200px;cursor: pointer;
                & .image{
                    position:absolute;width:100%;height:100%;border-radius: 28px;border-bottom-left-radius: 100% 107px;border-bottom-right-radius: 100% 107px;object-fit:cover;
                }
            }
            & .blog-content{
                padding:20px;
                & .blog-about{
                    display:flex;align-items:center;justify-content: space-between;column-gap: 10px;margin:0 0 10px;
                    & .item{
                        display: flex;font-size: 13px;column-gap: 3px;align-items: center;
                    }
                }
                & .title {
                    font-size: 15px;line-height: 21px;font-weight: 600;color: ${colors.black};margin: 0px 0px 10px;cursor: pointer;
                }
                & .blog-desc {
                    font-size: 14px;line-height: 22px;color: ${colors.lightBlack};
                }
            }
        }
        & .splide{
            & .splide__arrow--prev{
                left:1px;background:${colors.white};box-shadow:0 0 2px #00000029;
                &:hover{
                    background:${colors.DarkOrange};
                }
                }
            & .splide__arrow--next{
                right: 1px;background:${colors.white};box-shadow:0 0 2px #00000029;
                &:hover{
                    background:${colors.DarkOrange}
                }
            }
        }
    }

  @media (max-width: 767px) {
    & .content-section {
      align-items: flex-start;flex-direction: column;row-gap: 21px;
      & .left {
        width: 100% !important;
      }
    }
  }
  @media (max-width: 479px) {
    & .content-section {
      & .left {
        & .heading {
          font-size: 27px;
        }
        & .desc {
          font-size: 15px;line-height: 25px;
        }
      }
      & .right {
        & .link-2 {
          font-size: 13px;padding: 8px 13px;
        }
      }
    }
  }
`;

const LatestBlog = () => {

    const [blogData, setBlogData] = useState({});
    useEffect(() => {
        getBlog();
    }, [])

    const getBlog = () => {
        return axios.get(c.BASE_URL)
            .then((res) => {
                if (res.status === 200) {
                    const recentPosts = res.data.recentPosts;
                    setBlogData(recentPosts);
                } else {
                    console.error('Error:', res.statusText);
                }
            })
            .catch((error) => {
                console.error('Network Error:', error);
            });
    };

    const option = {
        type: "loop",
        perPage: 4,
        autoplay: "true" ,
        interval: 6000,
        pagination:false, 
        arrows:true, 
        loop :true,
        breakpoints: {
            1200: {perPage: 3},
            867: {perPage: 2},
            600: {perPage: 1},
        },
    }
    return (
        <Wrap>
            <div className="content-section">
                <div className="left">
                    <div className="heading">{blogData.heading}</div>
                    <div className="desc" dangerouslySetInnerHTML={{ __html: blogData.description }} />
                </div>
                <div className="right">
                    <a className="link-2" href={blogData.buttonLink}>
                        {blogData.buttonText}
                        <span>
                            <img className="arrow" src={arrow} alt="" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="blog-section">
                {Array.isArray(blogData.data) && (
                    <Splide options={option} className="splide">
                        {blogData.data.map((blog) => (
                            <SplideSlide key={blog.id}>
                                <div className="blogwrap">
                                    <div className="img">
                                        <img className="image" src={blog.thumbnail} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-about">
                                            <div className="item">
                                                <svg viewBox="0 0 512 512" with="14" height="14" fill={colors.DarkOrange}><g><circle cx="256" cy="128" r="128"></circle><path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"></path></g></svg>
                                                <span>{blog.author}</span>
                                            </div>
                                            <div className="item">
                                                <svg viewBox="0 0 24 24" with="14" height="14" fill={colors.DarkOrange}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm2.5,16.33c-.157,.091-.329,.134-.499,.134-.346,0-.682-.179-.867-.5l-2-3.464c-.088-.152-.134-.324-.134-.5V6c0-.552,.447-1,1-1s1,.448,1,1v5.732l1.866,3.232c.276,.478,.112,1.09-.366,1.366Z"></path></svg>
                                                <span>{c.currentYearDate}</span>
                                            </div>
                                        </div>
                                        <div className="title">{blog.name}</div>
                                        <div className="blog-desc">{blog.description}</div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                )}
            </div>
        </Wrap>
    );
};

export default LatestBlog;
