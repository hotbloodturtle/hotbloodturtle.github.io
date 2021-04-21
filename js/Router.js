import Home from "./pages/Home.js";
import Components from "./pages/Components.js";

const Router = (path) => {
  const routes = {
    "/": Home,
    "/index.html": Home,
    "/components": Components,
  };
  return routes[path];
};

export default Router;
