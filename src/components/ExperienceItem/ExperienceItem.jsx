/* eslint-disable react/prop-types */
// import { useId } from "react";
import {
  Card,
  ItemPeriod,
  ItemName,
  ItemTitle,
  ItemText,
  Responsibilities,
  ResponsibilitiesItem,
} from "./ExperienceItem.styled";

export const ExperienceItem = ({
  period,
  title,
  name,
  text,
  responsibilities,
}) => {
  // const id = useId();

  return (
    <Card>
      <ItemPeriod>{period}</ItemPeriod>
      <ItemTitle>{title}</ItemTitle>
      <ItemName>{name}</ItemName>
      <ItemText>{text}</ItemText>
      <Responsibilities>
        {responsibilities.map((item, index) => (
          <ResponsibilitiesItem key={index}> {item}</ResponsibilitiesItem>
        ))}
      </Responsibilities>
    </Card>
  );
};