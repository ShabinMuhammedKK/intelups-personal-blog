import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import FeedsPage from "./FeedsPage.tsx";
import LandingPage from "./LandingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        <h1>404 not found!</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "feeds",
        element: <FeedsPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
