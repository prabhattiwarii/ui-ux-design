import React from "react";
import styled from "styled-components";
import colors from "../constants/Colors";
import image from "../assets/Images";
import Layout from "../components/layout/Layout";
import CompanyAbout from "../components/home/CompanyAbout";
import IndustryServe from "../components/home/IndustryServe";
import Testimonial from "../components/home/Testimonial";
import BreadCrumbs from "../BreadCrumbs";
import c from "../constants/Constant";

const AboutWrap = styled.div`
  width: 100%;

  & .about-section {
    max-width: 100%;width: ${c.width};margin: 0 auto;padding:40px 20px;display: flex;flex-direction: column;row-gap: 30px;

    & .head {
      margin: 0;font-weight: 500;font-size: 16px;line-height: 26px;color: ${colors.black};max-width: 1200px;
    }

    & .content {
      display: flex;column-gap: 30px;max-height: 300px;

      & .text {
        display: flex;flex-direction: column;row-gap: 32px;flex: 0 0 50%;max-height: 292px;

        & .desc {
          margin: 0;color: ${colors.lightBlack};font-size: 16px;line-height: 26px;
        }

        & .heading {
          color: ${colors.lightBlack};font-size: 16px;font-weight: 600;line-height: 26px;
        }
      }

      & .img {
        & .banner {
          width: 100%;
        }
      }
    }

    & .strategies {
      display: flex;flex-direction: column;row-gap: 10px;

      & .lists {
        margin: 0;display: flex;flex-direction: column;row-gap: 10px;

        & .list {
          margin: 0;color: ${colors.lightBlack};font-size: 16px;line-height: 26px;

          &.list-1 {
            width: 49rem;
          }
        }
      }
    }
  }

  & .company-component {
    background: ${colors.lightGray};
  }

  & .mission {
    max-width: 100%;width: ${c.width};margin: 0 auto;padding: 40px 20px;display: flex;column-gap: 43px;

    & .team-mission {
      background: ${colors.white};box-shadow: 0px 3px 20px #00000029;border-radius: 25px;padding: 50px;display: flex;flex-direction: column;row-gap: 10px;

      & .heading {
        font-size: 32px;color: ${colors.black};font-weight: 600;position: relative;

        &:before {
          content: "";position: absolute;background: ${colors.DarkOrange};width: 4px;height: 100%;opacity: 0.7;left: -50px;
        }
      }

      & .text {
        margin: 0;color: ${colors.lightBlack};font-size: 16px;line-height: 26px;
      }
    }
  }

  @media (max-width: 1292px) {

    & .about-section {
      & .content {
        max-height: 100%;

        & .text {
          max-height: 100%;
        }
      }

      & .strategies {
        & .lists {
          & .list-1 {
            width: 100% !important;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    & .about-section {
      & .content {
        flex-direction: column-reverse;gap: 10px;align-items:center;
        & .img{
          & .banner{
            max-width:400px;
          }
        }
        & .text{
            & .desc{
              font-size:15px;line-height:25px;
            }
        }
      }
      & .strategies {
        & .lists {
          & .list{
            font-size:15px;line-height:25px;
          }
        }
      }
    }

    & .mission {
      flex-direction: column;gap: 25px;

      & .team-mission {
        padding: 35px;gap: 5px;

        & .heading {
          font-size:24px;
          &:before {
            left: -35px;
          }
        }
        & .text{
          font-size:15px;line-height:25px;
        }
      }
    }

  }

  @media (max-width: 479px) {
    & .head{
        font-size:15px !important;
    }
    & .content {
      display: flex;column-gap: 30px;max-height: 300px;

      & .text {
        row-gap: 18px;

        & .desc {
          font-size: 14px !important;line-height: 24px !important;
        }

        & .heading {
          font-size: 15px !important;
        }
      }
    }
    & .strategies{
        & .lists{
        & .list{
            font-size:14px !important;
        }
        }
      }
    & .mission {
    & .team-mission {
    & .heading {
        font-size: 22px;
    }
    & .text{
        font-size:14px;
    }
    }}
  }
`;

const missionData = [
  {
    title: "Our Team",
    desc:
      "We have a discrete team of designers, developers and internet marketers that is completely dedicated towards clients. They put their hearts and efforts into the project to provide the best results. We turn our clients’ expectations into successful strategies.",
  },
  {
    title: "Our Mission",
    desc:
      "We help our clients to grow their businesses through our design consultation and marketing solutions. We drive them to conquer their online marketing goals. Our success lies in our clients’ growth and our ingenious team that has years of experience in developing high-quality websites.",
  },
];

const About = () => {
  const breadcrumbs = [
    { name: "About Us", path: "/about-us"},
  ];
  return (
    <Layout page="about-us">
      <BreadCrumbs breadcrumbs={breadcrumbs}/>
      <AboutWrap>
        <div className="about-section">
          <h4 className="head">
            Whether you are looking for a website design and development firm
            in India or a skilled team of Application developer or a top-notch
            branding agency, The Works Pro is your solution. We work hard and
            break down all the barriers to providing you with a high-end website
            or application.
          </h4>
          <div className="content">
            <div className="text">
              <p className="desc">
                We believe in working together with a team of dedicated
                designers, developers and marketing experts to build something
                great and exceptional. From start-ups to established online
                businesses, we offer a complete array of digital solutions and
                develop marketing strategies from the core. We synthesize
                appropriate business plans and provide technical expertise that
                will definitely help you to maintain the leading edge in the
                market. We love to hear new ideas and bring life to them. We
                enjoy working with the clients who understand the power of web
                solutions. We collaborate to help them overcome all kinds of
                designing problems through cutting-edge technologies.
              </p>
              <div className="heading">
                From strategic consulting to creative designs, we have great
                experience in delivering customized turnkey solutions. We can
                help you:
              </div>
            </div>
            <div className="img">
              <img className="banner" src={image.banner2} alt="Banner" />
            </div>
          </div>
          <div className="strategies">
            <ul className="lists">
              <li className="list list-1">
                Improve your sales & create a leading edge in the market through
                strategic planning and emerging market opportunities.
              </li>
              <li className="list">
                Streamline and boost your operational competence through
                innovative development solutions and cutting edge marketing
                solutions.
              </li>
              <li className="list">
                Harness the power of the internet to fulfill your business needs
                and accommodate future growth prospects.
              </li>
            </ul>
          </div>
        </div>
        <div className="company-component">
          <CompanyAbout />
        </div>
        <div className="mission">
          {missionData.map((mission, index) => (
            <div className="team-mission" key={index}>
              <div className="heading">{mission.title}</div>
              <p className="text">{mission.desc}</p>
            </div>
          ))}
        </div>
        
          <IndustryServe />
          <Testimonial />
      </AboutWrap>
    </Layout>
  );
};

export default About;
