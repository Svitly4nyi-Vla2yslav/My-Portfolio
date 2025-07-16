import { useTranslation } from 'react-i18next';
import { Container, Link } from "./Resume.styled";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Link
        href="https://drive.google.com/file/d/1D69U9qWZQzXH7Pu58QtCvbdFzv6qZgnV/view?usp=sharing"
      >
        {t('resume.downloadCV')}
      </Link>
      <Link
        href='https://drive.google.com/file/d/16D179v6Hvdi0UrjCJghhLy6Tkdw_OBVR/view?usp=sharing'>
        {t('resume.lebenslauf')}
      </Link>
      <Link 
        href="https://drive.google.com/file/d/1GO_wwl3V_aJU3Any7DoCKl1za5B6QUtC/view?usp=sharing">
        {t('resume.certificate')}
      </Link>
    </Container>
  )
}

export default Resume;