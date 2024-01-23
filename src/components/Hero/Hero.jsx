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
      strings: ["I'm Arsenii."],
      typeSpeed: 60,
    });
  });

  const intro = useRef(null);

  useEffect(() => {
    const typed = new Typed(intro.current, {
      strings: [
        "I develop web and mobile applications using React/React Native and Node.js. Feel free to contact me by clicking a button below or check out my projects! :D",
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