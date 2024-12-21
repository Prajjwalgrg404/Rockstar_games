import React from "react";
import Header from "./Components/Header";
import Newswire from "./Components/Newswire";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Videos from "./Components/Videos";
import Download from "./Components/Download";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="newswire" element={<Newswire />}></Route>
        <Route path="videos" element={<Videos />}></Route>
        <Route path="download" element={<Download />}></Route>
      </Routes>
    </div>
  );
}

export default App;
