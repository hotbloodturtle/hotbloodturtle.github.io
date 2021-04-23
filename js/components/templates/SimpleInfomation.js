import TitleTextCard from "../molecules/TitleTextCard.js";

const SimpleInfomation = () => {
  const el = document.createElement("div");

  const titleTextCard = TitleTextCard();
  el.appendChild(titleTextCard);
  return el;
};

export default SimpleInfomation;
