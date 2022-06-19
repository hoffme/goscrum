import styled from "styled-components";

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overflow-x: auto;

  > * {
    flex: 1;
    margin: 0.25rem;
  }
`;

export {
    ContainerStyle
}