import styled from "styled-components";

const Container = styled.div`
display: flex;

@media screen and (max-width: 767px){
  display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
}
`;
const Link = styled.a`
text-decoration: none;
background-color: transparent;
color: white;
display: inline-block;
position: relative;
padding: 20px 5px;
border: 1px solid;
border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
border-image-slice: 1;
margin: 10px 20px;
text-align: center;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
overflow: hidden;
letter-spacing: 2px;
transition: .8s cubic-bezier(.165, .84, .44, 1);


&:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    color: white;
    background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    transition: .8s cubic-bezier(.165, .84, .44, 1);
  }
  &:is(:hover, :focus)  {
    background: rgba(255, 255, 255, 0);

    &:before {
      bottom: 0%;
      top: auto;
      height: 100%;
    }
  }

`;

export {Container, Link}