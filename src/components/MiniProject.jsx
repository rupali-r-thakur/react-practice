import React from "react";

function MiniProject() {
  let time = new Date();
  let currTime = time.getHours();
  let greeting;
  let style = {
    color: "black",
  };
  if (currTime >= 1 && currTime <= 12) {
    greeting = "Good Morning";
    style.color = "green";
  } else if (currTime > 12 && currTime < 16) {
    greeting = "Good Afternoon";
    style.color = "orange";
  } else if (currTime > 16 && currTime < 20) {
    greeting = "Good Evning";
    style.color = "blue";
  } else {
    greeting = "Good Night";
  }

  return (
    <div className="main_div">
      <h1>
        Hello Sir, <span style={style}>{greeting}</span>
      </h1>
    </div>
  );
}

export default MiniProject;
