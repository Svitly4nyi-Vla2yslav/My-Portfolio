import styled from "styled-components";

const TitlePrimary = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(32 / 24);
  text-align: center;
  bottom:  86%;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
    padding: 7px ;
   position : fixed;
   margin: 35px;
   margin-bottom: -30px;
   z-index: 200;
   transition-duration: 300ms;

  
  }
`;

const TitleLink = styled.a`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
transition-duration: 300ms;
&:is(:hover, :focus) {
  color: #56bb40;
  transform: translateY(-0.25em);
}
`
export { TitlePrimary, TitleLink };