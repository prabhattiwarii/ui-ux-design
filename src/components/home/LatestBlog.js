import React, { useState } from "react";
import styled from "styled-components";
import color from "../../constants/Colors";
import c from "../../constants/Constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { arrowIcon, timeIcon, userIcon } from "../../helpers/Icon";
import moment from "moment/moment";
import placeIcon from "../../assets/images/GalleryImages/default.webp"
import image from "../../assets/Images";

const Wrap = styled.div`
width:100%;max-width:${c.width};margin:0 auto;box-sizing:border-box;padding:40px 20px 80px;display:flex;flex-direction:column;row-gap:30px;
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
    & .link{
        padding:0 20px;height:40px;border-radius:8px;text-transform:uppercase;display:flex;align-items:center;gap:6px;font-weight:500;font-size:14px; background:${color.black};color:${color.white};box-shadow:5px 10px 15px ${color.shadowBlack}s;transition:all .3s;
        &:hover{background:${color.orange};box-shadow:5px 10px 15px ${color.shadowOrange};}
    }
}

& .blog-section{
    overflow:hidden;
    & .blogwrap{
        display:flex;flex-direction:column;box-shadow:0 0 12px #0000002b;height:calc(100% - 26px);margin:15px;border-radius:25px;
        & .date{font-size:14px;color:${color.lightBlack};padding:0 16px;}
        & .img-link{
            display:flex;position:relative;width:100%;height:200px;color:${color.black};
            & p{margin:0;position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;font-size:16px;color:${color.lightBlack}}
            & .image{position:absolute;width:100%;height:100%;object-fit:cover;border-top-left-radius:25px;border-top-right-radius:25px;}
        }
        & .blog-content{
            padding:20px;
            & .blog-about{
                display:flex;align-items:center;justify-content:space-between;column-gap:10px;margin:0 0 10px;
                & .item{display:flex;font-size:13px;column-gap:3px;align-items:center;}
            }
            & .title{font-size:15px;line-height:21px;font-weight:600;color:${color.black};margin:0px 0px 10px;cursor:pointer;}
            & .blog-desc{font-size:14px;line-height:22px;color:${color.lightBlack};}
        }
    }
}


@media (max-width:767px){
    padding:20px 20px 40px;
    & .content-section{
        align-items:flex-start;flex-direction:column;row-gap:15px;
        & .left{
            width:100% !important;
            & .heading{font-size:24px;line-height:34px;}
        }
        & .link{
            padding:0 13px;height:37px;
            & svg{width:17px;}
        }
    }
}

@media (max-width:479px){
    & .content-section{
        & .left{
            & .heading{font-size:20px;line-height:28px;margin:0 0 5px;}
            & .desc{font-size:14px;line-height:24px;}
        }
        & .link{padding:0 12px;font-size:13px;height:34px;}
    }
}
`;


const LatestBlog = () => {
    const [isLoading, setisLoading] = useState(true);
    const handleImageLoad = () => {
        setisLoading(false);
    }
    const data = [
          {"id": 1,"author": "Administration","name": "Digital Marketing Company in India","slug": "digital-marketing-company-india",thumbnail:image.blog1,"description": "Best Digital Marketing Company  &ndash; Online marketing is a trend for today for all companies of different domains. In...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 2,"author": "Administration","name": "Web Development Company in India","slug": "web-development-company-india",thumbnail:image.blog2,"description": "Web Designing &amp; Web Development Company  - In today&rsquo;s world, having a website is an essential business tactic...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 3,"author": "Administration","name": "SEO Company in India","slug": "seo-company-india",thumbnail:image.blog3,"description": "SEO Company in India  &ndash; Online presence is essential to crab more clients and get a greater deal for your business...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 4,"author": "Administration","name": "PPC Company in India","slug": "ppc-company-india",thumbnail:image.blog4,"description": "PPC Advertising Services &ndash; Regius Technologies is a Leading PPCD Company that offers best PPC advertisement and ma...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 5,"author": "Administration","name": "Social Media Marketing Company in India","slug": "social-media-marketing-company-india",thumbnail:image.blog2,"description": "Social Media Marketing Service Company  &ndash; Billions of people are online today with Facebook having over 2 billion...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 6,"author": "Administration","name": "Online Reputation Management Company in India","slug": "online-reputation-management-company-india",thumbnail:image.blog4,"description": "Online Reputation Management Company  &ndash; With online business making its way, customers have made their way ensurin...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 7,"author": "Administration","name": "Mobile App Development Company In Chandigarh","slug": "mobile-app-development-company-chandigarh",thumbnail:image.blog3,"description": "Mobile App Development Company In Chandigarh &ndash; With 3.2 billion smartphone users online, has your own application...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 8,"author": "Administration","name": "iPhone Application Development Company In Chandigarh","slug": "iphone-application-development-company-chandigarh",thumbnail:image.blog2,"description": "iPhone App Development Company in Chandigarh &ndash; iPhone is the largest used smart phone with 700 million having sold...","created_at": "2019-12-27T07:18:43.000Z"},
          {"id": 9,"author": "Sameer","name": "Digital Marketing Tips for Real Estate","slug": "digital-marketing-tips-real-estate","description": "For real estate, digital marketing is quite a lot cost-friendly. By means of digital marketing tips for real estate, the...","created_at": "2021-10-09T10:22:27.000Z"},
          {"id": 10,"author": "Sameer","name": "Digital Marketing Tips for Startups","slug": "digital-marketing-tips-for-startups",thumbnail:image.blog4,"description": "In case you are running a startup, the key to your growth is marketing of your business &ndash; and the way you set your...","created_at": "2021-10-05T20:50:30.000Z"},
        ]
      
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
                    <div className="heading">Latest Blog Posts</div>
                    <div className="desc">Sed porttitor hendrerit dui, in blandit eros volutpat et. Maecenas aliquet dictum leo in vestibulum. Aliquam a vestibulum neque, ac porta lectus. Vivamus non felis sit amet urna ultrices gravida</div>
                </div>
                <a className="link" href={`${c.BASE_URL}/blog`}>View all blog posts {arrowIcon({width:19,height:14,fill:color.white})}</a>
            </div> 
            <div className="blog-section">
                {data && (
                    <Splide options={option} className="splide">
                        {data.map((blog) => (
                            <SplideSlide key={blog.id}>
                                <div className="blogwrap">
                                    <a className="img-link" href={`${c.BASE_URL}/${blog.slug}`}>
                                        {isLoading ? "" :(<p>Loading...</p>)}  
                                        <img className="image" src={blog.thumbnail || placeIcon} alt={blog.slug} onLoad={handleImageLoad}/>
                                    </a>
                                    <div className="blog-content">
                                        <div className="blog-about">
                                            {blog.author && (
                                                <div className="item">
                                                    {userIcon({width:"14",height:"14", fill:color.DarkOrange})}
                                                    <span>{blog.author}</span>
                                                </div>
                                            )}
                                            {blog.created_at && (
                                                <div className="item">
                                                    {timeIcon({with:"14",height:"14",fill:color.DarkOrange})} 
                                                    <span>{moment(blog.created_at).format('ll')}</span>
                                                </div>
                                            )}
                                        </div>
                                        {blog.name && (
                                            <a href={`${c.BASE_URL}/${blog.slug}`} className="title">{blog.name}</a>
                                        )}
                                        {blog.description && (
                                            <div className="blog-desc" dangerouslySetInnerHTML={{__html:blog.description}}/>
                                        )}
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
