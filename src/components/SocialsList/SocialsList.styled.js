import styled from "styled-components";

const SocialsUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3px;
  margin-top: 10px;
 

  @media screen and (min-width: 768px) {
    margin-left: -20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    transform: rotate(90deg) translateY(100%);
    // display: block;

  }

  @media screen and (max-width: 767px) {

    gap: 0px;
    margin-left: 0;
  }

  @media screen and (min-width: 1124px) and (max-width: 1323px) {
  
  }
`;

const SocialsLink = styled.a`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover .socials-icon {
    fill: #56bb40;
  }
`;

const SocialsIcon = styled.svg`
  fill: #ffffff;
  transition-duration: 300ms;
  z-index: 300;
`;

export { SocialsUl, SocialsLink, SocialsIcon };