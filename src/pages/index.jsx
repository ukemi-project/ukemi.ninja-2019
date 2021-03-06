import React from "react";
import Helmet from "react-helmet";

import config from "../../data/siteConfig";
import { MetaData } from "../components/meta";
import Landing from "../components/home/Landing";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ServicesSlider from "../components/home/ServiceOverview";
import Roadmap from "../components/home/Roadmap";
import RecentPosts from "../components/blog/RecentPosts";
import CTA2 from "../components/common/CTA2";
import CTASocials from "../components/common/CTASocials";
import CTAEmail from "../components/common/CTAEmail";

const Index = ({ location }) => {
  return (
    <>
      <MetaData
        title="Movement Design Specialists"
        location={location}
        image="/images/og-index.png"
      />

      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Landing />
        <FeaturedProjects />
        <ServicesSlider />
        <CTASocials />
        <Roadmap />
        <CTAEmail />
        <RecentPosts />
        <CTA2 />
      </div>
    </>
  );
};

export default Index;
