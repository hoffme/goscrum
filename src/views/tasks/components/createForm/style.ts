import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.25rem;
  
  > * { margin: 0.25rem }
  
  h2, .description, .submitButton { flex-basis: 100% }
  .title, .state, .priority { flex: 1 }
`;

export {
    FormStyle
}