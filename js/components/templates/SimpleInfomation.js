import TitleTextCard from "../molecules/TitleTextCard.js";

const SimpleInfomation = () => {
  const el = document.createElement("div");

  const titleTextCard = TitleTextCard({
    props: { title: "강해석", subTitle: "엔지니어" },
  });
  el.appendChild(titleTextCard);
  return el;
};

export default SimpleInfomation;
