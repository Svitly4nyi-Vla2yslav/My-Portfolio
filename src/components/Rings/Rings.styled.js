import styled from "styled-components";

const RingsSpan = styled.span`
  position: absolute;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  pointer-events: none;
`;

export { RingsSpan };