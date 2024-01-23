import  { useId } from "react";
import { Rings } from "../Rings/Rings";
import { SkillsItem } from "../SkillsItem/SkillsItem";

import { SkillsSection, SkillsContainer, SkillsList } from "./Skills.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { skills } from "./skillsData";

export const Skills = () => {
  const id = useId();

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>Tech stack</SectionTitle>
        <SkillsList>
          {skills.map(skill => (
            <SkillsItem key={id} {...skill} />
          ))}
        </SkillsList>
      </SkillsContainer>
      <Rings top="" right="-300px" bottom="40px" left="" />
    </SkillsSection>
  );
};