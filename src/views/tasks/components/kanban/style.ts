import styled from "styled-components";

const KanbanStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  h2 {
    text-align: center;
    margin: 0.25rem;
  }
  
  .columns {
    flex: 1;
  }
`;

export {
    KanbanStyle
}