import Home from "./pages/Home.js";

const Router = (path) => {
  console.log(path);
  const routes = {
    "/": Home,
    "/index.html": Home,
  };
  return routes[path];
};

export default Router;
