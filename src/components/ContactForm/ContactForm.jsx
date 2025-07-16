import { useForm, ValidationError } from "@formspree/react";
import { successMessage } from "./successMessage";
import { useTranslation } from 'react-i18next';
import { Form, Input, TextArea, SubmitButton } from "./ContactForm.styled";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrgnepoj");
  const { t } = useTranslation();

  if (state.succeeded) {
    successMessage(
      t('contactForm.successTitle'),
      t('contactForm.successText')
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        id="email" 
        type="email" 
        name="email" 
        placeholder={t('contactForm.emailPlaceholder')} 
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <TextArea 
        id="message" 
        name="message" 
        placeholder={t('contactForm.messagePlaceholder')} 
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <SubmitButton type="submit" disabled={state.submitting}>
        {t('contactForm.submitButton')}
      </SubmitButton>
    </Form>
  );
};