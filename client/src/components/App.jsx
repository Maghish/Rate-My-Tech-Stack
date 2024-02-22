import "../css/index.css";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import axios from "axios";

axios.defaults.url = "http://localhost:4000/";

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
