import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ReviewsCtxtProvider } from "./store/ReviewsContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReviewsCtxtProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReviewsCtxtProvider>
  </React.StrictMode>
);
