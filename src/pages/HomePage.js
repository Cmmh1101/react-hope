import React from "react";
import Hero from "../components/Hero";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import GetInvolved from "../components/GetInvolved";
import Gallery from "../components/Gallery";

const HomePage = () => (
  <>
    <Hero />
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <GetInvolved />
        </div>
        <div className="col-12 mt-5"></div>
      </div>
    </div>
    <Gallery />
    <ArticlesList articles={articleContent} className="home_article_list" />
  </>
);

export default HomePage;
