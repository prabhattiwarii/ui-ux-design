import React from "react";
import styled from "styled-components";
import color from "../../constants/Colors";
import c from "../../constants/Constant";


const Wrap = styled.div`
width:100%;max-width:${c.width};margin:0 auto;padding:40px 20px 20px;display:flex;flex-direction:column;row-gap:30px;
& .content-section{
    text-align:center;
    & .heading{font-size:32px;line-height:42px;font-weight:600;color:${color.black};letter-spacing:1.05px;margin:0 0 10px;}
    & .desc{
        & p{margin:0;color:${color.lightBlack};}
    }
}
& .industry-section{
    display:flex;flex-wrap:wrap;gap:30px;
    & .work-card{
        width:calc(33.33% - 20px);background:${color.white};padding:25px;box-shadow:0px 3px 20px #00000029;position:relative;
        &:before{content:"";position:absolute;top:0;left:0;bottom:0;width:4px;height:100%;background:${color.DarkOrange};}
        & .title{font-size:14px;font-weight:600;color:${color.lightDark};}
    }
}

@media (max-width:991px){
    & .industry-section{
        gap:16px;
        & .work-card{width:calc(33.33% - 10.7px);padding:25px 15px;}
    }
}

@media (max-width:767px){
    padding:20px;
    & .industry-section{
        row-gap:20px;
        & .work-card{
            width:calc(50% - 10px);padding:20px;
            & .title{font-size:14px;line-height:24px;}
        }
    }
    & .content-section{
        & .heading{font-size:24px;line-height:34px;}
        & .desc{font-size:16px;line-height:26px;}
    }
}


@media (max-width:479px){
    & .content-section{
        & .heading{font-size:20px;margin:0 0 5px;line-height:30px;}
        & .desc{font-size:14px;}
    }
    & .industry-section{
        justify-content:center;
        & .work-card{width:310px;padding:15px;}
    }
}
`;

const IndustryServe = () => {
    const industries = [
          {"id": 1,"name": "Education and Human Resources"},
          {"id": 2,"name": "Real Estate and Property"},
          {"id": 3,"name": "Legal and Professional"},
          {"id": 4,"name": "E-commerce and Retail"},
          {"id": 5,"name": "Athletes and Artists"},
          {"id": 6,"name": "Software and Hi-Tech"},
          {"id": 7,"name": "Healthcare and Social Services"},
          {"id": 8,"name": "Restaurants and Venues"},
          {"id": 9,"name": "Corporate & Consulting"},
          {"id": 10,"name": "Automotive & Industrial"},
          {"id": 11,"name": "Non-Profits and Charity"},
          {"id": 12,"name": "Start Ups"}
        ]
    return (
        <Wrap>
            <div className="content-section">
                <div className="heading">Industries We Serve</div>
                <div className="desc">Sed porttitor hendrerit dui, in blandit eros volutpat et. Maecenas aliquet dictum leo in vestibulum. Aliquam a vestibulum neque, ac porta lectus. Vivamus non felis sit amet urna ultrices gravida</div>
            </div>
            <div className="industry-section">
                {industries.map((industrie) => (
                    <div key={industrie.id} className="work-card">
                        <div className="title">{industrie.name}</div>
                    </div>
                ))}
            </div>
        </Wrap>
    );
};

export default IndustryServe;
