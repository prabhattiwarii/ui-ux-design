import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/gunoxwebsolutions-logo.svg";
import color from "../../constants/Colors";
import c from "../../constants/Constant";
import { barIcon,crosIcon} from "../../helpers/Icon";

const Wrap = styled.div`
    max-width:${c.width};width:100%;margin:0 auto;padding:20px;display:flex;align-items:center;justify-content:space-between;column-gap:20px;box-sizing:border-box;
    & .logo-wrap {
        & .logo-img {width:170px;}
    }

    & .nav {
        & .lists {
            list-style:none;margin:0;padding:0;display:flex;align-items:center;column-gap:30px;
            & .list {
                & .link {
                    font-size:15px;color:${color.black};cursor:pointer;font-weight:600;transition:0.1s;
                    &.active,
                    &:hover{color:${color.orange}}
                }
            }

            & .sublist {
                position:relative;height:49px;display:flex;align-items:center;justify-content:start;
                & .listeditem{
                    display:none;flex-direction:column;overflow:hidden;position:absolute;width:max-content;top:40px;background:#faf6f1;border-radius:8px;
                    & .link{
                        font-size:14px;padding:7px 14px;
                        &:hover{background:${color.orange};color:${color.white};}
                    }
                    &:hover{display:flex;z-index:1;}
                }

                &:hover {
                    & .listeditem {
                        display:flex;z-index:1;
                    }
                }
            }
        }

        & .toggle-button {
            display:none;background:${color.orange};height:35px;height:35px;border:none;border-radius:4px;transition:all 0.3s linear;
            &:hover {color:${color.orange}}
        }
    }

    @media (max-width:991px) {
        & .nav {
            & .lists {
                display:flex;column-gap:20px;margin:0;padding:0;
                & .list {
                    & .link {font-size:14px;color:${color.black};font-weight:600;}
                }
            }
        }
    }

    @media (max-width:767px) {
        & .logo-wrap{
            width:160px;z-index:9;
            & .logo-img{width:100%;}
        }

        & .nav {
            & .lists {
                flex-direction:column;align-items: start;row-gap:15px;box-shadow:${color.lightBlack} 0px 0px 5px 0px;border-radius:5px;padding: 20px;position:absolute;top:95px;right:20px;left:20px;z-index:999;background-color:${color.white};display:${(props) => (props.isMobileNavOpen ? "flex" :"none")};
                & .list {
                    & .link{font-size:14px;}
                }
                & .sublist{height:18px;}
            }
            & .toggle-button{display:flex;align-items:center;}
        }
    }
`;

const Header = (page) => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const handleToggleClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    const nav = [
        {"id": 1,"name": "About Us","link": "about-us","type": "page"},
        {"id": 2,"name": "Services","link": "services","type": "page",
            "childs": [
              {"id": 7,"name": "Web Development","link": "web-development-services","type": "category"},
              {"id": 8,"name": "Ecommerce Solution","link": "ecommerce-solutions","type": "category"},
              {"id": 9,"name": "Mobile App Development","link": "app-development-services","type": "category"},
              {"id": 10,"name": "Web Designing","link": "web-designing-services","type": "category"},
              {"id": 11,"name": "Digital Marketing","link": "digital-marketing-services","type": "category"}
            ]
          },
        {"id": 3,"name": "Portfolio","link": "portfolio","type": "custom"},
        {"id": 4,"name": "Contact Us","link": "contact-us","type": "page"},
        {"id": 5,"name": "Careers","link": "careers","type": "custom"},
        {"id": 6,"name": "Blog","link": "blog","type": "category"}
    ]
  return (
    <Wrap isMobileNavOpen={isMobileNavOpen}>
        <div className="logo-wrap">
            <a href={c.BASE_URL} className="link">
                <img className="logo-img" src={Logo} alt={c.APP_NAME}/>
            </a>
        </div>
        <div className="nav">
            <ul className="lists">
                {nav && nav.map((menuItem) => (
                    <li key={menuItem.id} className={page === menuItem.childs ? "list" : "list sublist"}>
                        {menuItem ? (
                            <a href={`${c.BASE_URL}/${menuItem.link}`} className={page === menuItem.link ? "link active" : "link"}>{menuItem.name}</a>): ""
                        }
                        {menuItem.childs && menuItem.childs.length > 0 && (
                            <div className="listeditem">
                                {menuItem.childs.map((childItem) => ( 
                                    <a href={`${c.BASE_URL}/${childItem.link}`} key={childItem.id} className={page === childItem.link ? "link active" : "link"}>{childItem.name}</a>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <button className="toggle-button" onClick={handleToggleClick}>
                {isMobileNavOpen ? <>{crosIcon({width:22,height:22,fill:color.white})}</> : <>{barIcon({width:22,height:22,fill:color.white})}</>}
            </button>
        </div>
    </Wrap>
  );
};

export default Header;
