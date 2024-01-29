
import { ContactForm } from "../ContactForm/ContactForm";
// import { Rings } from "../Rings/Rings";

import {
  ContactSection,
  Container,
  Title,
  ContactText,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <div>
          <Title>Contact</Title>
          <ContactText>
            I would love to see any your project and how I could help or any
            other suggestions. Please fill in the form, and I’ll get back to you
            as soon as possible.
          </ContactText>
        </div>
        <ContactForm />
        {/* <Rings top="200px" right="" bottom="" left="-300px" /> */}
      </Container>
    </ContactSection>
  );
};