import { MouseEventHandler, ReactNode } from "react";

import { ContainerSecondaryButtonStyle } from "./style";

interface Props {
    type?: "button" | "submit" | "reset"
    onClick?: MouseEventHandler<HTMLButtonElement>
    children?: ReactNode
}

const SecondaryButton = (props: Props) => {
    return <ContainerSecondaryButtonStyle type={props.type} onClick={props.onClick} >
        { props.children }
    </ContainerSecondaryButtonStyle>
}

export default SecondaryButton;