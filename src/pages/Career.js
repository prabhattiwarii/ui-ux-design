import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import color from "../constants/Colors";
import c from "../constants/Constant";
import styled from "styled-components";
import axios from "axios";
import Modal from "./Modal";


const Wrapper = styled.div`
    width:100%;max-width:${c.width};margin:0 auto;padding:60px 20px;box-sizing:border-box;display:flex;flex-direction:column;row-gap:40px;
    & .head-wrap{
        display:flex;flex-direction:column;row-gap:20px;
        & .heading{text-align:center;font-size:32px;font-weight:600;color:${color.black};letter-spacing: 1.05px;}
        & .desc{text-align:center;font-size:16px;line-height:26px;color:${color.black};letter-spacing: 0.45px;}
    }
    & .content-wrap{
        display:flex;flex-direction:column;row-gap:30px;
        & .career{
            background:${color.white};box-shadow: 0px 3px 20px #00000029;padding:30px 20px;border-radius:16px;
            & .heading{color:${color.black};font-size:20px;font-weight:600;margin:0 0 10px;}
            & .location,
            & .salary,
            & .job-type,
            & .industry,
            & .experience,
            & .education
            {color:${color.black};font-size:16px;line-height:26px;margin:0 0 5px;}
            & .btn-apply{color:${color.white};background:${color.DarkOrange};padding:0 25px;height:40px;border:none;cursor:pointer;box-shadow: 5px 10px 15px #EBAC2F4D;border-radius: 8px;text-transform:uppercase;}
        }
    }
`;
const Career = () => {
    const [pageData, setPageData] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getCareer();
    }, []);

    const getCareer = async () => {
        try {
            setLoadMore(true);
            const { data } = await axios.get("http://localhost:3004/careers", {
                params: { page: currentPage },
            });

            setPageData((prevData) => [...prevData, ...data]);
            setCurrentPage(currentPage + 1);
            setLoadMore(false);
        } catch (error) {
            console.error(error);
        }
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [career, setCareer] = useState(null);
    const handleModal = (field) => {
        setIsModalOpen(true);
        setCareer(field);
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout>
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
                                <div className="experience"><b>Experience:</b><span>{field.expirence}</span></div>
                                <div className="education"><b>Education:</b><span>{field.education}</span></div>
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
                {loadMore && <p>Loading...</p>}
                {currentPage <= 3 && (
                <button type="button" onClick={getCareer} className="load-more">{loadMore ? "Loading..." : "Load More"}</button>
                )}
            </Wrapper>
        </Layout>
    );
}

export default Career;

