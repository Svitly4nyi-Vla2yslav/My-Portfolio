import styled from "styled-components";

const PrimaryLink = styled.a`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(26 / 16);
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2.3px;

  background-color: transparent;
  border: none;
  border-bottom: 2px solid #56bb40;
  padding: 3px;
  transition-duration: 300ms;
  white-space: nowrap;
width: max-content;
  &:is(:hover, :focus) {
    color: #56bb40;
    box-shadow: 0 0.5em 0.5em -0.4em #56bb40;
    transform: translateY(-0.25em);
  }

  @media screen and (max-width: 400px) {
    white-space: wrap;
  }
`;

export { PrimaryLink };