import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from "./reportWebVitals";

const Header = () => {
  return <h2 className="hello">Hello world!</h2>;
};

const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: "300px",
  };

  return (
    <input
      style={styledField}
      type="text"
      placeholder={holder}
      className="first-container"
      autoComplete=""
      htmlFor=""
    />
  );
};

const Btn = () => {
  const text = "Log in";
  const logged = false;
  return <button className="btn">{logged ? "Logged" : text}</button>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Btn />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
