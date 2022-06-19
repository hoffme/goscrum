import styled from "styled-components";

const ContainerTaskCardStyle = styled.div`
  > .background {
    position: relative;
    width: calc(100% - 0.5rem);
    display: inline-flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.25rem;
  }
`;

const HeaderTaskCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const TitleTaskCardStyle = styled.div`
  font-weight: bold;
  font-size: 1em;
`;

const DateTaskCardStyle = styled.label`
  font-size: 0.7em;
`;

const UserTaskCardStyle = styled.label`
  font-size: 0.7em;
  font-weight: bold;
`;

const importanceColors: { [key: string]: string } = {
    HIGH: 'red',
    MEDIUM: 'orange',
    LOW: 'green'
}

const ImportanceTaskCardStyle = styled.label<{ importance: string }>`
  font-size: 0.6em;
  background-color: ${props => importanceColors[props.importance]};
  color: white;
  padding: 0.25rem;
  border-radius: 0.25rem;
  width: auto;
  margin: 0 0.25rem;
`;

const DescriptionTaskCardStyle = styled.label`
  font-size: 0.9em;
  margin: 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  
  &:hover {
    text-overflow: initial;
    -webkit-line-clamp: initial;
    line-clamp: initial;
  }
`;

const IconTrashTaskCardStyle = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 15px;
  height: 15px;
`;

const ActionsTaskCardStyle = styled.div`
  display: flex;
  flex-direction: row;

  > button:last-child {
    margin-left: 0.5rem;
  }
  
  > button {
    flex: 1;
    padding: 0.25rem;
    font-size: 0.75em;
  }
`;

export {
    ContainerTaskCardStyle,
    HeaderTaskCardStyle,
    TitleTaskCardStyle,
    DateTaskCardStyle,
    UserTaskCardStyle,
    ImportanceTaskCardStyle,
    DescriptionTaskCardStyle,
    IconTrashTaskCardStyle,
    ActionsTaskCardStyle
}