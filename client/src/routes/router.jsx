import { createBrowserRouter } from "react-router-dom";
import App from "../App";

//sign up later
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default routes;
