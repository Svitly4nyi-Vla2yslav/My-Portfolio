import styled from "styled-components";

const NavList = styled.ul`
  display: flex;

  @media screen and (max-width: 400px) {
    margin-top: 20px;
    gap: 10px;
    margin-left: 0;
  }
  @media screen and (min-width: 401px) and (max-width: 1080px) {
    gap: 20px;
    margin-left: 30px;
  }
  @media screen and (min-width: 960px) {
    gap: 50px;
    margin-left: 70px;
  }
`;

export { NavList };