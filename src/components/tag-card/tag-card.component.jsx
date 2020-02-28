import React from "react";

import StyledTagCard from "../styled-components/styled-tag-card";


const TagCard = ({title, color}) => {
  return <StyledTagCard color={color}>{title}</StyledTagCard>;
};
export default TagCard;
