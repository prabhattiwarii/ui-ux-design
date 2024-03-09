import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";
import Logo from "../../assets/images/gunoxwebsolutions-logo.svg";
import colors from "../../constants/Colors";
import constants from "../../constants/Constant";
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  max-width: 100%;width: ${constants.width};margin: 0 auto;padding:20px;display: flex;justify-content: space-between;align-items: center;
  & .logo-wrap {
    & .logo-img{
      width: 149.45px;height: 54.86px;
    }
  }

  & .nav {
    & .lists {
      display: flex;column-gap: 30px;margin: 0;padding: 0;align-items: center;list-style: none;
      & .list {
        & .link {
          font-size: 14px;color: ${colors.black};font-weight: 600;
        }
      }
    }
  }

  & .btn-wrap {
      text-transform: uppercase;color: ${colors.white};background-color: ${colors.orange};padding: 10px 8px;border-radius: 8px;font-weight:500;font-size: 12px;display:flex;gap:6px;box-shadow:5px 10px 15px #EBAC2F4D;
      & .arrow {
        width: 14px;height: 10px;
      }
  }

  & .toggle-button {
    display: none;color: ${colors.black};font-weight: 700;padding: 10px 23px;font-size: 14px;border-radius: 30px;transition: all 0.3s linear;
    &:hover {
      color: ${colors.orange};
    }
  }


  @media(max-width:991px){
    & .logo-wrap {
        & .logo-img{
        width: 107px;
        }
  }

  & .nav {
    & .lists {
      display: flex;column-gap: 20px;margin: 0;padding: 0;
        & .list {
            & .link {
            font-size: 12px;color: ${colors.black};font-weight: 600;
            }
        }
    }
  }

  & .btn-wrap {
    padding: 10px 6px;border-radius: 8px;font-weight: 500;font-size: 11px;
        & .arrow {
            width: 18px;height: 14px;
        }
  }
  }

  @media(max-width:767px){
    & .nav .lists {
      flex-direction: column;background-color: ${colors.white};position: absolute;top: 73px;left: 18px;right: 0;display: ${(props) => (props.isMobileNavOpen ? "flex" : "none")};z-index:3;
      & .list {margin: 10px 0;}
    }
    & .btn-wrap{display: none;}
    & .toggle-button {display: block;}
  }
`;

const Header = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const handleToggleClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
  return (
    <HeaderWrap isMobileNavOpen={isMobileNavOpen}>
      <div className="logo-wrap">
        <a href="/" className="logo"><img className="logo-img" src={Logo} alt="" /></a>
      </div>
      <div className="nav">
        <ul className="lists">
            <li className="list"><Link to="/about-us" className="link">About Us</Link></li>
            <li className="list"><Link to="/service" className="link">Services</Link></li>
            <li className="list"><Link to="/" className="link">Solutions</Link></li>
            <li className="list"><Link to="/" className="link">Portfolio</Link></li>
            <li className="list"><Link to="/blog" className="link">Blog</Link></li>
            <li className="list"><Link to="/contact-us" className="link">Contact Us</Link></li>
            <li className="list"><Link to="/" className="btn-wrap">Get a Free Consultation <span><img className="arrow" src={arrow} alt="" /></span></Link></li>
        </ul>
        <button className="toggle-button" onClick={handleToggleClick}>
                {isMobileNavOpen ? "Close" : "Menu"}
        </button>
      </div>
    </HeaderWrap>
  );
};

export default Header;
