import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner"; // corrected typo in import
function News() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ce2cf79be39f4219ade285f5ab7b5951&page=${page}&pageSize=12`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      setArticles(data.articles);
      setTotalPages(Math.ceil(data.totalResults / 12));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col text-center">
            <h2>newsMonkey - top headlines</h2>
            {loading && <Spiner />}
          </div>
        </div>
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4 my-2" key={article.url}>
              <NewsItem
                title={article.title ? article.title.slice(0, 30) : ""}
                description={
                  article.description ? article.description.slice(0, 80) : ""
                }
                imageUrl={article.urlToImage}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col d-flex justify-content-between">
            <button
              onClick={previousPage}
              disabled={page <= 1 || loading}
              type="button"
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button
              onClick={nextPage}
              disabled={page >= totalPages || loading}
              type="button"
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default News;