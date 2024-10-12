import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
