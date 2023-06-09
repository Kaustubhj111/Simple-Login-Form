import React from "react";
import Form from "./Form";

var isLoggedIn = "false";

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Form />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
