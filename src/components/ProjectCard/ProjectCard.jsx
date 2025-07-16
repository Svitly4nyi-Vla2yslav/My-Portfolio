/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { Link } from "../Link/Link";

import {
  Card,
  ProjectTitle,
  ProjectDescription,
  ProjectType,
  TechnologiesList,
  TechnologiesItem,
  LinksWrapper,
} from "./ProjectCard.styled";

export const ProjectCard = ({
  title,
  type,
  description,
  technologies,
  projectLink,
  codeLink,
}) => {
  const { t } = useTranslation();

  return (
    <Card>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>
        <ProjectType>{type}</ProjectType>
        {description}
      </ProjectDescription>
      <TechnologiesList>
        {technologies.map((tech, index) => (
          <TechnologiesItem key={index}>{tech}</TechnologiesItem>
        ))}
      </TechnologiesList>
      <LinksWrapper>
        <Link text={t('projectCard.viewProject')} href={projectLink} target="_blank" />
        <Link text={t('projectCard.viewCode')} href={codeLink} target="_blank" />
      </LinksWrapper>
    </Card>
  );
};