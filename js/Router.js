import PageHome from "./pages/PageHome.js";
import PageResume from "./pages/PageResume.js";

const Router = (path) => {
  const routes = {
    "/": PageHome,
    "/index.html": PageHome,
    "/resume": PageResume,
  };
  return routes[path];
};

export default Router;
