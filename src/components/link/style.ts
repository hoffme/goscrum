import styled from "styled-components";

const LinkTextStyle = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #666;
  border-radius: 0.5rem;
  text-align: center;
  
  > a {
    padding: 0.25rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #212121;
    font-size: 0.90em;
  }
`;

export {
    LinkTextStyle
}