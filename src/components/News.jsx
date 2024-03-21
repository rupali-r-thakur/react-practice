import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function News() {
  const [article, setArticle] = useState([]);
  const [page, setpage] = useState(1);
  const [limit, setLimit]=useState(12);
  const [totlePage, setTotlePage]=useState();
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ce2cf79be39f4219ade285f5ab7b5951&page=${page}&pageSize=${limit}`;
      let data = await fetch(url);
      let parseData = await data.json();
      setArticle(parseData.articles);
      setTotlePage(parseData.totalResults)
  };
  const previousPage = () => {
    setpage(page - 1);
  };
  const nextPage = () => {
    if(page+1>Math.ceil(totlePage/limit)){
      alert("Do nothing since it's already at the last page")

    }
    else{
    setpage(page + 1);}
  };

  return (
    <>
      <div className="container my-3 ">
        <div className="row">
          <h2>newsMonkey - top headline</h2>
          {article.map((element) => {
            // console.log(element);
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0,30):""}
                  description={element.description?element.description.slice(0,80):""}
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
          <button onClick={nextPage} type="button" className="btn btn-dark">
            next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default News;
