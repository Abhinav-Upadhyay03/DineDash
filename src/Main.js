import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode >
      <RouterProvider router={appRouter} />
    </React.StrictMode>
    
);