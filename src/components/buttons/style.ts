import styled from "styled-components";

const ContainerPrimaryButtonStyle = styled.button`
  padding: 0.5rem;
  background-color: #ff452b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1em;
  
  &:hover {
    box-shadow: 0 0 0.3rem #b9b9b9;
  }
`;

const ContainerSecondaryButtonStyle = styled.button`
  padding: 0.5rem;
  background-color: white;
  color: #212121;
  border: 1px solid #666;
  border-radius: 0.5rem;
  font-size: 1em;

  &:hover {
    box-shadow: 0 0 0.3rem #666;
  }
`;

export {
    ContainerPrimaryButtonStyle,
    ContainerSecondaryButtonStyle
}