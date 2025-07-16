/* eslint-disable react/jsx-no-undef */
import { TitleLink, TitlePrimary } from "./Title.styled";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"

export const Title = () => {
  return (
    <TitlePrimary data-aos="fade-down"
      data-aos-easing="linear">
      <TitleLink href="#hero">VlaDyslav <br />SvitlyCHnyi <br /> <LanguageSwitcher /></TitleLink>

    </TitlePrimary>
  );
};