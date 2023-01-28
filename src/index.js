import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ReviewsCtxtProvider } from "./store/ReviewsContext";
import { UserProvider } from "./store/authContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReviewsCtxtProvider>
      <BrowserRouter>
        <UserProvider>
          <ReviewsCtxtProvider>
            <App />
          </ReviewsCtxtProvider>
        </UserProvider>
      </BrowserRouter>
    </ReviewsCtxtProvider>
  </React.StrictMode>
);
