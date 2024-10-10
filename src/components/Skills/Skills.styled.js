import styled from "styled-components";

const SkillsSection = styled.section`
  position: relative;
  padding-top: 0;
  padding-bottom: 40px;
  margin-top: 145px;
  transform: translateZ(0);

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 0;
  }
  @media screen and (min-width: 980px) {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 0;
  }
`;

const SkillsContainer = styled.div`
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
    margin-top: 10px;

    background-color: #ffffff;
  }
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 40px auto;

  @media screen and (min-width: 768px) {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
  }
`;

export { SkillsSection, SkillsContainer, SkillsList };