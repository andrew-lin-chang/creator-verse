import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCreator from "./pages/AddCreator.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/show" element={<ShowCreators />}></Route>
        <Route path="/add" element={<AddCreator />}></Route>
        <Route path="/edit" element={<EditCreator />}></Route>
        <Route path="/view" element={<ViewCreator />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
