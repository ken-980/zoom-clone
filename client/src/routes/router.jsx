import { createBrowserRouter } from "react-router-dom";
import { MainVideoAndChat } from "../components/MainVideoAndChat";

//sign up later
const routes = createBrowserRouter([
  {
    path: "/",
    element: <h2> Sign in </h2>,
  },
  {
    path: "/call",
    element: <MainVideoAndChat />,
  },
]);

export default routes;
