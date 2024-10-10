import styled from "styled-components";

const HeaderSection = styled.header`

  width: 100%;
  position: fixed;
  top: -13%;
  left: -35%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  z-index: 10;
  transform: rotate(-90deg) translateY(-100%);
  
  transition-duration: 150ms;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "transparent" : "transparent"};

 backdrop-filter: blur(8px);
  border-radius: 10px;

  @media screen and (max-width: 767px)  {
    display: flex;
    position: static;
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    width: 85%;
    padding-top: 40px;
    padding-bottom: 20px;
    align-items: center;
    top: 0;
    left: 50%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    position: fixed;
    top: 21%;
    left: -31%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    z-index: 10;
    transform: rotate(-90deg) translateY(-100%);
    
    transition-duration: 150ms;
    background-color: ${({ $isScrolled }) =>
      $isScrolled ? "transparent" : "transparent"};
  }

  @media screen and (min-width: 1124px){
    width: 100%;
    position: fixed;
    top: -19%;
    left: -45%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    z-index: 10;
    transform: rotate(-90deg) translateY(-100%);
    
    transition-duration: 150ms;
    background-color: ${({ $isScrolled }) =>
      $isScrolled ? "transparent" : "transparent"};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto 0 ;
  padding: 0 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-item: center;
    // justify-content: space-between;
    align-items: center;
    // max-width: 700px;
    padding: 0 32px;
    width: 35%;
  }

  @media screen and (min-width: 980px) {
    // max-width: 1110px;
    transform-origin: left top; 
    
  }
`;

const Column = styled.div`
  display: flex;
  // 

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export { HeaderSection, Container, Column };