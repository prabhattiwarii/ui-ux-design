import React, {useState } from "react";
import Layout from "../components/layout/Layout";
import color from "../constants/Colors";
import c from "../constants/Constant";
import styled from "styled-components";
import Modal from "./Modal";
import BreadCrumbs from "../BreadCrumbs"

const Wrapper = styled.div`
width:100%;max-width:${c.width};margin:0 auto;box-sizing:border-box;display:flex;flex-direction:column;row-gap:40px;padding:20px;
& .head-wrap{
    display:flex;flex-direction:column;row-gap:20px;
    & .heading{text-align:center;font-size:32px;font-weight:600;color:${color.black};letter-spacing: 1.05px;}
    & .desc{text-align:center;font-size:16px;line-height:26px;color:${color.black};letter-spacing: 0.45px;}
}
& .content-wrap{
    display:flex;flex-direction:column;row-gap:30px;
    & .career{
        background:${color.white};box-shadow:rgba(0, 0, 0, 0.16) 0px 3px 20px;padding:30px 20px;border-radius:16px;
        & .heading{color:${color.black};font-size:20px;font-weight:600;margin:0 0 10px;}
        & .location{color:${color.black};font-size:16px;line-height:26px;margin:0 0 5px;}
        & .salary{color:${color.black};font-size:16px;line-height:26px;margin:0 0 5px;}
        & .job-type{color:${color.black};font-size:16px;line-height:26px;margin:0 0 5px;}
        & .industry{color:${color.black};font-size:16px;line-height:26px;margin:0 0 5px;}
        & .experience{color:${color.black};font-size:16px;line-height:26px;margin:0 0 5px;}
        & .education{color:${color.black};font-size:16px;line-height:26px;margin:0 0 5px;}
        & .job-detail{font-size:20px;font-weight:600;color:${color.black};margin:18px 0 15px;}
        & .description ul:last-child{margin:10px 0;}
        & .btn-apply{
            color:${color.white};background:${color.DarkOrange};padding:0 25px;height:40px;border:none;cursor:pointer;box-shadow: 5px 10px 15px #EBAC2F4D;border-radius: 8px;text-transform:uppercase;margin:10px 0 0;transition:.2s;font-weight:500;
            &:hover{color:${color.white};background:${color.black};}
        }
    }
}
@media (max-width:991px){
    row-gap:30px;
    & .head-wrap{
        & .heading{font-size:28px;line-height:38px;}
    }
}
@media (max-width:767px) {
    & .head-wrap{
        row-gap:20px;
        & .heading{font-size:24px;}
    }
    & .content-wrap{
        & .career{
            & .btn-apply{padding:0 15px;height:35px;font-size:14px;}
        }
    }
}
@media (max-width:479px){
    & .head-wrap{
        & .heading{font-size:20px;}
    }
    & .content-wrap{
        display:flex;flex-direction:column;row-gap:30px;
        & .career{
            & .heading{font-size:18px;}
            & .location{font-size:14px;line-height:24px;}
            & .salary{font-size:14px;line-height:24px;}
            & .job-type{font-size:14px;line-height:24px;}
            & .industry{font-size:14px;line-height:24px;}
            & .experience{font-size:14px;line-height:24px;}
            & .education{font-size:14px;line-height:24px;}
            & .job-detail{font-size:18px;}
        }
    }
}
`;
const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [career, setCareer] = useState(null);
    const handleModal = (field) => {
        setIsModalOpen(true);
        setCareer(field);
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };
    const breadcrumbs = [
        { name: "Home/", path: "/" },
        { name: "Career", path: "/careers"},
      ];
    const pageData =[
        {
          "id":1,
          "name": "Business Development Executive",
          "location": "Panchkula, Haryana",
          "salary": "₹80,000 to ₹6,00,000",
          "job_type": "Part Time OR Full Time",
          "expirence": "6 months to 5 years",
          "industry": "IT",
          "description": "<p>We are hiring for Online Bidder/BDE candidates on urgent basis</p>\r\n\r\n<h3>Responsibilities and Duties</h3>\r\n\r\n<ul>\r\n\t<li>Should have experience of upwork, guru, freelancer bidding.</li>\r\n\t<li>Must be able to write proposal, Followup and able to answer clients.</li>\r\n\t<li>Must be able to work on different technologies.</li>\r\n\t<li>Must have good communication and writing skills.</li>\r\n\t<li>Must be able to work in a team or independently.</li>\r\n\t<li>Should be comfortable in client interaction.</li>\r\n</ul>\r\n\r\n<h3>Benefits</h3>\r\n\r\n<ul>\r\n\t<li>5 Days working</li>\r\n\t<li>Good salary package for deserving candidates</li>\r\n\t<li>Good working environment</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>",
          "education": "Any Graduation / MBA (Marketing)"
        },
        {
          "id": 2,
          "name": "Android Developer",
          "location": "Panchkula, Haryana",
          "salary": "₹240,000.00 to ₹420,000.00 / year",
          "job_type": "Full Time",
          "expirence": "Android development: 1 year (Preferred)",
          "industry": "Software Development",
          "description": "<p>We are looking for an Android developer responsible for the development and maintenance of applications aimed at a vast number of diverse Android devices. Your primary focus will be the development of Android applications and their integration with back-end services.</p>\r\n\r\n<h3>Requirements:</h3>\r\n\r\n<ul>\r\n\t<li>Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes.</li>\r\n\t<li>Familiarity with Restful APIs to connect Android applications to back-end services.</li>\r\n\t<li>Strong knowledge of Android UI design principles, patterns, and best practices.</li>\r\n\t<li>Experience with offline storage, threading, and performance tuning.</li>\r\n\t<li>Ability to design applications around natural user interfaces, such as touch.</li>\r\n\t<li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks.</li>\r\n\t<li>Ability to understand business requirements and translate them into technical requirements.</li>\r\n\t<li>Familiarity with cloud message APIs and push notifications.</li>\r\n\t<li>A knack for bench-marking and optimisation.</li>\r\n\t<li>Understanding of Google&#39;s Android design principles and interface guidelines.</li>\r\n\t<li>Proficient understanding of code versioning tools.</li>\r\n</ul>",
          "education": "Bachelor's (Preferred)"
        }
        ]

    return (
        <Layout>
            <BreadCrumbs crumbs={breadcrumbs}/>
            <Wrapper>
            <div className="head-wrap">
                <div className="heading">Current Openings</div>
                <div className="desc">
                    We’re always on the lookout for new talent. Even if the job role you’re looking for isn’t listed, we’d still love to hear from you. Email us your CV, cover letter, current salary, and the role you’d like to apply for.
                </div>
            </div>
            <div className="content-wrap">
                {pageData && pageData.length > 0 ? (
                    pageData.map((field) => (
                    <div className="career" key={field.id}>
                        <div className="heading">{field.name}</div>
                        <div className="location"><b>Location: </b><span>{field.location}</span></div>
                        <div className="salary"><b>Salary: </b><span>{field.salary}</span></div>
                        <div className="job-type"><b>Job Type: </b><span>{field.job_type}</span></div>
                        <div className="industry"><b>Industry: </b><span>{field.industry}</span></div>
                        <div className="experience"><b>Experience: </b><span>{field.expirence}</span></div>
                        <div className="education"><b>Education: </b><span>{field.education}</span></div>
                        <div className="job-detail">Job Details</div>
                        <div className="description" dangerouslySetInnerHTML={{ __html: field.description }} />
                        <button type="button" className="btn-apply" onClick={() => handleModal(field)}>Apply Now</button>
                    </div>
                    ))
                    ) : (
                        <p>No job listings available at the moment.</p>
                    )}
            </div>
                {isModalOpen && <Modal onCloseModal={onCloseModal} career={career} />}
            </Wrapper>
        </Layout>
    );
}

export default Career;

