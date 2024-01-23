/* eslint-disable react/prop-types */
import { Item, IconContainer, Icon, ItemInner } from "./SkillsItem.styled";

export const SkillsItem = ({ name, link, icon }) => {
  return (
    <Item>
      <ItemInner>
        <IconContainer
          href={link}
          className="icon-container"
          target="_blank"
          rel="noreferrer noopener nofollow"
          aria-label={name}
        >
          <Icon width="100%" height="100%">
            <use href={icon}></use>
          </Icon>
        </IconContainer>
      </ItemInner>
    </Item>
  );
};