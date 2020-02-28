import styled from "styled-components";

const StyledTagCard = styled.div`
 width: 100px;
 height: 30px;
 border-radius:5px;
 background-color: ${(props)=> props.color ? `${props.color}`: "blue"};
 color: white;
 overflow: hidden;
 text-overflow: ellipsis;
 margin-bottom: 10px;
 text-align: center;
 cursor: pointer;
`;
export default StyledTagCard;