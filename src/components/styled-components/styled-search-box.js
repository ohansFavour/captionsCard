import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
  box-sizing: border-box;
`;

export const SearchSymbol = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background: green;
  border-radius: 50%;
  transition: all 1s;
  box-sizing: border-box;
  z-index: 4;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    margin: auto;
    top: 13px;
    right: 0;
    bottom: 0;
    left: 11px;
    width: 6px;
    height: 2px;
    background: white;
    transform: rotate(45deg);
    transition: all 0.5s;
  }
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: -5px;
    right: 0;
    bottom: 0;
    left: -5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid white;
    transition: all 0.5s;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 30px;
  outline: none;
  border: solid 0.5px blue;
  background: white;
  color: black;
  padding: 0 80px 0 20px;
  border-radius: 30px;
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    width: 300px;
    box-sizing: border-box;
    opacity: 1;
    cursor: text;
  }
  &:focus ~ div {
    right: -250px;
    width:50px;
    height:50px;
    background: ${props => (props.color ? `${props.color}` : "blue")};
    box-sizing: border-box;
    z-index: 6;
    &::before {
      top: 0;
      left: 0;
      width: 25px;
    }
    &::after {
      top: 0;
      left: 0;
      width: 25px;
      height: 2px;
      border: none;
      box-sizing: border-box;
      background: white;
      border-radius: 0%;
      transform: rotate(-45deg);
    }
  }
  &::placeholder {
    color: gray;
    opacity: 0.5;
    font-weight: bolder;
    font-family: verdana;
  }
`;
