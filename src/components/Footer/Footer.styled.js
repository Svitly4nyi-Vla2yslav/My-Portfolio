import styled from "styled-components";

const FooterSection = styled.footer`
  padding-top: 0 !important;
  padding-bottom: 40px;
  background-color: transparent;
  position: relative;
  z-index: 100;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media screen and (min-width: 980px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;

    background-color: #ffffff;
  }
`;

const FooterContainer = styled.div`
  padding-top: 40px !important;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    padding: 0 32px;
  }

  @media screen and (min-width: 980px) {
    max-width: 1110px;
  }
`;

export { FooterSection, FooterContainer };