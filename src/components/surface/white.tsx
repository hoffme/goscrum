import { ReactNode } from "react";

import { WhiteSurfaceStyle } from "./style";

interface Props {
    children?: ReactNode
}

const WhiteSurface = (props: Props) => {
    return <WhiteSurfaceStyle>
        { props.children }
    </WhiteSurfaceStyle>
}

export default WhiteSurface;