import styled from "styled-components";

const Card = styled.li`
  background-color: #242424;
  width: 300px;
  box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 40px;

    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }

  @media screen and (min-width: 980px) {
    margin: 0;
    width: 40%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  line-height: calc(32 / 24);
  color: #d9d9d9;
  text-align: center;
`;

const ProjectDescription = styled.p`
  margin-top: 20px;
  border: 1px solid #d9d9d944;
  padding: 10px;

  font-size: 18px;

  background-color: #d9d9d911;
  border-radius: 10px;
`;

const ProjectType = styled.span`
  color: #4ee1a0cc;
  margin-right: 5px;
`;

const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
`;

const TechnologiesItem = styled.li`
  border: 1px solid #4ee1a044;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: calc(28 / 18);
  color: #d9d9d9;

  border-radius: 10px;
  transition-duration: 150ms;

  &:hover {
    background-color: #4ee1a044;
  }
`;

const LinksWrapper = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
`;

export {
  Card,
  ProjectTitle,
  ProjectDescription,
  ProjectType,
  TechnologiesList,
  TechnologiesItem,
  LinksWrapper,
};