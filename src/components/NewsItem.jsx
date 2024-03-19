import React from "react";

function NewsItem(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img class="card-img-top" src={props.imageUrl} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{props.title}...</h5>
        <p class="card-text">{props.description}...</p>
        <a href={props.newsUrl} target="_blank" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
