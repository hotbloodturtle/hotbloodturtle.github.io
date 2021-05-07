import Icon from "../atoms/Icon.js";
import Paragraph from "../atoms/Paragraph.js";
import Anchor from "../atoms/Anchor.js";

const StyledConIcon = () => {
  const cssText = `
    display: flex;
    width: 110px;
    justify-content: space-between;
  `;
  const el = document.createElement("div");
  el.style.cssText = cssText;
  return el;
};

const StyledConText = () => {
  const cssText = `
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const el = document.createElement("div");
  el.style.cssText = cssText;
  return el;
};

const StyledLinkCard = () => {
  const cssText = `
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const el = document.createElement("div");
  el.style.cssText = cssText;
  return el;
};

const LinkCard = () => {
  const conIcon = StyledConIcon();
  const faIcon = Icon({
    props: {
      classList: ["fab", "fa-facebook"],
      url: "https://www.facebook.com/interpretation.river",
    },
  });
  const gitIcon = Icon({
    props: {
      classList: ["fab", "fa-github"],
      url: "https://github.com/hotbloodturtle",
    },
  });
  conIcon.appendChild(faIcon);
  conIcon.appendChild(gitIcon);

  const conText = StyledConText();
  const emailAnchor = Anchor({
    props: {
      url: "mailto:bloodturtle@naver.com",
      text: "bloodturtle@naver.com",
    },
  });
  const emailText = Paragraph({ props: { text: "Email: " } });
  emailText.appendChild(emailAnchor);
  conText.appendChild(emailText);

  const webAnchor = Anchor({
    props: {
      url: "https://hotbloodturtle.github.io",
      text: "https://hotbloodturtle.github.io",
    },
  });
  const webText = Paragraph({ props: { text: "Web: " } });
  webText.appendChild(webAnchor);
  conText.appendChild(webText);

  const el = StyledLinkCard();
  el.appendChild(conIcon);
  el.appendChild(conText);
  return el;
};

export default LinkCard;
