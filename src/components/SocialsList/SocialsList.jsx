import { SocialsUl, SocialsLink, SocialsIcon } from "./SocialsList.styled";
import sprite from "../../assets/images/sprite.svg";

export const SocialsList = () => {
  return (
    <SocialsUl>
      <li  data-aos="fade-down">
        <SocialsLink
          href="https://github.com/Svitly4nyi-Vla2yslav"
          target="_blank"
          rel="noreferrer nofollow noopener"
          aria-label="Open github"
        >
          <SocialsIcon className="socials-icon" width="25" height="24">
            <use href={`${sprite}#icon-github`}></use>
          </SocialsIcon>
        </SocialsLink>
      </li>
      <li  data-aos="fade-down">
        <SocialsLink
          href="https://www.linkedin.com/in/vladyslav-svitlychnyi/"
          target="_blank"
          rel="noreferrer nofollow noopener"
          aria-label="Open linkedin"
        >
          <SocialsIcon className="socials-icon" width="25" height="24">
            <use href={`${sprite}#icon-linkedin`}></use>
          </SocialsIcon>
        </SocialsLink>
      </li>
    </SocialsUl>
  );
};