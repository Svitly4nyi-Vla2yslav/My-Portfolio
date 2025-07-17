/* eslint-disable react/prop-types */
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
  viewProjectText,
  viewCodeText
}) => {
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
        <Link text={viewProjectText} href={projectLink} target="_blank" />
        <Link text={viewCodeText} href={codeLink} target="_blank" />
      </LinksWrapper>
    </Card>
  );
};