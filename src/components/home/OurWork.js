import React from "react";
import styled from "styled-components";
import color from "../../constants/Colors";
import c from "../../constants/Constant";
import {arrowIcon} from "../../helpers/Icon";

const Wrap = styled.div`
width:100%;max-width:${c.width};margin:0 auto;box-sizing:border-box;padding:40px 20px;display:flex;flex-direction:column;row-gap:30px;
& .content-section{
    display:flex;align-items:center;justify-content:space-between;column-gap:20px;
    & .left{flex:1;
        & .heading{font-size:32px;line-height:42px;font-weight:600;color:${color.black};margin:0 0 10px;}
        & .desc{
            max-width:900px;
            & p{margin:0;font-size:16px;color:${color.lightBlack}}
        }
    }
    & .link{
        padding:0 20px;height:40px;border-radius:8px;text-transform:uppercase;display:flex;align-items:center;gap:6px;font-weight:500;font-size:14px; background:${color.black};color:${color.white};box-shadow:5px 10px 15px ${color.shadowBlack};transition:all .3s;
        &:hover{background:${color.orange};box-shadow:5px 10px 15px ${color.shadowOrange};}
    }
}

& .work-section{
    display:flex;flex-wrap:wrap;gap:30px;
    & .work-card{
        width:calc(25% - 22.5px);
        & p{margin:0;position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;font-size:16px;color:${color.lightBlack}}
        & .img{
            border-radius:25px;overflow:hidden;box-shadow:#00000029 0px 0px 3px;position:relative;height:230px;
            & .image{position:absolute;height:100%;width:100%;inset:0px;object-fit:cover;}
        }
        & .title{font-size:14px;margin:15px 0 0;font-weight:600}
    }
}
& .load-more-button{
    width:100px;height:30px;color:${color.white};background:${color.black};border:none;cursor:pointer;border-radius:8px;transition:.2s;
    &:hover{color:${color.white};background:${color.orange};}
}

@media (max-width:991px){
    & .content-section{
        & .left{
            & .heading{font-size:30px;line-height:40px;}
        };
    }
    & .work-section{
        gap:20px;
        & .work-card{width:calc(33.3% - 13.1px)}
    }
}

@media (max-width:767px){
    padding:20px;
    & .content-section{
        flex-direction:column;row-gap:15px;align-items:flex-start;
        & .left{
            & .heading{font-size:24px;line-height:34px;}
            & .desc{font-size:14px;}
        }
        & .link{
            padding:0 15px;font-size:13px;height:34px;
            & svg{width:17px;}
        }
    }
    & .work-section{
        & .work-card{width:calc(50% - 10px)}
    }
};
@media (max-width:479px){
    & .content-section{
        & .left{
            & .heading{font-size:20px;line-height:28px;margin:0 0 5px;}
            & .desc{
                & p{font-size:14px}
            }
        }
    }
    & .work-section{
        & .work-card{width:100%}
    }
}
`;

const OurWork = () => {
    const data= [
        {"id": 21,"name": "Bosuns Locker Chandlery","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/bosuns.jpg"},
        {"id": 19,"name": "Seo Service Shop","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/seoserviceshop.jpg"},
        {"id": 18,"name": "Painting Bazar","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/paintingbazar.jpg"},
        {"id": 17,"name": "Fetish and Fantasy","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/myfetishandfantasy.jpg"},
        {"id": 16,"name": "Metafli","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/metafli.jpg"},
        {"id": 15,"name": "Gymvitals","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/gymvital.jpg"},
        {"id": 14,"name": "Fresh Froots","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/freshfroots.jpg"},
        {"id": 13,"name": "Easyshoppers","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/easyshoppers.jpg"},
        {"id": 12,"name": "Deals 4 Cases","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/dc.jpg"},
        {"id": 11,"name": "Dailygreens","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/dailygreens.jpg"},
        {"id": 10,"name": "Conjet","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/conjet.jpg"},
        {"id": 9,"name": "Compare Smart Watches","thumbnail": "https://www.regiustechnologies.com/bucket/portfolio-thumbnails/csw.jpg"}
      ];
    return (
        <Wrap>
            <div className="content-section">
                <div className="left">
                    <div className="heading">Our Works</div>
                    <div className="desc">ed porttitor hendrerit dui, in blandit eros volutpat et. Maecenas aliquet dictum leo in vestibulum. Aliquam a vestibulum neque, ac porta lectus. Vivamus non felis sit amet urna ultrices gravida</div>
                </div>
                <div className="right">
                <a className="link" href={`${c.BASE_URL}/portfolio`}>View portfolio {arrowIcon({width:19,height:14,fill:color.white})}</a>
                </div>
            </div>
            <div className="work-section">
                {data.map((works) => (
                    <div key={works.id} className="work-card">
                        <div className="img">
                            <img className="image" src={works.thumbnail} alt="" />
                        </div>
                        <div className="title">{works.name}</div>
                    </div>
                ))}
            </div>
        </Wrap>
    );
};

export default OurWork;
