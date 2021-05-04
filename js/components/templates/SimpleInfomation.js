import TitleTextCard from "../molecules/TitleTextCard.js";
import LinkCard from "../molecules/LinkCard.js";

const StyledSimpleInfomation = () => {
  const cssText = `
    width: 1150px;
    height: 160px;
    display: flex;
    justify-content: space-between;
  `;
  const el = document.createElement("div");
  el.style.cssText = cssText;
  return el;
};

const SimpleInfomation = () => {
  const el = StyledSimpleInfomation();

  const titleTextCard = TitleTextCard({
    props: { title: "title", subTitle: "sub title" },
  });
  el.appendChild(titleTextCard);

  const linkCard = LinkCard();
  el.appendChild(linkCard);

  return el;
};

export default SimpleInfomation;
