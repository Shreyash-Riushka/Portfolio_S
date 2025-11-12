export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "CARS24",
    description:
      "Scoped and executed the SuperApp, including cross-sell assets, resulting in an additional GMV of INR 6.5 Cr. Devised GTM strategies and CRM leading to a 41% increase in monthly active users and 85% API cost reduction.",
    technologies: ["Tableau", "Snowflake", "Jira"],
    github: "https://drive.google.com/file/d/1EABlgj-Gsz60s7Z-qdshgvZRP3Md1WGU/view?usp=drive_link",
    demo: "https://drive.google.com/file/d/1ClggdPMBaWuZ6Cd_Fm5TZbLj36bH9lU5/view?usp=drive_link",
    image: require(".//../../public/projects/orbit2.jpg"),
    available: true,
  },
  {
    id: 1,
    name: "OYO ",
    description:
      "Conducted UX research and A/B testing on hotel interfaces, increasing booking conversion by 12%. Designed data dashboards (Metabase, SQL) to analyze property analytics and improve UX decisions.",
    technologies: ["FIGMA", "ADOBE XD", "Framer Motion"],
    github: "https://github.com/victorcodess/interlock",
    demo: "https://interlock-teal.vercel.app/",
    image: require(".//../../public/projects/oyo1.jpg"),
    available: true,
  },

  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];
