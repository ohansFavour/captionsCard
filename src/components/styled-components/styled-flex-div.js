import styled from "styled-components";

const StyledFlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props)=> props.width ? `${props.width}`: ""}
`;

export default StyledFlexDiv;
