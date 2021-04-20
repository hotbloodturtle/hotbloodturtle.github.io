import Home from "./pages/Home.js";
import Resume from "./pages/Resume.js";

const Router = (path) => {
  const routes = {
    "/": Home,
    "/index.html": Home,
    "/resume": Resume,
  };
  return routes[path];
};

export default Router;
