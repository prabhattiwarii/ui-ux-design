import React, { useState } from "react";
import color from "../constants/Colors";
import c from "../constants/Constant";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import image from "../assets/Images";
import moment from "moment/moment";
import { timeIcon, userIcon } from "../helpers/Icon";
import placeIcon from "../assets/images/GalleryImages/default.webp"
import BreadCrumbs from "../BreadCrumbs";


const Wrap = styled.div`
width: 100%;max-width:${c.width};margin:0 auto;display:flex;flex-direction:column;gap:20px;padding:40px 20px;
& .post-head{
    display:flex;justify-content:center;padding:50px;position:relative;
    &:before{content:"";position:absolute;top:50%;width:calc(50% - 50px);text-align:center;left:0;border: 1px solid ${color.orange};}
    &:after{position:absolute;content:"";top:50%;width:calc(50% - 50px);text-align:center;right:0;border: 1px solid ${color.orange};}
    & .post-text{display:block;text-align:center;background:${color.DarkOrange};color:${color.white};padding:6px;position:relative;text-transform:uppercase;width:135px;font-size:20px;font-weight:600;z-index:1;}
}
& .blog-section{
    display:flex;flex-wrap:wrap;gap:30px;
    & .blog-wrap{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 2px;border-radius:16px;width:calc(25% - 22.5px);
        & .date{font-size:14px;color:${color.lightBlack};padding:0 16px;}
        & .img-link{
            display:flex;position:relative;width:100%;height:200px;color:${color.black};
            & p{margin:0;position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;font-size:16px;color:${color.lightBlack}}
            & .image{position:absolute;width:100%;height:100%;border-top-left-radius:16px;border-top-right-radius:16px;object-fit:cover;}
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
& .load-more-button{
    width:100px;height:30px;color:${color.white};background:${color.black};border:none;cursor:pointer;border-radius:8px;transition:.2s;margin:0 auto;
    &:hover{color:${color.white};background:${color.orange};}
}

@media (max-width:991px){
    & .blog-section{
        gap:20px;
        & .blog-wrap{
            width:calc(33.33% - 13.3px);
            & .blog-content{
                & .title{font-size:14px}
            }
        }
    }
}

@media(max-width:767px){
    & .blog-section{
        & .blog-wrap{width:calc(50% - 10px)}
    }
}
@media(max-width:479px){
    & .blog-section{
        & .blog-wrap{width:100%;}
    }
}
`;

const Blog = () => {
    const [isLoading, setisLoading] = useState(true);
    const handleImageLoad = () => {
        setisLoading(false);
    }
    const posts = [
        {id: 1,author: "Administration",name: "Digital Marketing Company in India","slug": "digital-marketing-company-india",thumbnail:image.blog1,"description": "Best Digital Marketing Company  &ndash; Online marketing is a trend for today for all companies of different domains. In...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 2,author: "Administration",name: "Web Development Company in India","slug": "web-development-company-india",thumbnail:image.blog2,"description": "Web Designing &amp; Web Development Company  - In today&rsquo;s world, having a website is an essential business tactic...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 3,author: "Administration",name: "SEO Company in India","slug": "seo-company-india",thumbnail:image.blog3,"description": "SEO Company in India  &ndash; Online presence is essential to crab more clients and get a greater deal for your business...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 4,author: "Administration",name: "PPC Company in India","slug": "ppc-company-india",thumbnail:image.blog4,"description": "PPC Advertising Services &ndash; Regius Technologies is a Leading PPCD Company that offers best PPC advertisement and ma...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 5,author: "Administration",name: "Social Media Marketing Company in India","slug": "social-media-marketing-company-india",thumbnail:image.blog2,"description": "Social Media Marketing Service Company  &ndash; Billions of people are online today with Facebook having over 2 billion...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 6,author: "Administration",name: "Online Reputation Management Company in India","slug": "online-reputation-management-company-india",thumbnail:image.blog4,"description": "Online Reputation Management Company  &ndash; With online business making its way, customers have made their way ensurin...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 7,author: "Administration",name: "Mobile App Development Company In Chandigarh","slug": "mobile-app-development-company-chandigarh",thumbnail:image.blog3,"description": "Mobile App Development Company In Chandigarh &ndash; With 3.2 billion smartphone users online, has your own application...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 8,author: "Administration",name: "iPhone Application Development Company In Chandigarh","slug": "iphone-application-development-company-chandigarh",thumbnail:image.blog2,"description": "iPhone App Development Company in Chandigarh &ndash; iPhone is the largest used smart phone with 700 million having sold...","created_at": "2019-12-27T07:18:43.000Z"},
        {id: 9,author: "Sameer",name: "Digital Marketing Tips for Real Estate","slug": "digital-marketing-tips-real-estate","description": "For real estate, digital marketing is quite a lot cost-friendly. By means of digital marketing tips for real estate, the...","created_at": "2021-10-09T10:22:27.000Z"},
        {id: 10,author: "Sameer",name: "Digital Marketing Tips for Startups","slug": "digital-marketing-tips-for-startups",thumbnail:image.blog4,"description": "In case you are running a startup, the key to your growth is marketing of your business &ndash; and the way you set your...","created_at": "2021-10-05T20:50:30.000Z"},
    ]
    const breadcrumbs = [
        {name: "Blog", path:"/blog"},
    ];

    return (
        <Layout page="blog">
            <BreadCrumbs breadcrumbs={breadcrumbs}/>
            <Wrap>
            <div className="blog-section">
                {posts.map((blog) => (
                    <div className="blog-wrap" key={blog.id}>
                        <a className="img-link" href={`${c.BASE_URL}/${blog.slug}`}>
                            {isLoading ? "" :(<p>Loading...</p>)}  
                            <img className="image" src={blog.thumbnail || placeIcon} alt={blog.slug} onLoad={handleImageLoad}/>
                        </a>
                        <div className="blog-content">
                            <div className="blog-about">
                                {blog.author && (
                                    <div className="item">
                                        {userIcon({ width: "14", height: "14", fill: color.DarkOrange })}
                                        <span>{blog.author}</span>
                                    </div>
                                )}
                                {blog.created_at && (
                                    <div className="item">
                                        {timeIcon({ with: "14", height: "14", fill: color.DarkOrange })}
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
                ))}
            </div>
            </Wrap>
        </Layout>
    );
};

export default Blog;
