import React, { useState } from "react";
function TextForm(props) {
  const [textValue, setTextValue] = useState("");
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode == "light" ? "black" : "white",
        }}
      >
        <h1 className="my-4">{props.heading}</h1>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            style={{
              backgroundColor: props.mode == "light" ? "white" : "#020520",
              color: "white",
            }}
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
            Clear Text
          </button>

          <button className="btn btn-primary my-2 mx-2" onClick={copyText}>
            Copy Text
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={() => setTextValue(textValue.split(/[ ]+/).join(" "))}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{
          color: props.mode == "light" ? "black" : "white",
        }}
      >
        <h1>your text summary</h1>
        <p>
          {
            textValue.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {textValue.replace(/\s/g, "").length} characters
        </p>
        <h1>Preview</h1>
        <p>
          {textValue.length > 0 ? textValue : "Somthing Enter In Your Text Box"}
        </p>
      </div>
    </>
  );
}
export default TextForm;