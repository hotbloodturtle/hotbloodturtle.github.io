import SimpleInfomation from "../components/templates/SimpleInfomation.js";

const ConResume = () => {
  const container = document.createElement("div");
  const simpleInfo = SimpleInfomation();
  container.appendChild(simpleInfo);
  return container;
};

export default ConResume;
