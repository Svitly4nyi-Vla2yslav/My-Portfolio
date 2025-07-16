import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "../Link/Link";
import { NavList } from "./NavBar.styled";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav data-aos="fade-left" data-aos-easing="ease-in-sine">
      <NavList>
        <li>
          <Link href="#projects" text={t('navbar.projects')} target="_self" />
        </li>
        <li>
          <Link href="#skills" text={t('navbar.skills')} target="_self" />
        </li>
        <li>
          <Link href="#experience" text={t('navbar.experience')} target="_self" />
        </li>
        <li>
          <Link href="#contact" text={t('navbar.contact')} target="_self" />
        </li>
      </NavList>
    </nav>
  );
};