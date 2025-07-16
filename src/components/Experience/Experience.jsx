import { useTranslation } from 'react-i18next';
import {
  ExperienceSection,
  ExperienceContainer,
  ExperienceList,
} from "./Experience.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";

export const Experience = () => {
  const { t } = useTranslation();

  const experienceData = [
    {
      period: t('experience.currentJob.period'),
      title: t('experience.currentJob.title'),
      name: t('experience.currentJob.company'),
      text: t('experience.currentJob.description'),
      responsibilities: t('experience.currentJob.technologies', { returnObjects: true })
    },
    {
      period: "",
      title: t('experience.emptyJob.title'),
      name: "",
      text: t('experience.emptyJob.description'),
      responsibilities: t('experience.emptyJob.technologies', { returnObjects: true })
    }
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <ExperienceList>
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </ExperienceList>
      </ExperienceContainer>
    </ExperienceSection>
  );
};