import "../css/index.css";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import axios from "axios";

axios.defaults.baseURL = "https://rate-my-tech-stack.onrender.com";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <>{routes}</>;
}

export default App;
