import { useState, useEffect } from "react";
import { NavBar } from "../NavBar/NavBar";
import { SocialsList } from "../SocialsList/SocialsList";
import { Title } from "../Title/Title";
// import sprite from "../../assets/images/sprite.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { HeaderSection, Container, Column } from "./Header.styled";

export const Header = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container>
      <Title />
      <HeaderSection $isScrolled={isScrolled}>

        <Container className="container">
          <Column>
            <div>
              <SocialsList />
            </div>
            <NavBar />
          </Column>
        </Container>
      </HeaderSection>

    </Container>
  );
};