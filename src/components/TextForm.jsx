import React, { useState } from "react";

function TextForm(props) {
  const [textValue, setTextValue] = useState("Enter our Text");
  return (
    <>
      <h1 className="my-4">{props.heading}</h1>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
        ></textarea>
        <button
          className="btn btn-primary my-2"
          onClick={() => setTextValue(textValue.toUpperCase())}
        >
          Change To UpperCase
        </button>
      </div>
    </>
  );
}

export default TextForm;
