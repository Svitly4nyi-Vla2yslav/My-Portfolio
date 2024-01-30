
// import { Title } from "../Title/Title";

import { FooterSection, FooterContainer } from "./Footer.styled";
// import { SocialsList } from "../SocialsList/SocialsList";
import Resume from "../Resume/Resume";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        {/* <Title /> */}
        <Resume/>
        {/* <SocialsList /> */}
      </FooterContainer>
    </FooterSection>
  );
};