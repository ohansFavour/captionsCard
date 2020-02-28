import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  grid-area: main;
  margin-top: 10px;
  margin-left: 10px;
  width: 250px;
  height: 200px;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
  &:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
`;

export const StyledAddCaptionContainer = styled.div`
  width: 300px;
  box-shadow: rgb(76, 139, 235);
  background-color: white;
  display: grid;
  grid-template-rows:
    1fr
    40px;
  grid-template-areas:
    "main"
    "footer";
`;

export const StyledAddCaptionFooter = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 9px;
`;

export const StyledSecondSection = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin-top: 90px;
width: 90vw;
`;
