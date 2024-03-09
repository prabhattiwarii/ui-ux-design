import React from "react";
import styled from "styled-components";
import colors from "../../constants/Colors";
import c from "../../constants/Constant";


const FooterWrap = styled.div`
  width: 100%;background-color: ${colors.black};color: ${colors.white};
  & .footer-section{
    width: ${c.width};max-width:100%;margin: 0 auto;padding:20px;display: flex;flex-direction: column;row-gap: 60px;
    & .footer-head{
        display: flex;justify-content: space-between;border-bottom: 1px solid ${colors.light};padding: 0 0 40px;
    & .head-left{
        & .heading{font-size: 56px;font-weight: 600;margin:0;letter-spacing: 1.6px;}
        & .text{margin:0;font-size:14px;font-weight:300;letter-spacing: 0.4px;
        & span{
            color:${colors.orange}
        }}
    }
    & .head-right{display: flex;flex-direction: column;align-items: flex-end;row-gap: 14px;
        & .number-email{display: flex;flex-direction: column;align-items: flex-end;row-gap: 2px;
            & .number{font-size:35px;letter-spacing:1.05px;font-weight:600;margin:0;color:${colors.white}}
            & .email{font-size:21px;font-weight:normal;letter-spacing:0.6px;margin:0;color:${colors.lightBlack};text-align:left;}
        }
        & .icon{
            display: flex;column-gap: 21px;height: 0;
            & .icon-link{
                transition:all .3s linear;
                & .icon-img{
                    fill:${colors.light};
                    &:hover{
                        fill:${colors.orange}
                    }
                }
            }
        }
    }
    }
  }
  & .footer-middle{display: flex;justify-content:space-between;flex-wrap:wrap;align-items: center;
    & .footer-list{
        & .heading{margin:0 0 15px;}
        & .lists{padding:0;margin:0;list-style: none;}
        & .list{margin:0}
        & .list-link{color:${colors.lightBlack};font-size:14px;}
    }
  }
  & .footer-bottom{
        text-align: center;
        & .copyright{
            letter-spacing: 0.35px;font-size:12px;color:${colors.lightBlack};font-weight:300;margin:0;
            & .link{color:${colors.orange};}
        }
    }

    @media(max-width:991px){
        .footer-section{
            & .footer-head{
                & .head-left{
                    & .heading{font-size:38px;}
                    & .text{font-size:9.5px}
                }
                & .head-right{
                    & .number-email{
                        & .number{font-size:31px}
                        & .email{font-size:18px}
                    }
                    & .icon{column-gap:19px}
                }
            }
        }
    };

    @media(max-width:767px){
        .footer-section{
            & .footer-head{
                & .head-left{
                    & .heading{font-size:33px;};
                    & .text{font-size:8.5px;};
                }
                & .head-right{
                    & .number-email{
                        & .number{font-size:28px;};
                        & .email{font-size:16px;}
                    }
                    & .icon{column-gap:19px;}
                }
            }
            & .footer-middle{
                & .footer-list{
                    width: calc(50% - 61px);
                };
            };
        };
    };

    @media(max-width:479px){
        & .footer-section {
            & .footer-head{
                flex-direction:column;align-items: center;padding:0 0 27px;row-gap:10px;
                & .head-left{}
                & .head-right{
                    flex-direction:row;align-items:center;column-gap: 41px;
                    & .number-email{
                        & .number{
                            font-size:20px;
                        }
                        & .email{
                            font-size:14px;
                        }
                    }
                }
            }
            & .footer-middle {
                & .footer-list {
                    width: 100%;
                };
            };
        };
    };
`;


const Footer = () => {
    return (
        <FooterWrap>
            <div className="footer-section">
                <div className="footer-head">
                    <div className="head-left">
                        <h2 className="heading">Let's Work Together</h2>
                        <p className="text"><span>Lorem ipsum dolor</span> sit amet consectetur adipiscing elit. Phasellus interdum.</p>
                    </div>
                    <div className="head-right">
                        <div className="number-email">
                            <a className="number" href="/">+91-84278-14698</a>
                            <a className="email" href="/">info@domainname.com</a>
                        </div>
                        <div className="icon">
                            <a href="/" className="icon-link"><svg className="icon-img" width="10.625" height="21.034" viewBox="0 0 10.625 21.034"><path className="a" d="M77.042,11.2h2.306v9.492a.339.339,0,0,0,.339.339H83.6a.339.339,0,0,0,.339-.339V11.247h2.651a.339.339,0,0,0,.337-.3l.4-3.494a.339.339,0,0,0-.337-.378H83.936V4.884c0-.66.356-1,1.057-1h2a.339.339,0,0,0,.339-.339V.342A.339.339,0,0,0,86.989,0H84.238c-.019,0-.062,0-.126,0a5.272,5.272,0,0,0-3.447,1.3,3.615,3.615,0,0,0-1.2,3.213V7.074h-2.42a.339.339,0,0,0-.339.339v3.45A.339.339,0,0,0,77.042,11.2Z" transform="translate(-76.703)"/></svg></a>
                            <a href="/" className="icon-link"><svg className="icon-img" width="22.624" height="18.382" viewBox="0 0 22.624 18.382"><g transform="translate(0 0)"><path className="a" d="M22.624,50.176a9.67,9.67,0,0,1-2.672.732,4.612,4.612,0,0,0,2.04-2.564,9.269,9.269,0,0,1-2.941,1.123,4.638,4.638,0,0,0-8.023,3.172,4.775,4.775,0,0,0,.107,1.058,13.128,13.128,0,0,1-9.56-4.851A4.639,4.639,0,0,0,3,55.044a4.58,4.58,0,0,1-2.1-.571v.051a4.659,4.659,0,0,0,3.716,4.557,4.629,4.629,0,0,1-1.216.153,4.1,4.1,0,0,1-.878-.079,4.682,4.682,0,0,0,4.334,3.231A9.319,9.319,0,0,1,1.11,64.364,8.689,8.689,0,0,1,0,64.3a13.057,13.057,0,0,0,7.115,2.081,13.11,13.11,0,0,0,13.2-13.2c0-.205-.007-.4-.017-.6A9.253,9.253,0,0,0,22.624,50.176Z" transform="translate(0 -48)"/></g></svg></a>
                            <a href="/" className="icon-link"><svg className="icon-img" width="18.453" height="18.456" viewBox="0 0 18.453 18.456"><path className="a" d="M18.854,5.426a6.744,6.744,0,0,0-.429-2.239,4.728,4.728,0,0,0-2.7-2.7A6.761,6.761,0,0,0,13.486.058C12.5.011,12.184,0,9.678,0s-2.819.011-3.8.054A6.746,6.746,0,0,0,3.636.483,4.5,4.5,0,0,0,2,1.55,4.544,4.544,0,0,0,.935,3.184,6.762,6.762,0,0,0,.506,5.423C.459,6.411.449,6.724.449,9.23s.011,2.819.054,3.8a6.744,6.744,0,0,0,.429,2.239,4.727,4.727,0,0,0,2.7,2.7,6.762,6.762,0,0,0,2.239.429c.984.043,1.3.054,3.8.054s2.819-.011,3.8-.054a6.742,6.742,0,0,0,2.239-.429,4.721,4.721,0,0,0,2.7-2.7,6.767,6.767,0,0,0,.429-2.239c.043-.984.054-1.3.054-3.8s0-2.819-.047-3.8Zm-1.662,7.535a5.059,5.059,0,0,1-.317,1.713,3.062,3.062,0,0,1-1.752,1.752,5.077,5.077,0,0,1-1.713.317c-.973.043-1.265.054-3.728.054s-2.758-.011-3.728-.054a5.056,5.056,0,0,1-1.713-.317,2.84,2.84,0,0,1-1.06-.689,2.869,2.869,0,0,1-.689-1.06,5.077,5.077,0,0,1-.317-1.713c-.043-.973-.054-1.266-.054-3.728s.011-2.758.054-3.728A5.056,5.056,0,0,1,2.493,3.8a2.805,2.805,0,0,1,.692-1.06,2.865,2.865,0,0,1,1.06-.689,5.08,5.08,0,0,1,1.713-.317c.973-.043,1.266-.054,3.728-.054s2.758.011,3.728.054a5.059,5.059,0,0,1,1.713.317,2.838,2.838,0,0,1,1.06.689,2.869,2.869,0,0,1,.689,1.06,5.079,5.079,0,0,1,.317,1.713c.043.973.054,1.265.054,3.728s-.011,2.751-.054,3.724Zm0,0" transform="translate(-0.449 0)"/><path className="a" d="M129.69,124.5a4.741,4.741,0,1,0,4.741,4.741A4.742,4.742,0,0,0,129.69,124.5Zm0,7.817a3.075,3.075,0,1,1,3.075-3.075A3.076,3.076,0,0,1,129.69,132.317Zm0,0" transform="translate(-120.46 -120.011)"/><path className="a" d="M364.664,89.709a1.107,1.107,0,1,1-1.107-1.107A1.107,1.107,0,0,1,364.664,89.709Zm0,0" transform="translate(-349.398 -85.407)"/></svg></a>
                            <a href="/" className="icon-link"><svg className="icon-img" width="14.515" height="18.467" viewBox="0 0 14.515 18.467"><path className="a" d="M45.813,1.892A7.082,7.082,0,0,0,40.86,0a7.786,7.786,0,0,0-5.743,2.214,6.543,6.543,0,0,0-1.936,4.535c0,2.056.86,3.633,2.3,4.22a.762.762,0,0,0,.289.06.643.643,0,0,0,.628-.518c.049-.183.161-.634.21-.83a.779.779,0,0,0-.208-.842,2.684,2.684,0,0,1-.61-1.834,4.616,4.616,0,0,1,4.786-4.647c2.467,0,4,1.4,4,3.659a7.6,7.6,0,0,1-.864,3.714A2.555,2.555,0,0,1,41.6,11.21a1.4,1.4,0,0,1-1.114-.509,1.281,1.281,0,0,1-.224-1.113c.11-.465.26-.951.4-1.42a8.789,8.789,0,0,0,.515-2.313,1.679,1.679,0,0,0-1.69-1.847c-1.285,0-2.291,1.3-2.291,2.97a4.417,4.417,0,0,0,.315,1.663c-.162.686-1.124,4.762-1.306,5.531-.105.449-.741,3.993.311,4.276,1.182.318,2.238-3.134,2.346-3.524.087-.317.392-1.517.579-2.254a3.573,3.573,0,0,0,2.383.921,5.315,5.315,0,0,0,4.267-2.135,8.57,8.57,0,0,0,1.6-5.24A6.043,6.043,0,0,0,45.813,1.892Z" transform="translate(-33.181)"/></svg></a>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-list">
                        <h5 className='heading'>Company Info</h5>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href="/">Home</a></li>
                            <li className="list"><a className="list-link" href="/">About Us</a></li>
                            <li className="list"><a className="list-link" href="/">Work</a></li>
                            <li className="list"><a className="list-link" href="/">Career</a></li>
                            <li className="list"><a className="list-link" href="/">Blog</a></li>
                            <li className="list"><a className="list-link" href="/">Contact-Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className='heading'>Services</h5>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href="/">Website design</a></li>
                            <li className="list"><a className="list-link" href="/">Web development</a></li>
                            <li className="list"><a className="list-link" href="/">Internet Marketing</a></li>
                            <li className="list"><a className="list-link" href="/">Mobile App Development</a></li>
                            <li className="list"><a className="list-link" href="/">eCommerce Development</a></li>
                            <li className="list"><a className="list-link" href="/">Wordpress Website Development</a></li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <div className='heading'></div>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href="/">PHP Development</a></li>
                            <li className="list"><a className="list-link" href="/">Responsive Web Design</a></li>
                            <li className="list"><a className="list-link" href="/">Android App Marketing</a></li>
                            <li className="list"><a className="list-link" href="/"> Iphone App Development</a></li>
                            <li className="list"><a className="list-link" href="/">Search Engine Optimization</a></li>
                            <li className="list"><a className="list-link" href="/">Pay Per Click</a></li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5 className='heading'>Solutions</h5>
                        <ul className="lists">
                            <li className="list"><a className="list-link" href="/">CMS Solutions</a></li>
                            <li className="list"><a className="list-link" href="/">CRM Solutions</a></li>
                            <li className="list"><a className="list-link" href="/">Android App Marketing</a></li>
                            <li className="list"><a className="list-link" href="/">eCommerce Solutions</a></li>
                            <li className="list"><a className="list-link" href="/">Enterprise Mobility Solutions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">Copyright &copy; {c.currentYear}<a className="link" href="/"> {c.APP_NAME}.</a> Powered by Day Care Services.</p>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;
