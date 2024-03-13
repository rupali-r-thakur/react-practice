import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light");
  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020520";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavBar mode={mode} toggleBtn={toggleBtn} />
      <div className="container">
        <TextForm heading={"Enter Your Text"} mode={mode} />
      </div>
    </>
  );
}

export default App;
