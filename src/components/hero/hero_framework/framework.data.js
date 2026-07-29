import discoverIllustration from "../../../assets/images/hero/framework_steps/discover.png";
import validateIllustration from "../../../assets/images/hero/framework_steps/validate.png";
import designIllustration from "../../../assets/images/hero/framework_steps/design.png";
import prototypeIllustration from "../../../assets/images/hero/framework_steps/prototype.png";
import engineerIllustration from "../../../assets/images/hero/framework_steps/engineer.png";
import launchIllustration from "../../../assets/images/hero/framework_steps/launch.png";

import IdeaIcon from "../../../assets/icons/hero/framework_steps/have_an_idea_icon.png";
import IKnowWhatIcon from "../../../assets/icons/hero/framework_steps/i_know_what_icon.png";

export const clientPaths = [
  {
    id: "idea",
    // icon: "!",
    icon: IdeaIcon,
    tone: "blue",
    title: "I HAVE AN IDEA",
    description: "I need clarity, validation and the right direction.",
  },
  {
    id: "defined",
    icon: IKnowWhatIcon,
    tone: "orange",
    title: "I KNOW WHAT I NEED",
    description: "I need the right team to build it beautifully and reliably.",
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
  },
  {
    id: "validate",
    number: "2",
    title: "Validate",
    description: "Test assumptions and reduce risk before building.",
    image: validateIllustration,
    imageAlt: "Team validating ideas on a research board",
    tone: "blue",
  },
  {
    id: "design",
    number: "3",
    title: "Design",
    description: "Structure the solution and craft meaningful experiences.",
    image: designIllustration,
    imageAlt: "Interface wireframes",
    tone: "blue",
  },
  {
    id: "prototype",
    number: "4",
    title: "Prototype",
    description: "Bring ideas to life and validate with real users.",
    image: prototypeIllustration,
    imageAlt: "Mobile product prototype",
    tone: "orange",
  },
  {
    id: "engineer",
    number: "5",
    title: "Engineer",
    description: "Build scalable, maintainable and high-quality products.",
    image: engineerIllustration,
    imageAlt: "Code editor interface",
    tone: "orange",
  },
  {
    id: "launch",
    number: "6",
    title: "Launch & Iterate",
    description: "Launch with confidence and keep improving what matters.",
    image: launchIllustration,
    imageAlt: "Rocket launching",
    tone: "orange",
  },
];
