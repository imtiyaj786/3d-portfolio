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
  salesforce,
  cloud,
  netflixClone,
  googleClone,
  CustomPath,
  EventBooking,
  GoogleMap,
  PostOffice,
  YouTube,
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
  {
    id: "cv",
    title: "Resume",
  },
];

const services = [
  {
    title: "Salesforce Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Node JS Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Salesforce",
    icon: salesforce,
  },
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
    title: "Salesforce Developer Trainee",
    company_name: "CloudCertitude",
    icon: cloud,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "Triggers · Apex Programming · Asynchronous Apex · Public Site · Visual Force · Test Classes.",
      "Salesforce Lightning Design · Aura Components · Lightning Web Components · Salesforce Administration.",
      "Salesforce Flows · Metadata API · REST APIs · SOAP APIs · Tooling Api · SOQL · SOSL.",
      "Salesforce Sales Cloud · Salesforce Service Cloud · Salesforce Experience Cloud · Salesforce.com.",
    ],
  },
  {
    title: "Salesforce Developer",
    company_name: "CloudCertitude",
    icon: cloud,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Designed & developed VisualForce , Aura, LWC, Flows and Proficient in designing of Custom objects, Custom fields, Page layouts, Custom Tabs, Custom Application, Validation Rules, Approval processes, Sharing Rules.",
      "Developed Apex Classes, Controller Classes, Batch Apex, Apex Scheduler and Apex Triggers for various functional needs in the application and creating Lightning Apps, Lightning Design System, Lightning App Builder.",
      "Have worked on Salesforce integration with REST APIs like Razorpay , Facebook , Google drive, One drive, WhatsApp integration based on project requirement.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  /*
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
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
    name: "Netflix Clone",
    description:
      "Fullstack Netflix Clone in this A user can register and login through valid email and password and also login through their Gmail or gitHub. After login user can play Movies and add and remove movies in fev section. For store movies I am using MongoDB as Database.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma & MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: netflixClone,
    source_code_link: "https://github.com/imtiyaj786/Netflix-Clone",
  },
  {
    name: "Google Clone",
    description:
      "A Google Search clone which is created by using Next JS and tailwind CSS. In this I am using google search api to show search results is All and Images views.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: googleClone,
    source_code_link: "https://github.com/imtiyaj786/google-clone-v2",
  },
  {
    name: "Event Booking",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Calendar JS",
        color: "pink-text-gradient",
      },
    ],
    image: EventBooking,
    source_code_link: "https://github.com/",
  },
  {
    name: "Google Map Marker",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Geocoding APIs",
        color: "pink-text-gradient",
      },
    ],
    image: GoogleMap,
    source_code_link: "https://github.com/",
  },
  {
    name: "Custom Path",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Trigger",
        color: "pink-text-gradient",
      },
    ],
    image: CustomPath,
    source_code_link: "https://github.com/",
  },
  {
    name: "YouTube APIs",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Youtube APIs",
        color: "pink-text-gradient",
      },
    ],
    image: YouTube,
    source_code_link: "https://github.com/",
  },
  {
    name: "PostOffice APIs",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Post Office APIs",
        color: "pink-text-gradient",
      },
    ],
    image: PostOffice,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
