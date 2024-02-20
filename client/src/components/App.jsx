import "../css/index.css";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.jsx";

function App() {
  const routes = useRoutes([
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
