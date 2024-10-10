import styled from "styled-components";

const ContactSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media screen and (min-width: 980px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  backdrop-filter: blur(8px);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    padding: 0 32px;
  }
  @media screen and (min-width: 980px) {
    display: flex;
    max-width: 1110px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: calc(56 / 48);
  letter-spacing: -1.5px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1;
  }

  @media screen and (min-width: 980px) {
    font-size: 60px;
  }

  text-align: center;

  @media screen and (min-width: 980px) {
    text-align: left;
  }
`;

const ContactText = styled.p`
  font-size: 18px;
  line-height: calc(28 / 18);
  color: #d9d9d9;
  margin-top: 20px;
`;

export { ContactSection, Container, Title, ContactText };