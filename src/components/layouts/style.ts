import styled from "styled-components";

const ContainerAuthLayoutStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentAuthLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  margin: 1rem;
  width: 100%;
  min-width: 250px;
  max-width: 400px;
  
  > * {
    margin: 0.5rem 0;
  }
`;

const TitleAuthLayoutStyle = styled.h2`
  text-align: center;
  padding: 1rem 0;
  margin: 0;
`;

export {
    ContainerAuthLayoutStyle,
    ContentAuthLayoutStyle,
    TitleAuthLayoutStyle
}