import Router from "./Router.js ";

const App = () => {
  const Page = Router(window.location.pathname);
  const element = Page();
  const root = document.getElementById("root");
  root.appendChild(element);
};

export default App;
