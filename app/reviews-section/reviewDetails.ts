import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "GAJENDRA JANGID",
    role: "CO-FOUNDER $ CMO",
    company: "CARS24",
    profileImg: alex,
    testimonial:
      "Shreyash represents the kind of young talent every organization hopes to find, when we give emerging talents the space to experiment and create, they consistently exceed expectations and redefine what’s possible.",
  },
  {
    name: "DEEPENDRA",
    role: "SENIOR PRODUCT MANAGER",
    company: "CARS24",
    profileImg: jerry,
    testimonial:
      "Driven by curiosity and exploration, Shreyash designs like a traveler, always discovering new perspectives and translating them into intuitive experiences that connect people and possibilities.",
  },
  {
    name: "RITESH AGARWAL",
    role: "FOUNDER",
    company: "OYO",
    profileImg: mauro,
    testimonial:
      "If talent were a product, Shreyash would be the perfect MVP, fast to iterate, sharp on insight, and always improving through feedback. A designer built for collaboration, creativity, and impact.",
  },
  
];
