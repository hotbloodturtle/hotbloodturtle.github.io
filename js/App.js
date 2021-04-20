import Router from "./Router.js ";

const App = () => {
  const Page = Router(window.location.pathname);
  const element = Page();
  const root = document.getElementById("root");
  while (root.firstChild) {
    root.removeChild(root.lastChild);
  }
  root.append(element);
};

export default App;
