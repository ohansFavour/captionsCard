import styled from "styled-components";

export const StyledCaptionsContainer = styled.div`
width: 750px;
justify-content: space-around;
margin: 10px auto;
display: flex;
flex-wrap: wrap;
margin-top: 30px;
@media only screen and (max-width: 600px) {
    width: 350px;
  }
`;