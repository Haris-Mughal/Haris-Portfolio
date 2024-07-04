import {FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSlack} from 'react-icons/fa';
import {SiGmail, SiLeetcode} from 'react-icons/si';

const handleOpenSocialNetwork = (url: string) => () => {
  window.open(url, '_blank');
};

const handleOpenGmail = () => {
  window.location.href = `mailto:${'harismirza3456@gmail.com'}`;
};

export const socialNetworks = (size: number = 45, isFooter = false) => [
  <button
    title="LinkedIn"
    key="linkedin"
    className="target-blank"
    onClick={handleOpenSocialNetwork('https://www.linkedin.com/in/muhammad-haris-ahsan-825113249/')}
  >
    <FaLinkedin
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="Github"
    key="github"
    className="target-blank"
    onClick={handleOpenSocialNetwork('https://github.com/haris-mughal/')}
  >
    <FaGithub
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="Leet Code"
    key="leetCode"
    className="target-blank"
    onClick={handleOpenSocialNetwork('https://leetcode.com/u/Muhammad_Haris_Ahsan/')}
  >
    <SiLeetcode
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  // <button title="telegram" key="telegram" onClick={handleOpenSocialNetwork('https://t.me/evgennikolenko')}>
  //   <FaTelegram
  //     size={size}
  //     key="telegram"
  //     className={`m-auto text-[${size}px] ${
  //       isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
  //     } hover:cursor-pointer`}
  //   />
  // </button>,
  <button
    title="Instagram"
    key="instagram"
    onClick={handleOpenSocialNetwork('https://www.instagram.com/you_call_me_harii_/')}
  >
    <FaInstagram
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="Facebook"
    key="facebook"
    onClick={handleOpenSocialNetwork('https://www.facebook.com/profile.php?id=100061029926998')}
  >
    <FaFacebook
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button title="G-mail" key="gmail" onClick={handleOpenGmail}>
    <SiGmail
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,

  <button
    title="Discord"
    key="discord"
    onClick={handleOpenSocialNetwork('https://discordapp.com/users/770216498613452801')}
  >
    <FaDiscord
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="ICodeGuru-Slack"
    key="ICodeGuru-Slack"
    onClick={handleOpenSocialNetwork('https://icodeguru.slack.com/team/U07266W269Y')}
  >
    <FaSlack
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
];
