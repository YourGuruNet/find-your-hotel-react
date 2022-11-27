import React from "react";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import Layout from "../components/Layout";
import SearchSection from "../components/SearchSection/SearchSection";

const Home = () => {
  return (
    <Layout>
      <SearchSection />
      <CarouselSlider />
    </Layout>
  );
};

export default Home;
