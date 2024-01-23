import styled from "styled-components";

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

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 10px;

    background-color: #ffffff;
  }
`;

export { Title };