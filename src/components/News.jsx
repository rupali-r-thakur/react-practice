import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function News() {
  const [article, setArticle] = useState([]);
  // console.log(article);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ce2cf79be39f4219ade285f5ab7b5951"
    ).then((result) => {
      result.json().then((resp) => {
        setArticle(resp.articles);
      });
    });
  }, []);

  return (
    <>
      <div className="container my-3 ">
        <div className="row">
          <h2>newsMonkey - top headline</h2>
          {article.map((element) => {
            console.log(element);
            return (
              <div className="col-md-4 ">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
