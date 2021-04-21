import Heading from "../atoms/Heading.js";

const Resume = () => {
  const div = document.createElement("div");
  div.textContent = "welcome resume";

  const heading = Heading({ text: "강해석" });
  div.appendChild(heading);

  return div;
};

export default Resume;
