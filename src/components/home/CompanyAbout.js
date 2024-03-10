import React from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import {companyYearIcon,expertsIcon,projectdeliverdIcon,returningClientsIcon} from "../../helpers/Icon"

const Wrap = styled.div`
& .company-info{
    width:100%;max-width:${c.width};box-sizing:border-box;margin:0 auto;padding:20px 20px 30px;display:flex;flex-wrap:wrap;gap:20px;
    & .info{
        display:flex;width:calc(25% - 15px);align-items:center;justify-content:center;column-gap:15px;
        & .icon{width:50px;height:50px;display:flex;justify-content:center;align-items:center;overflow:hidden;border-radius:100%;padding:8px;background-color:${colors.DarkOrange};}
        & .company-desc{
            & .number{font-size:24px;font-weight:600;color:${colors.black};}
            & .heading{font-size:14px;color:${colors.lightBlack};}
        }
    }
}

@media (max-width:991px){
    & .company-info{
        gap:20px;
        & .info{
            width:calc(25% - 15px) !important;gap:10px !important;
            & .icon{width:42px;height:42px;padding:8px;}
            & .company-desc{
                & .number{font-size:16px;}
                & .heading{font-size:14px;}
            }
        }
    }
}

@media (max-width:767px){
    & .company-info{
        gap:20px;justify-content:center;padding:20px 20px 20px 70px;
        & .info{width:240px !important;column-gap:10px !important;justify-content:start;}
    }
}
`;



const CompanyAbout = () => {

    const companyInfo = [
        {"id": 1,"heading": "Professional IT Experts","value": "40+","icon":companyYearIcon},
        {"id": 2,"heading": "ProjectS Delivered","value": "2500+","icon":projectdeliverdIcon},
        {"id": 3,"heading": "Returning Clients","value": "85%","icon":returningClientsIcon},
        {"id": 4,"heading": "Compleate Years","value": "07+","icon": expertsIcon}
    ]
    return (
        <Wrap>
            <div className="company-info">
                {companyInfo.map((about) => (
                    <div key={about.id} className="info">
                        <div className="icon">{about.icon({fill:colors.white})}</div>
                        <div className="company-desc">
                        <div className="number">{about.value}</div>
                        <div className="heading">{about.heading}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Wrap>
    );
}

export default CompanyAbout;
