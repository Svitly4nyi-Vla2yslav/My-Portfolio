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

  const projects = [
    {
      title: t('projects.setoLogistic.title'),
      type: t('projects.setoLogistic.type'),
      description: t('projects.setoLogistic.description'),
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
      codeLink: "https://github.com/Svitly4nyi-Vla2yslav/logistic-sito",
      viewProjectText: t('projects.setoLogistic.viewProject'),
      viewCodeText: t('projects.setoLogistic.viewCode')
    },
    {
      title: t('projects.prixDeLor.title'),
      type: t('projects.prixDeLor.type'),
      description: t('projects.prixDeLor.description'),
      technologies: [
        "React",
        "TypeScript",
        "Styled-Components",
        "React Router",
        "FormSpree",
        "AOS"
      ],
      projectLink: "https://change-cold.netlify.app/",
      codeLink: "https://github.com/Svitly4nyi-Vla2yslav/best-gold",
      viewProjectText: t('projects.prixDeLor.viewProject'),
      viewCodeText: t('projects.prixDeLor.viewCode')
    },
    {
      title: t('projects.angelSystems.title'),
      type: t('projects.angelSystems.type'),
      description: t('projects.angelSystems.description'),
      technologies: [
        "React",
        "Vite",
        "React Spring",
        "i18next",
        "TypeScript",
        "Styled-Component",
      ],
      projectLink: "https://www.angelsystems.ch",
      codeLink: "https://github.com/Svitly4nyi-Vla2yslav/healthy-sitting",
      viewProjectText: t('projects.angelSystems.viewProject'),
      viewCodeText: t('projects.angelSystems.viewCode')
    },
    {
      title: t('projects.tastyTreats.title'),
      type: t('projects.tastyTreats.type'),
      description: t('projects.tastyTreats.description'),
      technologies: [
        "HTML",
        "SCSS",
        "JavaScript",
        "REST API",
        "Responsive Layout",
      ],
      projectLink: "https://andreys86.github.io/Project-Yummy-Creators-/",
      codeLink: "https://github.com/AndreyS86/Project-Yummy-Creators-",
      viewProjectText: t('projects.tastyTreats.viewProject'),
      viewCodeText: t('projects.tastyTreats.viewCode')
    },
    {
      title: t('projects.contactHub.title'),
      type: t('projects.contactHub.type'),
      description: t('projects.contactHub.description'),
      technologies: [
        "React",
        "React-Router",
        "Redux tookit",
        "Styled Components",
        "Ant-design",
        "REST API",
        "axios",
        "react-particles",
      ],
      projectLink: "https://svitly4nyi-vla2yslav.github.io/goit-react-hw-08-phonebook/",
      codeLink: "https://github.com/Svitly4nyi-Vla2yslav/goit-react-hw-08-phonebook/tree/main",
      viewProjectText: t('projects.contactHub.viewProject'),
      viewCodeText: t('projects.contactHub.viewCode')
    },
    {
      title: t('projects.watchSpot.title'),
      type: t('projects.watchSpot.type'),
      description: t('projects.watchSpot.description'),
      technologies: ["HTML/CSS", "JavaScript", "Responsive Layout"],
      projectLink: "https://startonio.github.io/project-05/",
      codeLink: "https://github.com/Startonio/project-05",
      viewProjectText: t('projects.watchSpot.viewProject'),
      viewCodeText: t('projects.watchSpot.viewCode')
    },
    {
      title: t('projects.filmicExplorer.title'),
      type: t('projects.filmicExplorer.type'),
      description: t('projects.filmicExplorer.description'),
      technologies: [
        "React",
        "React-Router",
        "Styled Components",
        "REST API",
        "axios",
      ],
      projectLink: "https://svitly4nyi-vla2yslav.github.io/goit-react-hw-05-movies/",
      codeLink: "https://github.com/Svitly4nyi-Vla2yslav/goit-react-hw-05-movies",
      viewProjectText: t('projects.filmicExplorer.viewProject'),
      viewCodeText: t('projects.filmicExplorer.viewCode')
    }
  ];

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