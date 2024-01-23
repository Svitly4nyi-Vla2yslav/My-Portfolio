import styled from "styled-components";

const HeaderSection = styled.header`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 20px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  z-index: 10;
  transition-duration: 150ms;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "#151515" : "transparent"};

  @media screen and (max-width: 767px) {
    position: static;
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    padding: 0 32px;
  }

  @media screen and (min-width: 980px) {
    max-width: 1110px;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export { HeaderSection, Container, Column };