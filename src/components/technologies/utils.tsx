// import {BiLogoPostgresql} from 'react-icons/bi';
// import {BsBootstrap} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {
  // FaBootstrap,
  FaCss3,
  // FaFacebook, FaGoogle,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa';
// import {MdPayment} from 'react-icons/md';
import {
  // SiAmazonaws,
  // SiApollographql,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiInsomnia,
  // SiGraphql,
  SiJavascript,
  SiMongodb,
  // SiNestjs,
  SiNextdotjs,
  SiPostman,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'JavaScript',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'TypeScript',
        icon: <SiTypescript color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        experience: 1.5,
      },
      {
        label: 'Python',
        icon: <SiPython color="#3C79AB" className="text-[48px] sm:text-[64px]" />,
        experience: 0.5,
      },
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'Next.js',
        icon: <SiNextdotjs className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        experience: 1.5,
      },
      {
        label: 'Redux',
        icon: <SiRedux color="#7B51BE" className="text-[48px] sm:text-[64px]" />,
        experience: 1,
      },
      // {
      //   label: 'Apollo',
      //   icon: <SiApollographql color="#E63CAD" className="text-[48px] sm:text-[64px]" />,
      //   experience: 4,
      // },
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'Bootstrap',
        icon: <SiBootstrap color="#CE6C9C" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'SASS/SCSS',
        icon: <FaSass color="#CE6C9C" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'TailwindCSS',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Node.js',
        icon: <FaNodeJs color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        experience: 1.5,
      },
      {
        label: 'Express',
        icon: <SiExpress color="#818283" className="text-[48px] sm:text-[64px]" />,
        experience: 1.5,
      },
      // {
      //   label: 'Graphql',
      //   icon: <SiGraphql color="#E63CAD" className="text-[48px] sm:text-[64px]" />,
      //   experience: 4,
      // },
      // {
      //   label: 'Nest',
      //   icon: <SiNestjs color="#DA224C" className="text-[48px] sm:text-[64px]" />,
      //   experience: 1,
      // },

      {
        label: 'MongoDb',
        icon: <SiMongodb color="#2c913f" className="text-[48px] sm:text-[64px]" />,
        experience: 1.5,
      },
      {
        label: 'Google firebase',
        icon: <SiFirebase color="#edb825" className="text-[48px] sm:text-[64px]" />,
        experience: 1.5,
      },
      // {
      //   label: 'Postgresql',
      //   icon: <BiLogoPostgresql color="#3A6596" className="text-[48px] sm:text-[64px]" />,
      //   experience: 4,
      // },
    ],
  },
  {
    name: 'Others',
    items: [
      {
        label: 'Github',
        icon: <BsGithub color="#fff" className="text-[48px] sm:text-[64px]" />,
        experience: null,
      },
      {
        label: 'Figma',
        icon: <SiFigma color="#e73659" className="text-[48px] sm:text-[64px]" />,
        experience: null,
      },
      {
        label: 'Git',
        icon: <SiGit color="#f46a00" className="text-[48px] sm:text-[64px]" />,
        experience: null,
      },
      {
        label: 'Postman',
        icon: <SiPostman color="#f48014" className="text-[48px] sm:text-[64px]" />,
        experience: null,
      },
      {
        label: 'Insomnia',
        icon: <SiInsomnia color="#7B51BE" className="text-[48px] sm:text-[64px]" />,
        experience: null,
      },
      // {
      //   label: 'Apple Pay / Google Pay',
      //   icon: <MdPayment className="text-[48px] text-white light:text-black sm:text-[64px]" />,
      //   experience: null,
      // },
      // {
      //   label: 'Google API (Map, GA4 ...)',
      //   icon: <FaGoogle className="text-[48px] text-white light:text-black sm:text-[64px]" />,
      //   experience: null,
      // },

      // {
      //   label: 'Facebook API',
      //   icon: <FaFacebook color="#146BFF" className="text-[48px] sm:text-[64px]" />,
      //   experience: null,
      // },
    ],
  },
];
