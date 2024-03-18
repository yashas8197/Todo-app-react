import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Todos from "./pages/Todos";
import About from "./pages/About";
import TodosDetails from "./pages/TodosDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todos/:todoId",
    element: <TodosDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
