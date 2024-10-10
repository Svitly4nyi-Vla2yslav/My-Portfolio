import styled from "styled-components";

const ExperienceSection = styled.section`
  position: relative;
  padding-top: 0;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media screen and (min-width: 980px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const ExperienceContainer = styled.div`
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
    max-width: 1110px;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 40px;

    background-color: #ffffff;
  }
`;

const ExperienceList = styled.ul`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export { ExperienceSection, ExperienceContainer, ExperienceList };