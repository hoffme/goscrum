import styled from "styled-components";

const ContainerTaskColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-width: 250px;
  
  > .title {
    padding: 0.25rem 0;
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
  }
  
  .items {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
`;

export default ContainerTaskColumnStyle;