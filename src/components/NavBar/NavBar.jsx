import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "../Link/Link";
import { NavList } from "./NavBar.styled";

import {useEffect } from "react";


export const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav data-aos="fade-left"
    
      data-aos-easing="ease-in-sine">
      <NavList>
        <li>
          <Link href="#projects" text="Projects" target="_self" />
        </li>
        <li>
          <Link href="#skills" text="Skills" target="_self" />
        </li>
        <li>
          <Link href="#experience" text="Experience" target="_self" />
        </li>
        <li>
          <Link href="#contact" text="Contact" target="_self" />
        </li>
      </NavList>
    </nav>
  );
};