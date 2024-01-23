
import { PrimaryLink } from "./Link.styled";

// eslint-disable-next-line react/prop-types
export const Link = ({ text, href, target }) => {
  return (
    <PrimaryLink href={href} rel="noreferrer noopener nofollow" target={target}>
      {text}
    </PrimaryLink>
  );
};