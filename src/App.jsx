import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  const [cityName, setCityName] = useState("");

  return (
    <>
      <Header updateSearch={setCityName} />
      <Home showCity={cityName} />
    </>
  );
}

export default App;
