import styled from "styled-components";

const SocialsUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media screen and (max-width: 767px) {
    gap: 10px;
    margin-left: 0;
  }
`;

const SocialsLink = styled.a`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .socials-icon {
    fill: #4ee1a0;
  }
`;

const SocialsIcon = styled.svg`
  fill: #ffffff;
  transition-duration: 300ms;
`;

export { SocialsUl, SocialsLink, SocialsIcon };