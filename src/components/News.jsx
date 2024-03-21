import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";

function News() {
  const [article, setArticle] = useState([]);
  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [totlePage, setTotlePage] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ce2cf79be39f4219ade285f5ab7b5951&page=${page}&pageSize=${limit}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticle(parseData.articles);
    setTotlePage(parseData.totalResults);
    setLoading(false);
  };
  const previousPage = () => {
    setLoading(true);
    setpage(page - 1);
    setLoading(false);
  };
  const nextPage = () => {
    setLoading(true);
    if (page + 1 > Math.ceil(totlePage / limit)) {
      // alert("Do nothing since it's already at the last page")
    } else {
      setpage(page + 1);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container my-3 ">
        <div className="row">
          <div className="text-center">
            <h2>newsMonkey - top headline</h2>
            <div>{loading && <Spiner />}</div>
          </div>
          {!loading &&
            article.map((element) => {
              // console.log(element);
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            onClick={previousPage}
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
          >
            &larr; previous
          </button>
          <button
            onClick={nextPage}
            disabled={page + 1 > Math.ceil(totlePage / limit)}
            type="button"
            className="btn btn-dark"
          >
            next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default News;
