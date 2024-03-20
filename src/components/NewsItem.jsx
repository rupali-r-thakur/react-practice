import React from "react";

function NewsItem(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src={
          props.imageUrl
            ? props.imageUrl
            : "https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985612.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais"
        }
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href={props.newsUrl} target="_blank" class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
