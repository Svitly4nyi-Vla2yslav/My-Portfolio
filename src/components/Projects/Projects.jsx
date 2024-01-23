import  { useId } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";

import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsList,
} from "./Projects.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { projects } from "./projectsData";

export const Projects = () => {
  const id = useId();

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsList>
          {projects.map(project => (
            <ProjectCard key={id} {...project} />
          ))}
        </ProjectsList>
      </ProjectsContainer>
    </ProjectsSection>
  );
};