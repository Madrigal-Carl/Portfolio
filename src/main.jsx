import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "@/routes/AppRouter";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { RecentlyViewedProvider } from "@/contexts/RecentlyViewedContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <RecentlyViewedProvider>
          <AppRouter />
        </RecentlyViewedProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
