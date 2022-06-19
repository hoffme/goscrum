import { ReactNode } from "react";

import { WhiteSurfaceStyle } from "./style";

interface Props {
    className?: string
    children?: ReactNode
}

const WhiteSurface = (props: Props) => {
    return <WhiteSurfaceStyle className={props.className}>
        { props.children }
    </WhiteSurfaceStyle>
}

export default WhiteSurface;