import styled from "styled-components";

const colors = {
    title: '#666',
    titleFocus: '#666',
    error: '#ff2200',
    placeHolder: '#666',
    border: '#666',
    input: {
        text: '#111',
        border: '#666',
        borderFocus: '#666'
    },
    switch: {
        text: '#111',
        circle: '#999',
        band: '#ccc',
        circleSelected: '#ff452b',
        bandSelected: '#ffc5be'
    }
}

const ContainerFieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0.25rem 0;
  
  > .title {
    font-size: 0.8em;
    padding: 0;
    color: ${colors.title};
  }
  
  > .error {
    font-size: 0.8em;
    padding: 0.25rem 0;
    color: ${colors.error};
    font-weight: bold;
  }
  
  &:focus-within {
    > .title {
      color: ${colors.titleFocus};
    }
  }
`;

const InputFieldStyle = styled.input`
  border: 1px solid ${colors.input.border};
  color: ${colors.input.text};
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
  font-size: 1em;

  &:focus {
    border-color: ${colors.input.borderFocus};
  }
`;

const TextAreaFieldStyle = styled.textarea`
  border: 1px solid ${colors.input.border};
  color: ${colors.input.text};
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
  font-size: 1em;

  &:focus {
    border-color: ${colors.input.borderFocus};
  }
`;

const SelectFieldStyle = styled.select`
  border: 1px solid ${colors.input.border};
  color: ${colors.input.text};
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
  font-size: 1em;
  -webkit-appearance:none;

  &:focus {
    border-color: ${colors.input.borderFocus};
  }
`;

const ContainerSwitchFieldStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  > label {
    flex: 1;
    font-size: 0.9em;
    color: ${colors.switch.text}
  }
`;

const SwitchFieldStyle = styled.div<{ selected: boolean }>`
  width: 40px;
  height: 20px;
  position: relative;

  &::before {
    border-radius: 10px;
    content: ' ';
    width: 40px;
    height: 14px;
    background-color: ${props => props.selected ? colors.switch.bandSelected : colors.switch.band};
    position: absolute;
    top: 3px;
  }
  
  &::after {
    border-radius: 50%;
    content: ' ';
    background-color: ${props => props.selected ? colors.switch.circleSelected : colors.switch.circle};
    width: 20px;
    height: 20px;
    position: absolute;
    transform: translate(${props => props.selected ? '100%' : '0'});
    transition: all ease 0.1s;
  }
`;

export {
    ContainerFieldStyle,
    InputFieldStyle,
    SelectFieldStyle,
    ContainerSwitchFieldStyle,
    SwitchFieldStyle,
    TextAreaFieldStyle
}