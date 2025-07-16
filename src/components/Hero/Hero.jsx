import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "../Link/Link";
// import { Rings } from "../Rings/Rings";
import Typed from "typed.js";

import {
  HeroSection,
  Container,
  Title,
  Span,
  Intro,
  LinkWrapper,
} from "./Hero.styled";
// import ImageAvatar from "../Image/Image";

export const Hero = () => {
  const { t } = useTranslation();
  const span = useRef(null);
  const intro = useRef(null);

  useEffect(() => {
    const typedName = new Typed(span.current, {
      strings: [t('hero.name')],
      typeSpeed: 90,
    });

    const typedIntro = new Typed(intro.current, {
      strings: [t('hero.intro')],
      typeSpeed: 50,
    });

    return () => {
      typedName.destroy();
      typedIntro.destroy();
    };
  }, [t]);

  return (
    <HeroSection id="hero">
      <Container>
        <Title>
          {t('hero.title')} <Span ref={span}></Span>
        </Title>
        <Intro ref={intro}></Intro>
        <LinkWrapper>
          <Link text={t('hero.contactButton')} href="#contact" />
        </LinkWrapper>
      </Container>
      {/* <Rings top="150px" right="" bottom="" left="-300px" /> */}
    </HeroSection>
  );
};