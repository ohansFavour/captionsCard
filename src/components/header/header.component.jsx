import React from "react";

import {
  StyledHeaderContainer,
  StyledLogoContainer,
  StyledOptionsContainer,
  StyledOptionLink,
  StyledImage
} from "../styled-components/styled-header";
import Logo from "../../accessories/Logo.PNG";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer to="/">
        <StyledImage src={Logo} />
      </StyledLogoContainer>
      <StyledOptionsContainer>
        <StyledOptionLink to="/captions"> Captions</StyledOptionLink>
        <StyledOptionLink to="/tags"> Tags</StyledOptionLink>
      </StyledOptionsContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
