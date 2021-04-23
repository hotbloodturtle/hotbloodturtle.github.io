import App from "./App.js";

window.addEventListener("DOMContentLoaded", () => {
  if (document.referrer.indexOf("/resume") > -1) {
    window.history.pushState({}, "", "/resume");
  }
  App();
});
window.onpopstate = () => App();
