import React from "react";
import Layout from "../component/Layout/Layout";
import HeroPage from "../component/Hero/Hero";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroPage follow="Follow" learn="Learn" explore="Explore" subtitle="Click To See Latest Adventures!" />
      </Layout>
    </>
  );
};

export default Home;
