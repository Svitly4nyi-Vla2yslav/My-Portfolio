// import  { useId } from "react";
// import { Rings } from "../Rings/Rings";
import { useEffect } from 'react';
import { SkillsItem } from "../SkillsItem/SkillsItem";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SkillsSection, SkillsContainer, SkillsList } from "./Skills.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { skills } from "./skillsData";

export const Skills = () => {
  // const id = useId();
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>Tech stack</SectionTitle>
        <SkillsList>
          {skills.map((skill, index ) => (
            <SkillsItem key={index} {...skill} />
          ))}
        </SkillsList>
      </SkillsContainer>
      {/* <Rings top="" right="-300px" bottom="40px" left="" /> */}
    </SkillsSection>
  );
};