import React from "react";

function TimeDate() {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <>
      <h1>Hello, my name is Rupali Sharma</h1>
      <p>
        todays date is: <b>{date}</b>
      </p>
      <p>
        current time is: <b>{time}</b>
      </p>
    </>
  );
}

export default TimeDate;
