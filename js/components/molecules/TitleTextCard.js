import Text from "../atoms/Text.js";

const cssText = () => `
  width: 250px;
  height: 150px;
`;

const TitleTextCard = ({ props }) => {
  const { title, subTitle } = props;
  const el = document.createElement("div");

  const titleText = Text({
    props: { text: title },
    style: { fontSize: "36px", fontWeight: "500" },
  });
  el.appendChild(titleText);

  if (subTitle) {
    const subTitleText = Text({ props: { text: subTitle } });
    el.appendChild(subTitleText);
  }

  el.style.cssText = cssText();

  return el;
};

export default TitleTextCard;
