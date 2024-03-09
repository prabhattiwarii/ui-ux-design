import React from "react";
import Layout from "../components/layout/Layout";
import Solution from "../components/home/Solution";
import Banner from "../components/home/Banner";
import ServiceCard from "../components/home/ServiceCard";
import CompanyAbout from "../components/home/CompanyAbout";
import OurWork from "../components/home/OurWork";
import IndustryServe from "../components/home/IndustryServe";
import Testimonial from "../components/home/Testimonial";
import LatestBlog from "../components/home/LatestBlog";
import Users from "../components/home/Users";

const Home = () => {
  return (
    <Layout>
      <Banner/>
      {/* <CompanyAbout/>
      <Solution/>
      <ServiceCard/>
      <OurWork/>
      <IndustryServe/>
      <Testimonial/> */}
      <Users/>
      <LatestBlog/>
    </Layout>
  )
}

export default Home;