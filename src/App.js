// import React, { useState } from "react";
// import MiniProject from "./components/MiniProject";
// import Todolist from "./components/Todolist";
import News from "./components/News";
import Newseapp from "./components/Newseapp";
// import TimeDate from "./components/TimeDate";
// import NavBar from "./components/NavBar";
// import TextForm from "./components/TextForm";
function App() {
  // const [mode, setMode] = useState("light");
  // const toggleBtn = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#020520";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //   }
  // };
  return (
    <>
      {/* <NavBar mode={mode} toggleBtn={toggleBtn} />
      <div className="container">
        <TextForm heading={"Enter Your Text"} mode={mode} />
      </div> */}
      {/* <TimeDate /> */}
      {/* <MiniProject /> */}
      {/* <Todolist /> */}
      <Newseapp />
      <News />

    </>
  );
}

export default App;
