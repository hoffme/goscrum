import {ReactNode} from "react";

import HeaderDashboard from "./header";

import { ContainerDashBoardLayoutStyle, ContentDashBoardLayoutStyle } from "./style";

interface Props {
    children?: ReactNode
}

const DashBoardLayout = (props: Props) => {
    return <ContainerDashBoardLayoutStyle>
        <HeaderDashboard />
        <ContentDashBoardLayoutStyle>
            { props.children }
        </ContentDashBoardLayoutStyle>
    </ContainerDashBoardLayoutStyle>
}

export default DashBoardLayout;