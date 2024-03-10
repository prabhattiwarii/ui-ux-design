import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/home/Banner";
import ServiceCard from "../components/home/ServiceCard";
import CompanyAbout from "../components/home/CompanyAbout";
import OurWork from "../components/home/OurWork";
import IndustryServe from "../components/home/IndustryServe";
import Testimonial from "../components/home/Testimonial";
import LatestBlog from "../components/home/LatestBlog";
import Users from "../components/home/Users";
import AboutUs from "../components/home/AboutUS";


const Home = () => {
  return (
    <Layout>
      <Banner/>
      <CompanyAbout/>
      <AboutUs/>
      <ServiceCard/>
      <OurWork/>
      <IndustryServe/>
      <Testimonial/>
      <LatestBlog/>
      {/* <Users/> */}
    </Layout>
  )
}

export default Home;