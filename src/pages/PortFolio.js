import React, {useState } from "react";
import styled from "styled-components";
import c from "../constants/Constant";
import color from "../constants/Colors";
import Layout from "../components/layout/Layout";
import BreadCrumbs from "../BreadCrumbs";
import image from "../assets/Images"


const Wrapper = styled.div`
    width:100%;max-width:${c.width};margin:0 auto;padding:40px 20px 80px;display:flex;flex-direction:column;row-gap:50px;box-sizing:border-box;
    & .swap-btn{
        display:flex;justify-content:center;padding:0 0 60px;
        & .btn{width:150px;height:40px;font-size:14px;color:${color.black};border:1px solid ${color.lightBlack};cursor:pointer;}
        & .active{background:${color.DarkOrange};border:none;color:${color.white};}
        & .btn:nth-child(1){border-top-left-radius:8px;border-bottom-left-radius:8px;}
        & .btn:last-child{border-top-right-radius:8px;border-bottom-right-radius:8px;}
    }
    & .lists{
        display: flex;align-items: center;list-style:none;flex-wrap:wrap;gap:30px;margin:0;padding:0;
        & .list{
            width:calc(33.33% - 20px);
            & img{width:100%;height:100%;border-radius:8px;}
            & .title{letter-spacing: 0.4px;color:${color.black};font-weight:600;font-size:16px;}
        }
    }
    @media(max-width:767px){
        & .lists{
            gap:20px;
            & .list{
                width:calc(50% - 10px);
                & .title{font-size:16px;}
            }
        }
    }
    @media(max-width:479px){
        & .swap-btn{
            padding:0 0 40px;
            & .btn{width:140px;height:35px;font-size:12px;}
        }
        & .lists{
            gap:20px;
            & .list{
                width:100%;
                & .title{font-size:14px;}
            }
        }
    }
`;

const Portfolio = () => {
    const [showList, setShowList] = useState("web-development");
    const breadcrumbs = [
        {name: "Portfolio", path:"/portfolio"},
    ];
    const categories = [
        {id: 1,name: "Web Development",slug: "web-development",
        childs:[
            {id:4,title:"project 1", img:image.gl1},
            {id:5,title:"project 2", img:image.gl2},
            {id:6,title:"project 3", img:image.gl3},
            {id:7,title:"project 4", img:image.gl4},
            {id:8,title:"project 5", img:image.gl5},
            {id:9,title:"project 6", img:image.gl6},
            {id:10,title:"project 7", img:image.gl10},
            {id:11,title:"project 8", img:image.gl7},
            {id:12,title:"project 9", img:image.gl12}
        ]},
        {id: 2,name: "Mobile Apps",slug: "mobile-apps",
        childs:[
            {id:13,title:"project 1", img:image.gl6},
            {id:14,title:"project 2", img:image.gl1},
            {id:15,title:"project 3", img:image.gl7},
            {id:16,title:"project 4", img:image.gl5},
            {id:17,title:"project 5", img:image.gl1},
            {id:18,title:"project 6", img:image.gl4},
        ]},
        {id: 3,name: "Graphic Design",slug: "graphic-design",childs:[]}
    ]
    return (
        <Layout page="portfolio">
            <BreadCrumbs breadcrumbs={breadcrumbs}/>
            <Wrapper>
            <div>
                <div className="swap-btn">
                    {categories &&
                    categories.map((category) => (
                        <button key={category.slug} onClick={() => setShowList(category.slug)} 
                        className={`btn ${showList === category.slug ? 'active' : ''}`}>
                        {category.name}
                        </button>
                    ))}
                </div>
                <ul className="lists">
                    {showList !== null && categories.find((category) => category.slug === showList).childs.map((work) => (
                        <li className="list" key={work.id}>
                            <img src={work.img} alt="" />
                            <div className="title">{work.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
            </Wrapper>
        </Layout>
    );
}
export default Portfolio;




