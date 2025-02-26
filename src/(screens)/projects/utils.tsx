// import {BiLogoPostgresql} from 'react-icons/bi';
import {
  // FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiAxios,
  SiRedux,
  //  SiStripe,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';

import {
  // SiAmazonaws,
  // SiApollographql,
  // SiGraphql,
  // SiJavascript,
  // SiMongodb,
  // SiMysql,
  // SiNestjs,
  // SiPrisma,
  SiTypescript,
} from 'react-icons/si';

import weatherApp from 'assets/images/weather-app.png';
// import porfolioLogo from '../../../public/logo.png';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

// export const fullStackProjects: Project[] = [
//   {
//     name: 'My Portfolio',
//     url: 'https://muhammad-haris-ahsan.vercel.app/',
//     description: `Welcome to my portfolio! Explore my diverse range of projects,
//       showcasing my expertise in building responsive and dynamic web applications.
//       Dive into my code, discover my skills,
//       and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
//     img: '',
//     stack: [
//       <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
//       <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
//       <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
//       <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
//     ],
//     git: 'https://github.com/Haris-Mughal/Haris-Portfolio.git',
//   },
// ];

export const personalProjects: Project[] = [
  {
    name: 'My Portfolio',
    url: 'https://muhammad-haris-ahsan.vercel.app/',
    description: `Welcome to my portfolio! Explore my diverse range of projects,
      showcasing my expertise in building responsive and dynamic web applications.
      Dive into my code, discover my skills,
      and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
    img: '',
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/Haris-Portfolio.git',
  },
];

export const teamProjects: Project[] = [
  {
    name: 'Comic Me – AI-Powered Comic Creation',
    url: 'https://comicme.netlify.app/',
    description: `Developed an AI-driven storytelling platform that transforms text prompts into illustrated comics within seconds, making high-quality comic creation accessible.
    • Implemented cloud-based AI processing and database management to ensure seamless performance and scalability.
    • Integrated Stable Diffusion for text-to-image and image-to-image transformations, enabling multi-style comic rendering.
    • Enabled real-time editing, instant export (PDF/PNG), and social media sharing features for users.`,
    img: '',
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/ComicMe',
  },
  {
    name: 'ARMS – Autonomous Resource Management System',
    url: 'https://arms-ui.vercel.app/',
    description: `
Developed an AI-powered system to autonomously track and optimize critical resources for astronauts and
disaster-affected communities.
• Implemented real-time monitoring of oxygen, food, power, and communication systems, ensuring efficient survival
strategies.
• Integrated machine learning models to predict survival time based on resource usage and astronaut health data.
• Designed emergency alert mechanisms to notify mission control or emergency teams in critical situations.`,
    img: '',
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/ARMS-UI',
  },
  {
    name: 'AURAFem',
    url: 'https://aura-fem.vercel.app/',
    description: `
Developed a FemTech web app for ovarian cancer with personalized AI-powered health support.
• Created a conversational AI-agent using NLP for human-like responses and machine learning for continuous improvement.
• Implemented emotional intelligence to enhance user interactions with empathetic responses.`,
    img: '',
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/AURAFem-chatbot',
  },
  {
    name: 'Smart Network Planning',
    url: 'https://rajeshthangaraj1-smart-network-planning.hf.space/',
    description: `
Developed a 5G deployment solution leveraging ML, LLMs, and vector search for optimized network planning and
improved connectivity.
• Implemented AI-driven resource allocation and traffic balancing, optimizing 5G network deployment to reduce
inefficiencies.
• Automated complex tasks like network analysis and site selection, saving time and reducing errors in 5G planning.
• Designed scalable architecture using Milvus for efficient processing of large datasets, ensuring seamless performance.`,
    img: '',
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/Ai-Connectivity-Hackathon',
  },
  {
    name: 'CosmoLearn',
    url: 'https://xr-universe.vercel.app/',
    description: `
Developed an XR, AR, and VR educational platform for exploring the solar system.
• Created interactive 3D solar system experiences to simplify complex astronomical concepts, enhancing student
engagement.
• Built a multi-platform solution with a web app and mobile app, integrated with GenAI for enhanced learning.
• Led development, ensuring seamless compatibility across platforms and delivering a live demo for global audiences.`,
    img: '',
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/XR-Universe-WebUI',
  },
];

export const staticProjects: Project[] = [
  {
    name: 'Nft Marketplace',
    url: 'https://haris-nftmarketplace.vercel.app/',
    description: `Team size: 2 (Me & Huzaifa) .The main goal of the project is to allow a
        user to see nfts on the social projects. My responsibilities were creating new functionality, creating new site versions (their
      maintaining), bugs fixing.`,
    img: '',
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiRedux key="redux" color="#86cf35" className="text-[28px]" />,
      <SiAxios key="Axios" color="#2F75C0" className="text-[28px]" />,
      // <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      // <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/NFT-Marketplace-App',
  },
  {
    name: 'Weather App',
    url: 'https://haris-weather-web.vercel.app/',
    description: `React/Typescript/StyledComponent/reduxToolkit/ApiIntegration. You can find weather and current location time for any cities, searched by Google Place Api. Adaptive and responsive design.`,
    img: weatherApp,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiRedux key="redux" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiAxios key="Axios" color="#2F75C0" className="text-[28px]" />,

      // <FaGoogle key="google" color="#000" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/Weather-Web-App',
  },
  {
    name: 'E-commerce store',
    url: 'https://haris-ecommerce-store.vercel.app/',
    description: `E-commerce project on Next.js, React, Tailwind. Online shop for selling clothes. Adaptive and responsive design. Full checkout process. Using clerk auth.`,
    img: '',
    stack: [
      // <SiNextdotjs key="next" className="text-[28px] text-white light:text-black" />,
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiRedux key="redux" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      // <SiStripe key="stripe" color="#6058f8" className="text-[28px]" />,
      // <BiLogoPostgresql key="postgresql" color="#3A6596" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/E-Commerce-Store',
  },
  {
    name: 'Library App',
    url: 'https://haris-library-app.vercel.app/',
    description: `Library project on React, Tailwind. Online shop for selling Books. Adaptive and responsive design. Full checkout process. User friendly and detailed web with Google Books Api.`,
    img: '',
    stack: [
      // <SiNextdotjs key="next" className="text-[28px] text-white light:text-black" />,
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiRedux key="redux" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiAxios key="Axios" color="#2F75C0" className="text-[28px]" />,

      // <SiStripe key="stripe" color="#6058f8" className="text-[28px]" />,
      // <BiLogoPostgresql key="postgresql" color="#3A6596" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/Library-Web-App',
  },
  {
    name: 'News App',
    // url: 'https://haris-library-app.vercel.app/',
    description: `News App project on React, Tailwind. Watch Online News to know about the situations in the world. Adaptive and responsive design. Full details News reports.`,
    img: '',
    stack: [
      // <SiNextdotjs key="next" className="text-[28px] text-white light:text-black" />,
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiRedux key="redux" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiAxios key="Axios" color="#2F75C0" className="text-[28px]" />,

      // <SiStripe key="stripe" color="#6058f8" className="text-[28px]" />,
      // <BiLogoPostgresql key="postgresql" color="#3A6596" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/News-App',
  },
  {
    name: 'Currency Converter App',
    // url: 'https://haris-library-app.vercel.app/',
    description: `Currency Converter used for convert your native currency to foreign's currency. Adaptive and responsive design.`,
    img: '',
    stack: [
      // <SiNextdotjs key="next" className="text-[28px] text-white light:text-black" />,
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiRedux key="redux" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiAxios key="Axios" color="#2F75C0" className="text-[28px]" />,

      // <SiStripe key="stripe" color="#6058f8" className="text-[28px]" />,
      // <BiLogoPostgresql key="postgresql" color="#3A6596" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/Currency-Converter-App',
  },
  {
    name: 'Recipe App',
    // url: 'https://haris-library-app.vercel.app/',
    description: `Recipe App project on React, TailwindCSS. Buy Online Foods Both Desi food and Fast food. User friendly and responsive design. Search for your favorite recipes.`,
    img: '',
    stack: [
      // <SiNextdotjs key="next" className="text-[28px] text-white light:text-black" />,
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiRedux key="redux" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiAxios key="Axios" color="#2F75C0" className="text-[28px]" />,

      // <SiStripe key="stripe" color="#6058f8" className="text-[28px]" />,
      // <BiLogoPostgresql key="postgresql" color="#3A6596" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/Recipe-App',
  },
];
