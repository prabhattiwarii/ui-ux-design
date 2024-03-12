import React, {useState } from "react";
import styled from "styled-components";
import c from "../constants/Constant";
import color from "../constants/Colors";
import Layout from "../components/layout/Layout";
import BreadCrumbs from "../BreadCrumbs";


const Wrapper = styled.div`
    width:100%;max-width:${c.width};margin:0 auto;padding:40px 20px 80px;display:flex;flex-direction:column;row-gap:50px;box-sizing:border-box;
    & .swap-btn{
        display:flex;justify-content:center;
        & .btn{width:150px;height:40px;font-size:14px;color:${color.black};border:1px solid ${color.lightBlack};cursor:pointer;}
        & .active{background:${color.DarkOrange};border:none;color:${color.white};}
        & .btn:nth-child(1){border-top-left-radius:8px;border-bottom-left-radius:8px;}
        & .btn:last-child{border-top-right-radius:8px;border-bottom-right-radius:8px;}
    }
    & .lists{
        display: flex;align-items: center;justify-content: center;list-style: none;gap:20px;padding:0;margin:0;
        & .list{
            font-size:14px;padding:0 20px;height:30px; display: flex;align-items: center;border-radius:6px;cursor:pointer;transition:.2s;
            &:hover{background:${color.DarkOrange};color:${color.white};}
        }
    }
`;

const Portfolio = () => {
    const [showList, setShowList] = useState(null);
    const breadcrumbs = [
        {name: "Portfolio", path:"/portfolio"},
    ];
    return (
        <Layout>
            <BreadCrumbs breadcrumbs={breadcrumbs}/>
            <Wrapper>
            {/* <div>
                <div className="swap-btn">
                    {categories &&
                    categories.map((category) => (
                        <button key={category.slug} onClick={() => setShowList(category.slug)}
                        className={`btn ${showList === category.slug ? 'active' : ''}`}
                        >
                        {category.name}
                        </button>
                    ))}
                </div>
                <ul className="lists">
                    {showList !== null && categories.find((category) => category.slug === showList).childs.map((work) => (
                        <li className="list" key={work.slug}>{work.name}</li>
                    ))}
                </ul>
            </div> */}
            </Wrapper>
        </Layout>
    );
}
export default Portfolio;




