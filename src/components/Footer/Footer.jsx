
import { Title } from "../Title/Title";

import { FooterSection, FooterContainer } from "./Footer.styled";
import { SocialsList } from "../SocialsList/SocialsList";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Title />
        <SocialsList />
      </FooterContainer>
    </FooterSection>
  );
};