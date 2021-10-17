import React from "react";
import { Link } from "react-router-dom";
import { Stagger, FadeTransform } from "react-animation-components";

const ArticlesList = ({ articles }) => (
  <Stagger in className="container">
    <div className="row programs">
      <div className="col-12 col-lg-10 mx-auto article-list-item-container">
        {articles.map((article, key) => (
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateX(-100%)",
            }}
            delay="2000"
            key={key}
            className="article-list"
          >
            <Link
              className="article-list-links"
              to={`/article/${article.name}`}
            >
              <h3>{article.title}</h3>

              <div className="image-container">
                <img className="article-thumbnail" src={article.image} alt="" />
              </div>
              {/* <div className="article-description ml-sm-4">
                      <span className="memo">Published: {article.date}</span>
                      <p>
                        {article.content[0].substring(0, 150)}...
                        <i className="fa fa-hand-o-right ml-3" />
                      </p>
                    </div> */}
            </Link>
          </FadeTransform>
        ))}
      </div>
    </div>
  </Stagger>
);

export default ArticlesList;
