import styled from "styled-components";
// import  PrimaryLink  from "../Link/Link.styled";

const Form = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 980px) {
    margin-left: 50px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  padding: 15px;
  outline: none;
  color: #ffffff;
  text-transform: uppercase;
  transition-duration: 300ms;

  font-family: "Space Grotesk", sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: calc(28 / 18);
  color: #d9d9d9;

  &:focus {
    border-color: #4ee1a0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ffffff;
  background-color: transparent;
  padding: 15px;
  outline: none;
  color: #ffffff;
  text-transform: uppercase;
  transition-duration: 300ms;

  font-family: "Space Grotesk", sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: calc(28 / 18);
  color: #d9d9d9;

  &:focus {
    border-color: #4ee1a0;
  }

  margin-top: 30px;
  resize: none;
`;

const SubmitButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(26 / 16);
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2.3px;

  background-color: transparent;
  border: none;
  border-bottom: 2px solid #4ee1a0;
  padding: 10px;
  align-self: flex-end;
  margin-top: 30px;
  transition-duration: 300ms;
  white-space: nowrap;

  &:is(:hover, :focus) {
    color: #4ee1a0;
    box-shadow: 0 0.5em 0.5em -0.4em #4ee1a0;
    transform: translateY(-0.25em);
  }

  @media screen and (max-width: 400px) {
    white-space: wrap;
  }
`;

const ValidationError = styled.span`
  font-size: 14px;
  line-height: calc(28 / 18);
  color: #ff6f5b;

  margin-top: 10px;
`;

export { Form, Input, TextArea, SubmitButton, ValidationError };