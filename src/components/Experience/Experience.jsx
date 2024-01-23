import { useId } from "react";
import {
  ExperienceSection,
  ExperienceContainer,
  ExperienceList,
} from "./Experience.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";

import { experienceData } from "./experienceData";

export const Experience = () => {
  const id = useId();

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceList>
          {experienceData.map(item => (
            <ExperienceItem key={id} {...item} />
          ))}
        </ExperienceList>
      </ExperienceContainer>
    </ExperienceSection>
  );
};