import App from "../App.js";

const Home = () => {
  const div = document.createElement("div");
  div.textContent = "welcome home";

  const button = document.createElement("button");
  button.textContent = "Go components";
  button.addEventListener("click", (e) => {
    window.history.pushState({}, "", "/components");
    App();
  });

  div.appendChild(button);
  return div;
};

export default Home;
