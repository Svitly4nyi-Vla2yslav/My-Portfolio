import { ContactForm } from "../ContactForm/ContactForm";
import { useTranslation } from 'react-i18next';
import {
  ContactSection,
  Container,
  Title,
  ContactText,
} from "./Contact.styled";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <ContactSection id="contact">
      <Container>
        <div>
          <Title>{t('contact.title')}</Title>
          <ContactText>
            {t('contact.description')}
          </ContactText>
        </div>
        <ContactForm />
      </Container>
    </ContactSection>
  );
};