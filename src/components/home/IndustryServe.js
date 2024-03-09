import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import axios from "axios";


const Wrap = styled.div`
    width: 100%;max-width: ${c.width};margin: 0 auto;padding:40px 20px;display: flex;flex-direction: column;row-gap: 30px;
  & .content-section {
    text-align:center;
    & .heading {
        font-size: 32px;line-height:42px;font-weight: 600;color: ${colors.black};letter-spacing: 1.05px;margin:0 0 10px;
      }
    & .desc {
        color: ${colors.lightBlack};
        & p{
          margin:0;
        }
      }
  }
  & .industry-section {
    display: flex;flex-wrap: wrap;gap:30px;
    & .work-card {
      width: calc(33.33% - 20px);background: ${colors.white}; padding: 25px;box-shadow: 0px 3px 20px #00000029;position:relative;
      &:before{
          content:"";position:absolute;top:0;left:0;bottom:0;width:4px;height:100%;background:${colors.DarkOrange};
        }
      & .title {
        font-size:14px;font-weight: 600;color:${colors.lightDark};
      }
    }
  }

  @media (max-width: 991px){
    & .industry-section {
      gap:16px;
      & .work-card{
        width: calc(33.33% - 10.7px);padding:25px 15px;
      }
    }
  };

  @media (max-width: 767px){
    & .industry-section{
      row-gap: 20px;
      & .work-card{
        width: calc(50% - 10px);padding:20px;
        & .title {
          font-size:14px;line-height:24px;
        }
      }
    }
    & .content-section{
        & .heading{
            font-size: 24px;
        };
        & .desc{
            font-size: 15px;line-height: 25px;
        }
    }
  };


  @media (max-width: 479px){
    & .content-section{
        & .heading{
            font-size: 22px;
        };
    }
    & .industry-section{
        justify-content: center;
      & .work-card{
        width: 310px;padding:15px;
      }
    }
  }
`;

const IndustryServe = () => {
    const [industry, setIndustry] = useState({});
    useEffect(()=>{
      getIndustry();
    },[])
  
    const getIndustry = () =>{
      return axios.get(c.BASE_URL)
      .then((res) =>{
          if(res.status === 200){
              const industries= res.data.industries;
              setIndustry(industries);
          }else {
              console.error('Error:', res.statusText);
            }
          })
          .catch((error) => {
            console.error('Network Error:', error);
          });
    }
    return (
        <Wrap>
            <div className="content-section">
                <div className="heading">{industry.heading}</div>
                <div className="desc" dangerouslySetInnerHTML={{__html:industry.description}}/>
            </div>
            <div className="industry-section">
                {Array.isArray(industry.data) && industry.data.map((industry) => (
                    <div key={industry.id} className="work-card">
                        <div className="title">{industry.name}</div>
                    </div>
                ))}
            </div>
        </Wrap>
    );
};

export default IndustryServe;
