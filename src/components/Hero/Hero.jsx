/* eslint-disable no-unused-vars */
import  { useEffect, useRef } from "react";
import { Link } from "../Link/Link";
import { Rings } from "../Rings/Rings";
import Typed from "typed.js";

import {
  HeroSection,
  Container,
  Title,
  Span,
  Intro,
  LinkWrapper,
} from "./Hero.styled";

export const Hero = () => {
  const span = useRef(null);

  useEffect(() => {
    const typed = new Typed(span.current, {
      strings: ["I'm Vlad."],
      typeSpeed: 60,
    });
  });

  const intro = useRef(null);

  useEffect(() => {
    const typed = new Typed(intro.current, {
      strings: [
        "I am a 👶and ambitious 👨‍💻 with a deep understanding of modern technologies. My intensive hands-on experience and excellent knowledge enable me to approach tasks creatively and effectively. I am ready to apply my skills and energy to achieve your goals. My inclination towards active learning and rapid adaptation allows me to make a significant contribution to any project.",
      ],
      typeSpeed: 20,
    });
  });

  return (
    <HeroSection id="hero">
      <Container>
        <Title>
          Hello there! <Span ref={span}></Span>
        </Title>
        <Intro ref={intro}></Intro>
        <LinkWrapper>
          <Link text={"Contact me"} href="#contact" />
        </LinkWrapper>
      </Container>
      <Rings top="150px" right="" bottom="" left="-300px" />
    </HeroSection>
  );
};