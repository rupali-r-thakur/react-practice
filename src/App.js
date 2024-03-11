import React from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <TextForm heading={"Enter Your Text"}/>
      </div>
    </>
  );
}

export default App;
