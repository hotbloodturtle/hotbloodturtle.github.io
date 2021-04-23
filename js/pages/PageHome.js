import App from "../App.js";

const PageHome = () => {
  const div = document.createElement("div");
  div.textContent = "welcome home";

  const button = document.createElement("button");
  button.textContent = "Go resume";
  button.addEventListener("click", (e) => {
    window.history.pushState({}, "", "/resume");
    App();
  });

  div.appendChild(button);
  return div;
};

export default PageHome;
