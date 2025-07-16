import { useTranslation } from 'react-i18next';
import { ProjectCard } from "../ProjectCard/ProjectCard";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsList,
} from "./Projects.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Projects = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const projects = t('projects.projectsData', { returnObjects: true }).map((project, index) => ({
    ...project,
    technologies: [
      "React",
      "TypeScript",
      "Styled-Components",
      "i18next",
      "React Router",
      "Toastify",
      "Netlify Functions"
    ],
    projectLink: "https://logistic-sito.netlify.app",
    codeLink: "https://github.com/Svitly4nyi-Vla2yslav/logistic-sito"
  }));

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectsList>
      </ProjectsContainer>
    </ProjectsSection>
  );
};