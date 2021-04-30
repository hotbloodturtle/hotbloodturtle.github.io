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
    props: { title: "홍길동", subTitle: "서비스 엔지니어" },
  });
  el.appendChild(titleTextCard);

  const linkCard = LinkCard();
  el.appendChild(linkCard);

  return el;
};

export default SimpleInfomation;
