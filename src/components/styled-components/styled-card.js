import styled from "styled-components";

export const StyledCardContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 25px;
  box-shadow: rgb(76, 139, 235);
  background-color: rgb(76, 139, 235);
  display: grid;
  margin: 0 auto;
  grid-template-rows:
    1fr
    40px;
  grid-template-areas:
    "main"
    "footer";
    @media only screen and (max-width: 500px) {
      width: 150px;
      height: 150px;
    }
    margin-bottom: 10px;
`;

export const StyledCardContent = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: white;
  over-flow: hidden;
  text-overflow: ellipsis
`;

export const StyledCardFooter = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
`;

export const StyledAddSign = styled.div`
  height: 0.6em;
  width: 0.6em;
  padding: 6px;
  font-size: 30px;
  margin-right: 10px;
  text-align: center;
  line-height: 0.5em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans",
    "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed",
    "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-weight: lighter;
  color: green;
  background-color: white;

  &::before {
    display: block;
    content: "+";
  }
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPrompt = styled.span`
  opacity: 0.4;
`;

export const StyledSend = styled.div`
  color: green;
  font-size: 20px;
  padding: 6px;
  margin-right: 10px;
  &:hover{
      cursor: pointer;
  }
`;
export const StyledCreateTag= styled.div`
margin-top: 10px;
display: flex;
justify-content: center;
`;
export const StyledInput = styled.input`
outline: none;
width: 140px;
height: 30px;
margin-left:13px;
border: solid 0.4px gray;
border-radius:6px;
@media only screen and (max-width: 500px) {
  width: 100px;
}
`;
