import discoverIllustration from "../../assets/images/hero/framework_steps/discover_3.png";
import validateIllustration from "../../assets/images/hero/framework_steps/validate_2.png";
import designIllustration from "../../assets/images/hero/framework_steps/design_3.png";
import prototypeIllustration from "../../assets/images/hero/framework_steps/prototype_2.png";
import engineerIllustration from "../../assets/images/hero/framework_steps/engineer_3.png";
import launchIllustration from "../../assets/images/hero/framework_steps/launch.png";

import IdeaIcon from "../../assets/icons/hero/framework_steps/have_an_idea_icon.png";
import IKnowWhatIcon from "../../assets/icons/hero/framework_steps/i_know_what_icon.png";

export const clientPaths = [
  {
    id: "idea",
    icon: IdeaIcon,
    tone: "blue",
    title: "MY IDEA IS NOT VALIDATED YET",
    description:
      "I need clarity, evidence, and the right product direction before investing in development.",
    stepIds: [
      "discover",
      "validate",
      "design",
      "prototype",
      "engineer",
      "launch",
    ],
  },
  {
    id: "defined",
    icon: IKnowWhatIcon,
    tone: "orange",
    title: "MY IDEA IS VALIDATED AND CLEARLY DEFINED",
    description:
      "I need the right partner to design and build it beautifully and reliably.",
    stepIds: ["design", "prototype", "engineer", "launch"],
  },
];
export const frameworkSteps = [
  {
    id: "discover",
    number: "1",
    title: "Discover",
    description: "Understand users, problems and opportunities.",
    image: discoverIllustration,
    imageAlt: "Two people discussing a product idea",
    tone: "blue",

    imageScale: 1.08,
    imageMaxWidth: "220px",
    imageOffsetY: "0px",
  },
  {
    id: "validate",
    number: "2",
    title: "Validate",
    description: "Test assumptions and reduce risk before building.",
    image: validateIllustration,
    imageAlt: "Product validation exercise",
    tone: "blue",

    imageScale: 1.1,
    imageMaxWidth: "225px",
    imageOffsetY: "0px",
  },
  {
    id: "design",
    number: "3",
    title: "Design",
    description: "Structure the solution and craft meaningful experiences.",
    image: designIllustration,
    imageAlt: "Product wireframes",
    tone: "blue",

    imageScale: 1.08,
    imageMaxWidth: "218px",
    imageOffsetY: "0px",
  },
  {
    id: "prototype",
    number: "4",
    title: "Prototype",
    description: "Bring ideas to life and validate with real users.",
    image: prototypeIllustration,
    imageAlt: "Mobile product prototype",
    tone: "orange",

    imageScale: 1.12,
    imageMaxWidth: "190px",
    imageOffsetY: "-2px",
  },
  {
    id: "engineer",
    number: "5",
    title: "Engineer",
    description: "Build scalable, maintainable and high-quality products.",
    image: engineerIllustration,
    imageAlt: "Code editor interface",
    tone: "orange",
    imageRotation: "-2deg",
    imageScale: 1.08,
    imageMaxWidth: "220px",
    imageOffsetY: "-2px",
  },
  {
    id: "launch",
    number: "6",
    title: "Launch & Iterate",
    description: "Launch with confidence and keep improving what matters.",
    image: launchIllustration,
    imageAlt: "Rocket launching",
    tone: "orange",

    imageScale: 1.14,
    imageMaxWidth: "220px",
    imageOffsetY: "-2px",
  },
];
