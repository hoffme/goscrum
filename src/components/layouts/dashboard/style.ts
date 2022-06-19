import styled from "styled-components";

const ContainerDashBoardLayoutStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentDashBoardLayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
`;

const HeaderDashBoardLayoutStyle = styled.div`
  background-color: white;
  box-shadow: 0 0 0.3rem #666;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  > img {
    height: 25px;
    object-fit: contain;
  }
`;

const HeaderCenterDashBoardLayoutStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuDashBoardLayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  > * {
    margin: 0 1rem;
  }
`;

export {
    ContainerDashBoardLayoutStyle,
    ContentDashBoardLayoutStyle,
    HeaderDashBoardLayoutStyle,
    HeaderCenterDashBoardLayoutStyle,
    MenuDashBoardLayoutStyle
}