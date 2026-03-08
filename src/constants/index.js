import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  university,
  paulwurth,
  nebraspumps,
  aimedic,
  ramin_power_plant,
  atlassarma,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mechanical Engineer Intern",
    company_name: "Paul Wurth S.A.",
    icon: paulwurth,
    iconBg: "#ffffff",
    date: "Feb 2026 - Present",
    points: [
      "Mechanical design and analysis of components for a camera enclosure system in a blast furnace environment.",
      "Used CAD and CAE tools including CREO for geometry design and Ansys Fluent for fluid flow analysis of an air knife.",
      "Prepared technical reporting and documentation using LaTeX.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "University of Luxembourg",
    icon: university,
    iconBg: "#ffffff",
    date: "Apr 2025 - Nov 2025",
    points: [
      "Analyzed heat transfer at the nanoscale using LAMMPS documentation and computational workflows.",
      "Worked with Python programming, including Matplotlib, in Linux-based HPC environments.",
      "Supported Fortran-based code workflows for research applications.",
    ],
  },
  {
    title: "Project Manager Intern",
    company_name: "Nebraspumps",
    icon: nebraspumps,
    iconBg: "#ffffff",
    date: "Apr 2024 - Jul 2024",
    points: [
      "Acted as liaison between client and engineering team for pump projects.",
      "Prepared and coordinated technical documentation including P&ID, WBS, ITP, test reports, and commissioning plans.",
      "Managed client comments, revisions, and document approvals to ensure project alignment and timely delivery.",
    ],
  },
  {
    title: "Heating and Air Conditioning Engineer",
    company_name: "Atlassarma",
    icon: atlassarma,
    iconBg: "#ffffff",
    date: "Nov 2023 - Mar 2024",
    points: [
      "Designed HVAC systems including chillers and Air Handling Units (AHUs) for industrial applications.",
      "Performed compressor selection and refrigeration cycle component sizing using industry-standard selection tools.",
      "Designed evaporators and condensers using USA Coil and Aspen EDR, and sized liquid lines using CoolSelector.",
      "Developed production-ready heat exchanger models in SolidWorks.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "AIMedic",
    icon: aimedic,
    iconBg: "#ffffff",
    date: "Jul 2022 - Nov 2022",
    points: [
      "Implemented MA-Net (Mutex Attention Network) using TensorFlow for medical image segmentation tasks.",
      "Performed data preprocessing, feature engineering, and model evaluation using Python libraries including NumPy, Pandas, and scikit-learn.",
      "Developed data visualizations and performance analysis plots using Matplotlib and Seaborn.",
    ],
  },
  {
    title: "Mechanical Engineering Intern",
    company_name: "Ramin Thermal Power Plant",
    icon: ramin_power_plant,
    iconBg: "#ffffff",
    date: "May 2018 - Aug 2018",
    points: [
      "Participated in assembly and disassembly of shell-and-tube heat exchangers for maintenance and overhaul operations.",
      "Inspected tubes, baffles, and tube sheets to identify scaling, fouling, and mechanical defects.",
      "Supported maintenance procedures including cleaning, gasket replacement, and leak testing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };