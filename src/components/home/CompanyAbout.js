import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";
import axios from "axios";

const Wrap = styled.div`
    & .company-info {
        width: 100%;max-width:${c.width};box-sizing: border-box;margin: 0 auto;padding:20px 20px 30px;display: flex;flex-wrap:wrap;
        & .info{
            display: flex;width: 25%;align-items: center;justify-content:center;column-gap: 15px;
            & .icon{
                width: 50px;height:50px;display:flex;justify-content:center;align-items:center;overflow:hidden;border-radius:100%;padding: 8px;background-color: ${colors.DarkOrange}; 
            }
            & .company-desc{
                & .number {
                    font-size: 24px;font-weight: 600;color: ${colors.black};
                }
                & .heading {
                    font-size: 14px;color: ${colors.lightBlack};
                }
            }
        }
    };

    @media (max-width:991px){
        & .company-info {
            gap:20px;
            & .info{
                width: calc(25% - 15px) !important;gap: 10px !important;
                & .icon{
                    width: 42px;height:42px;padding: 8px;
                }
                & .company-desc{
                    & .number {
                    font-size: 16px;
                    }
                    & .heading {
                        font-size: 14px;
                    }
                }
            }
        }
    };

    @media (max-width:767px){
        & .company-info {
            gap:20px;justify-content:center;padding: 20px 20px 30px 70px;
            & .info{
                width: calc(50% - 10px) !important;gap: 10px !important;justify-content: start;
            }
        }
    }


    @media (max-width:479px){
        & .company-info {
            & .info{
                width: 100% !important;gap: 10px !important;justify-content: start;
            }
        }
    }
`;



const CompanyAbout = () => {
    const [companyAbout , setCompanyAbout] = useState({});
    useEffect(()=>{
        getInfo();
    },[]);

    const getInfo = () =>{
        return axios.get(c.BASE_URL)
        .then((res) => {
            if(res.status === 200){
                const info = res.data.companyInfo;
                setCompanyAbout(info);
            }else{
                console.error('Error:', res.statusText);
            }
          })
          .catch((error) => {
            console.error('Network Error:', error);
        });
    }

    const aboutIcon = (icon) =>{
        switch (icon) {
            case "it-experts":
                return (
                    <svg viewBox="0 0 27.071 34.335" width="24" height="24" fill={colors.white}><path d="M212.754,226.016a6.846,6.846,0,0,1,5.069,2.316,8.492,8.492,0,0,1,0,11.183,6.638,6.638,0,0,1-4.973,2.317h-.191a6.638,6.638,0,0,1-4.974-2.317,8.492,8.492,0,0,1,0-11.183,6.845,6.845,0,0,1,5.069-2.316m0,17.867a11.541,11.541,0,0,1,8.158,3.38,11.164,11.164,0,0,1,2.754,4.314,2.92,2.92,0,0,1-2.786,3.846H204.627a2.921,2.921,0,0,1-2.787-3.846,11.166,11.166,0,0,1,2.754-4.314,11.541,11.541,0,0,1,8.158-3.38m0-20.33a9.359,9.359,0,0,0-6.881,3.113,10.954,10.954,0,0,0-.012,14.5,9.563,9.563,0,0,0,1.463,1.339,13.975,13.975,0,0,0-4.458,3,13.709,13.709,0,0,0-3.35,5.253,5.329,5.329,0,0,0,.69,4.836,5.429,5.429,0,0,0,4.421,2.288h16.258A5.43,5.43,0,0,0,225.3,255.6a5.328,5.328,0,0,0,.69-4.836,13.7,13.7,0,0,0-3.349-5.253,13.986,13.986,0,0,0-4.459-3,9.558,9.558,0,0,0,1.462-1.339,10.954,10.954,0,0,0-.013-14.5,9.358,9.358,0,0,0-6.881-3.113Z" transform="translate(-199.219 -223.553)"></path></svg>
                );
            case "project-delivered":
                return(
                    <svg viewBox="0 0 27.026 34.776" width="24" height="24" fill={colors.white}><g transform="translate(-937.452 -913.612)"><path d="M65.31,34.776H47.242a.468.468,0,0,0-.118-.054,5.075,5.075,0,0,1-4.365-5.2V19.815c0-3.786-.009-7.58,0-11.366A5.06,5.06,0,0,1,46.3,3.586c.245-.082.263-.208.263-.417A2.923,2.923,0,0,1,47.94.525,7.466,7.466,0,0,1,49.208,0H63.336c.018.009.036.027.054.036a3.023,3.023,0,0,1,2.581,3.233c.009.217.109.254.272.308a5.049,5.049,0,0,1,3.532,4.836q.014,10.677,0,21.346a5.054,5.054,0,0,1-3.695,4.818C65.826,34.65,65.563,34.713,65.31,34.776Zm.7-29.08c-.027.136-.045.263-.072.389A3.006,3.006,0,0,1,63,8.613c-4.483.018-8.966.009-13.449,0a3.013,3.013,0,0,1-2.835-2.1,8.164,8.164,0,0,1-.181-.815.177.177,0,0,0-.072.009.488.488,0,0,0-.118.063A3.016,3.016,0,0,0,44.8,8.495V29.578a3.05,3.05,0,0,0,3.143,3.161H64.612a3.518,3.518,0,0,0,.869-.109,3.052,3.052,0,0,0,2.273-3.079V8.259A2.993,2.993,0,0,0,66.007,5.7ZM56.272,2.038H49.724A1.026,1.026,0,0,0,48.6,3.152V5.461a1.026,1.026,0,0,0,1.114,1.123H62.846a1.025,1.025,0,0,0,1.1-1.1c.009-.743,0-1.494,0-2.237a1.059,1.059,0,0,0-1.2-1.214Z" transform="translate(894.697 913.612)"></path><path d="M93.169,245.737c-.192.269-.355.5-.528.73a1.083,1.083,0,1,1-1.758-1.259c.259-.375.519-.749.8-1.1a.3.3,0,0,0,0-.442c-.279-.365-.538-.73-.8-1.1a1.085,1.085,0,1,1,1.768-1.249c.163.221.317.442.509.7.192-.269.356-.5.528-.73a1.088,1.088,0,0,1,1.547-.3,1.065,1.065,0,0,1,.221,1.528c-.259.384-.528.769-.817,1.143a.308.308,0,0,0,0,.442c.279.365.538.74.8,1.1a1.083,1.083,0,1,1-1.758,1.259C93.524,246.237,93.361,246,93.169,245.737Z" transform="translate(850.594 694.91)"></path><path d="M93.191,159.371c.625-.749,1.2-1.441,1.787-2.143a1.084,1.084,0,0,1,1.912.423,1.041,1.041,0,0,1-.231.942c-.961,1.153-1.912,2.306-2.882,3.449A1.059,1.059,0,0,1,92,161.831c-.4-.759-.788-1.537-1.163-2.316a1.067,1.067,0,0,1,.49-1.441,1.078,1.078,0,0,1,1.441.49C92.913,158.8,93.038,159.064,93.191,159.371Z" transform="translate(850.513 770.812)"></path><path d="M208.955,174.7h3.055a1.087,1.087,0,0,1,1.191,1.067,1.1,1.1,0,0,1-1.211,1.1h-6.082a1.089,1.089,0,1,1,.019-2.162Z" transform="translate(747.49 754.638)"></path><path d="M209.046,264.694H205.99a1.076,1.076,0,0,1-1.191-1.067,1.092,1.092,0,0,1,1.172-1.1c2.047-.01,4.1-.01,6.149,0a1.085,1.085,0,1,1-.019,2.162Z" transform="translate(747.4 675.251)"></path></g></svg>
                );
            case "returning-clients":
                return(
                    <svg viewBox="0 0 34.78 34.79" width="24" height="24" fill={colors.white}><g transform="translate(-1221.694 -803.747)"><g transform="translate(1221.694 803.747)"><g transform="translate(0 0)"><path d="M93.142,95.631a13.038,13.038,0,0,1-9.664-4.381c-.517-.57-.526-.973.123-1.367a27.252,27.252,0,0,1,3.1-1.595c.841-.368,1.735-.6,2.6-.9a1.383,1.383,0,0,0,.789-2.042c-.289-.587-.57-1.183-.859-1.77-.035-.061-.053-.149-.105-.193-.832-.7-.806-1.761-1.13-2.672a.732.732,0,0,1,.307-.911,1,1,0,0,0,.272-.64c.105-.692.114-1.4.272-2.077a4.5,4.5,0,0,1,8.8.456c.1.526.079,1.078.166,1.612a2.879,2.879,0,0,0,.35.745c.1.2.289.429.245.6a6.575,6.575,0,0,1-.727,2.4c-.534.736-.789,1.577-1.288,2.3a1.667,1.667,0,0,0-.149,1.516,1.153,1.153,0,0,0,.622.6c.771.307,1.586.5,2.357.824a27.377,27.377,0,0,1,3.128,1.454c1.174.666,1.2,1.06.289,2A13.115,13.115,0,0,1,93.142,95.631Z" transform="translate(-75.818 -67.279)"></path><path d="M71.507,3.606c.368.5.727,1,1.139,1.568-2.033.219-3.987.429-6.046.64.832-1.875,1.63-3.689,2.453-5.555.429.578.815,1.1,1.209,1.638A17.367,17.367,0,0,1,83.475.864a16.913,16.913,0,0,1,9.033,6.729,17.291,17.291,0,0,1-.131,19.758c-.534-.377-1.069-.754-1.6-1.122A15.355,15.355,0,0,0,71.507,3.606Z" transform="translate(-60.763 -0.015)"></path><path d="M3.151,85.1c.534.377,1.069.745,1.6,1.122a15.355,15.355,0,0,0,19.267,22.623c-.368-.5-.727-1.008-1.13-1.568,2.042-.219,4.013-.429,6.046-.64-.832,1.875-1.63,3.68-2.462,5.555-.429-.578-.815-1.1-1.2-1.638a17.376,17.376,0,0,1-13.344.99,16.909,16.909,0,0,1-9.1-6.983A17.278,17.278,0,0,1,3.151,85.1Z" transform="translate(0.014 -77.645)"></path></g></g></g></svg>
                );
            case "compleate-years":
                return(
                    <svg viewBox="0 0 31.83 34.543" width="24" height="24" fill={colors.white}><g transform="translate(0.036)"><path d="M15.611,34.543c-.909-.495-1.835-.945-2.708-1.484a24.855,24.855,0,0,1-9.032-9.8A33.888,33.888,0,0,1,.3,11.892C.12,10.6.048,9.274-.033,7.97c-.045-.882.378-1.277,1.25-1.223A15.621,15.621,0,0,0,9.26,5.19,16.27,16.27,0,0,0,14.99.531,3.518,3.518,0,0,1,15.611,0h.54A7.821,7.821,0,0,1,16.9.693a15.809,15.809,0,0,0,10.75,5.982,27.038,27.038,0,0,0,2.96.063c.783,0,1.205.378,1.187,1.16A35.511,35.511,0,0,1,30.04,18.117a28.227,28.227,0,0,1-6.468,11.146,24.169,24.169,0,0,1-7.2,5.145,1.811,1.811,0,0,0-.225.126C15.97,34.543,15.79,34.543,15.611,34.543ZM2.063,8.816c-.009.054-.027.09-.027.117.045.567.081,1.142.144,1.709a33.217,33.217,0,0,0,2.942,10.6A23,23,0,0,0,15.611,32.267a.54.54,0,0,0,.558,0A22.99,22.99,0,0,0,26.621,21.3a33.474,33.474,0,0,0,2.942-10.426c.081-.675.126-1.358.189-2.06A18.1,18.1,0,0,1,15.889,2.663,18.1,18.1,0,0,1,2.063,8.816Z"></path><path d="M83.384,103.013c.135-.8.288-1.7.441-2.591.108-.621.189-1.241.324-1.853a.58.58,0,0,0-.207-.612c-1.025-.99-2.042-2-3.068-2.987a1.064,1.064,0,0,1-.369-1.178,1.091,1.091,0,0,1,1.008-.711c1.448-.2,2.888-.4,4.336-.63a.558.558,0,0,0,.36-.279c.675-1.331,1.322-2.672,1.988-4.012a.991.991,0,0,1,1.466-.468,1.533,1.533,0,0,1,.441.54q.985,1.957,1.943,3.922a.524.524,0,0,0,.459.324c1.457.2,2.915.414,4.372.63a1.027,1.027,0,0,1,.576,1.826c-1.052,1.025-2.1,2.06-3.166,3.077a.469.469,0,0,0-.162.495c.261,1.439.5,2.879.747,4.318a1.058,1.058,0,0,1-.387,1.142,1.072,1.072,0,0,1-1.205.009c-1.277-.684-2.564-1.349-3.841-2.033a.531.531,0,0,0-.585.009c-1.3.7-2.618,1.385-3.931,2.069A1.03,1.03,0,0,1,83.384,103.013Zm9.14-1.727c-.189-1.079-.351-2.087-.531-3.094a1.2,1.2,0,0,1,.36-1.16c.666-.63,1.322-1.286,1.988-1.925a1.142,1.142,0,0,1,.306-.18c-.036-.036-.063-.081-.1-.117-1.008-.153-2.015-.315-3.032-.441a1.2,1.2,0,0,1-1.008-.729c-.4-.855-.828-1.691-1.25-2.537-.036-.072-.09-.135-.153-.234-.477.972-.945,1.889-1.394,2.816a1.1,1.1,0,0,1-.927.675c-.3.036-.6.09-.9.126l-2.195.324c-.027.036-.045.072-.072.108a2.7,2.7,0,0,1,.333.225c.666.639,1.322,1.286,1.988,1.925a1.1,1.1,0,0,1,.342,1.043c-.081.432-.153.864-.225,1.3-.1.6-.207,1.205-.315,1.871.189-.1.315-.162.441-.225.765-.4,1.538-.792,2.294-1.214a1.248,1.248,0,0,1,1.331.009C90.671,100.333,91.561,100.782,92.524,101.286Z" transform="translate(-73.243 -79.652)"></path></g></svg>
                )
        }
        
    }
    return (
        <Wrap>
            <div className="company-info">
                {Array.isArray(companyAbout) && companyAbout.map((about)=>(
                    <div key={about.id} className="info">
                        <div className="icon">{aboutIcon(about.icon)}</div>
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
