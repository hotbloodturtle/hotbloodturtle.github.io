import App from "./App.js";

const root = document.getElementById("root");

window.addEventListener("DOMContentLoaded", () => {
  const app = App();
  root.appendChild(app);
});
