import React, { useState } from "react";

function TextForm(props) {
  const [textValue, setTextValue] = useState("");
  const sentencecase = () => {};
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
          className="btn btn-primary my-2 mx-2"
          onClick={() => setTextValue(textValue.toUpperCase())}
        >
          Change To UpperCase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={() => setTextValue(textValue.toLowerCase())}
        >
          Change To LowerCase
        </button>

        <button
          className="btn btn-primary my-2 mx-2"
          onClick={() => setTextValue("")}
        >
          clear text
        </button>
      </div>
      <div className="container">
        <h1>your text summary</h1>
        <p>
          {
            textValue.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {textValue.length} characters
        </p>
        <h1>Preview</h1>
        <p>{textValue}</p>
      </div>
    </>
  );
}

export default TextForm;
