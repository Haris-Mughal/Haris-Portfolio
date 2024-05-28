// function utils() {
//   return (
//     <div>
//       <></>
//     </div>
//   );
// }
// export default utils;

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

// import btfLofo from 'assets/images/btf-logo.png';
// import cfLofo from 'assets/images/cfLogo.png';
// import s2eLofo from 'assets/images/s2e-logo.webp';
// import smartFoodLogo from 'assets/images/smart-food.png';
// import viktreLofo from 'assets/images/viktre-logo.jpeg';
// import weatherAppLofo from 'assets/images/weather-app.png';
// import porfolioLogo from '../../../public/logo.png';

export interface Project {
  name: string;
  description: string;
  // img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const comerciaProjects: Project[] = [
  // {
  //   name: 'Community Funded',
  //   description: `Team size: 10+. Platform streamlines fundraising and community management for education and healthcare sectors. Create branded,
  //   mobile-optimized pages effortlessly and manage initiatives seamlessly. The platform integrates directly with
  //   your brand, website, and existing payment processor. Ideal for inspiring donors and building engaged
  //   communities.`,
  //   img: cfLofo,
  //   stack: [
  //     <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
  //     <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
  //     <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
  //     <SiApollographql key="apollo" color="#E63CAD" className="text-[28px]" />,
  //     <SiGraphql key="graphql" color="#E63CAD" className="text-[28px]" />,
  //     <BiLogoPostgresql key="psql" color="#3A6596" className="text-[28px]" />,
  //   ],
  // },
  // {
  //   name: 'BTF',
  //   description: `Team size: 5. Platform that supports athletes in their development on and off the field by giving them the tools to understand who they are and share
  //   the context to their performance and their growth as a human being with the people most important to them on their journey.`,
  //   img: btfLofo,
  //   stack: [
  //     <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
  //     <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
  //     <FaReact key="native" color="#5ED4F4" className="text-[28px]" />,
  //     <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
  //     <SiMysql key="mysql" color="#3A6596" className="text-[28px]" />,
  //     <SiPrisma key="prizma" color="#3294c9" className="text-[28px]" />,
  //     <SiAmazonaws key="serverless" color="#F1941D" className="text-[28px]" />,
  //   ],
  // },
  // {
  //   name: 'Say2eat',
  //   description: `Team size: 7. Say2eat helps restaurant chains increase direct
  //   online sales, collect valuable consumer insights
  //   and data, manage the customer relationship and
  //   maximize customer loyalty. By enabling. personalized and fully automated conversations
  //   with customers at scale, ordering food from your
  //   favorite restaurants has become as frictionless
  //   as messaging a friend. Say2eat provides a single
  //   and seamless solution for all voice and message
  //   applications (e.g Facebook Messenger, iMessage,
  //   Amazon Echo, Google Home, etc.).
  //   `,
  //   img: s2eLofo,
  //   stack: [
  //     <SiNextdotjs key="next" className="text-[28px] text-black light:text-black" />,
  //     <SiNestjs key="nestjs" color="#DA224C" className="text-[28px]" />,
  //     <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
  //     <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
  //     <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
  //   ],
  // },
  {
    name: 'Nft Marketplace',
    url: 'https://haris-nftmarketplace.vercel.app/',
    description: `Team size: 2 (Me & Huzaifa) .The main goal of the project is to allow a
        user to see nfts on the social projects. My responsibilities were creating new functionality, creating new site versions (their
      maintaining), bugs fixing.`,
    // img: viktreLofo,
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
];

export const customProjects: Project[] = [
  {
    name: 'My Portfolio',
    url: 'https://muhammad-haris-ahsan.vercel.app/',
    description: `Welcome to my portfolio! Explore my diverse range of projects,
      showcasing my expertise in building responsive and dynamic web applications.
      Dive into my code, discover my skills,
      and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
    // img: porfolioLogo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiVite key="vite" color="#ea9b1c" className="text-[28px]" />,
    ],
    git: 'https://github.com/Haris-Mughal/Haris-Portfolio.git',
  },
  {
    name: 'Weather React App',
    // url: 'https://weather.enikosoft.com/',
    description: `React/Typescript/StyledComponent/reduxToolkit/ApiIntegration. You can find weather and current location time for any cities, searched by Google Place Api. Adaptive and responsive design.`,
    // img: weatherAppLofo,
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
    description: `E-commerce project on Next.js, React, Tailwind. Online shop for selling clothes. Adaptive and responsive design. Full checkout proccess. Using clerk auth.`,
    // img: smartFoodLogo,
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
    description: `Library project on React, Tailwind. Online shop for selling Books. Adaptive and responsive design. Full checkout proccess. User friendly and detailed web with Google Books Api.`,
    // img: smartFoodLogo,
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
    // img: smartFoodLogo,
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
    // img: smartFoodLogo,
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
    // img: smartFoodLogo,
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
