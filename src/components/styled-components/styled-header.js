import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const StyledLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  
`;

export const StyledImage = styled.img`
  width: 54px;
  height: 40px;
  position: relative;
  top:-10px;
`;

export const StyledOptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledOptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
`;
