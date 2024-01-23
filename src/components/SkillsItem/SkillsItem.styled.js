import styled from "styled-components";

const Item = styled.li``;

const ItemInner = styled.div`
  display: inline;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  transition-duration: 300ms;
  padding: 10px;

  &:hover {
    box-shadow: 0 0 4px 2px #4ee1a0;
  }
  &:hover .icon-container {
    transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
    -moz-transform: rotateY(360deg);
    -ms-transform: rotateY(360deg);
    -o-transform: rotateY(360deg);
  }
`;

const IconContainer = styled.a`
  display: inline-block;
  perspective: 1000px;
  transition-duration: 1s;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
`;

const Icon = styled.svg`
  width: 72px;
  height: 72px;
  transition-duration: 300ms;
`;

export { Item, ItemInner, IconContainer, Icon };