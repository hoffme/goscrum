import { MouseEventHandler, ReactNode } from "react";

import { ContainerPrimaryButtonStyle } from "./style";

interface Props {
    type?: "button" | "submit" | "reset"
    onClick?: MouseEventHandler<HTMLButtonElement>
    children?: ReactNode
}

const PrimaryButton = (props: Props) => {
    return <ContainerPrimaryButtonStyle type={props.type} onClick={props.onClick} >
        { props.children }
    </ContainerPrimaryButtonStyle>
}

export default PrimaryButton;