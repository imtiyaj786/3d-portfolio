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
  threejs,
  salesforce,
  cloud,
  CloudDegree,
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
    id: "project",
    title: "Project",
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
    title: "Salesforce Developer",
    company_name: "360 Degree Cloud Technologies Pvt Ltd",
    icon: CloudDegree,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Designed & developed VisualForce , Aura, LWC, Flows and Proficient in designing of Custom objects, Custom fields, Page layouts, Custom Tabs, Custom Application, Validation Rules, Approval processes, Sharing Rules.",
      "Developed Apex Classes, Controller Classes, Batch Apex, Apex Scheduler and Apex Triggers for various functional needs in the application and creating Lightning Apps, Lightning Design System, Lightning App Builder.",
      "Have worked on Salesforce integration with REST APIs like Razorpay , Facebook , Google drive, One drive, WhatsApp integration based on project requirement.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Salesforce Developer",
    company_name: "Cloud Certitude Pvt Ltd",
    icon: cloud,
    iconBg: "#383E56",
    date: "January 2022 - July 2023",
    points: [
      "Exprience in creating Lightning App combining Lightning Design System, Lightning App Builder, Lightning Component.",
      "Proficient in designing of Custom object, Custom fields, Page layout, Custom tab, Custom application.",
      "Good knowledge of technical and functional aspects on demand CRM package salesforce.com Setup, Configuration, Customization, Administration, Data Migration.",
      "Worked on Triggers · Apex Programming · Sync and Asynchronous Apex · Public Site · Visual Force · Test Classes.",
      "Aura Components · Lightning Web Components · Salesforce Administration · Salesforce Flows · Metadata API.",
      "REST APIs · SOAP APIs · Tooling Api · SOQL · SOSL · Salesforce Sales Cloud · Salesforce Service Cloud · Salesforce Experience Cloud · Salesforce.com.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Their technical skills, he is a great team player who actively collaborates with stakeholders and cross-functional teams. Their problem-solving mindset and proactive approach make them an asset to any organization.",
    name: "Bharat Motwani",
    designation: "Sr Salesforce Developer",
    company: "Cloud Certitude Pvt Ltd.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "He possesses strong knowledge of Salesforce and consistently demonstrates a positive attitude. He is highly adaptable, eager to learn, and committed to delivering high-quality results. His proactive approach and excellent problem-solving skills make him a valuable asset to any team.",
    name: "Arun Keshari",
    designation: "Sr Salesforce Developer",
    company: "Coforge",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I’ve had the pleasure of knowing Md Imtiyaj Alam as a highly skilled Salesforce Developer. Their expertise in developing and customizing Salesforce solutions is impressive, and they consistently deliver results that exceed expectations.",
    name: "Raj Gupta",
    designation: "Sr Software Enginner",
    company: "Tech Mahindra",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Fullstack Netflix Clone, A User can register and login through valid email and password and also login through their Gmail or gitHub. Play Movies, Add, Remove movies in fev section. For store movies I'm Using MongoDB.",
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
        name: "Prisma & MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: netflixClone,
    source_code_link: "https://github.com/imtiyaj786/Netflix-Clone",
  },
  {
    name: "Google Clone",
    description:
      "A Google Search clone which is created by using Next JS and tailwind CSS. In this I am using google search api to show search results. User can see result is All and Images views both in any device.",
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
      "Seat booking is a Client project for booking Events through salesforce. User can book any events and all available and booked seat are showing with their price, User can drag drop and resized event and Pay amount through Razorpay Payment get way.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex Class",
        color: "green-text-gradient",
      },
      {
        name: "FullCalendar JS",
        color: "pink-text-gradient",
      },
    ],
    image: EventBooking,
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
  {
    name: "Google Map Marker",
    description:
      "A Google Map is used to see your company all employee address location with some details like phone number, You just need to select that checkbox which employee address you want to see.",
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
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
  {
    name: "Custom Path",
    description:
      "Custom Path is developed in Lightning web component, Using this just edit your page layout and drag this component in any Objects and its working same as salesforce standard path with some Extra Features.",
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
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
  {
    name: "YouTube APIs",
    description:
      "A YouTube APIs app is used to play and watch any youtube videos in your Salesforce Org it's self, And In this app you can search and videos any results is coming with the help of YouTube APIs.",
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
    source_code_link:
      "https://github.com/imtiyaj786/YouTube-with-Salesforce-Integration",
  },
  {
    name: "PostOffice APIs",
    description:
      "This PostOffice app is used for getting any Post Office all details in all over the India, To find all the details You can search with the help of PinCode or Area Name and all the records will shown below.",
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
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
