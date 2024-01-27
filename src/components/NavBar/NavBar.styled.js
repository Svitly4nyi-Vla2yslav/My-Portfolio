import styled from "styled-components";

const NavList = styled.ul`
@media screen and (min-width: 319px) and (max-width: 400px) {
display: flex;
width: 100%;
gap: 20px;
transition: margin-top 0.3s ease,gap 0.3s ease,margin-left 0.3s ease;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 0;
margin-right: 0;
}

@media screen and (min-width: 401px) and (max-width: 767px) {
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  display: flex;
  width: 100%;
  gap: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 50px;

}

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 50px;
    margin-left: 70px;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export { NavList };