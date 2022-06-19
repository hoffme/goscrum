import styled from "styled-components";

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  overflow: hidden;
  
  .left {
    flex: 1;
    flex-basis: 40%;
    min-width: 250px;
    overflow: hidden;
  }
  
  .right {
    flex: 1;
    flex-basis: 60%;
    min-width: 375px;
    height: 100%;
    overflow: hidden;
  }
`;

export {
    ContainerStyle
};