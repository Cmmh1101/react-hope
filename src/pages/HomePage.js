import React from "react";
import Hero from "../components/Hero";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import GetInvolved from "../components/GetInvolved";
import Gallery from "../components/Gallery";
import Quote from "../components/Quote";
import About from "../components/About";

const HomePage = () => (
  <>
    <Hero />

    <GetInvolved />

    <Gallery />

    <About />

    <ArticlesList articles={articleContent} className="home_article_list" />

    <Quote />
  </>
);

export default HomePage;
