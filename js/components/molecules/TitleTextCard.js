import Text from "../atoms/Text.js";

const StyledTitleTextCard = () => {
  const cssText = `
    width: 250px;
    height: 150px;
  `;
  const el = document.createElement("div");
  el.style.cssText = cssText;
  return el;
};

const TitleTextCard = ({ props }) => {
  const { title, subTitle } = props;
  const el = StyledTitleTextCard();

  const titleText = Text({
    props: { text: title },
    style: { fontSize: "36px", fontWeight: "500" },
  });
  el.appendChild(titleText);

  if (subTitle) {
    const subTitleText = Text({ props: { text: subTitle } });
    el.appendChild(subTitleText);
  }

  return el;
};

export default TitleTextCard;
