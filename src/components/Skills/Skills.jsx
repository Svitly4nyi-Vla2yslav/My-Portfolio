import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SkillsItem } from "../SkillsItem/SkillsItem";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SkillsSection, SkillsContainer, SkillsList } from "./Skills.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import sprite from "../../assets/images/sprite.svg";
import spriteOne from "../../assets/images/sprite-1.svg";

export const Skills = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const skills = t('skills.skillsData', { returnObjects: true }).map((skill, index) => {
    const originalSkills = [
      {
        icon: `${sprite}#icon-javascript`,
        link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
      },
      {
        icon: `${sprite}#icon-ts`,
        link: "https://www.typescriptlang.org/",
      },
      {
        icon: `${sprite}#icon-react`,
        link: "https://reactjs.org/",
      },
      {
        icon: `${sprite}#icon-redux`,
        link: "https://redux.js.org/",
      },
      {
        icon: `${spriteOne}#Docker`,
        link: "https://www.docker.com/",
      },
      {
        icon: `${sprite}#icon-html`,
        link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
      },
      {
        icon: `${sprite}#icon-css`,
        link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
      },
      {
        icon: `${sprite}#icon-sass`,
        link: "https://sass-lang.com/",
      },
      {
        icon: `${sprite}#icon-vite`,
        link: "https://vitejs.dev/",
      },
      {
        icon: `${sprite}#icon-webpack`,
        link: "https://webpack.js.org/",
      },
      {
        icon: `${sprite}#icon-git`,
        link: "https://git-scm.com/",
      },
      {
        icon: `${spriteOne}#postman`,
        link: "https://www.postman.com/",
      },
      {
        icon: `${sprite}#icon-nodejs`,
        link: "https://nodejs.org/docs/latest/api/",
      },
      {
        icon: `${sprite}#icon-mongodb`,
        link: "https://www.mongodb.com/",
      }
    ];

    return {
      ...skill,
      icon: originalSkills[index].icon,
      link: originalSkills[index].link
    };
  });

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>{t('skills.title')}</SectionTitle>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillsItem key={index} {...skill} />
          ))}
        </SkillsList>
      </SkillsContainer>
    </SkillsSection>
  );
};