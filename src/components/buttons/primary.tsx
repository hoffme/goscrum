import { MouseEventHandler, ReactNode } from "react";

import { ContainerPrimaryButtonStyle } from "./style";

interface Props {
    type?: "button" | "submit" | "reset"
    onClick?: MouseEventHandler<HTMLButtonElement>
    children?: ReactNode
    className?: string
}

const PrimaryButton = (props: Props) => {
    return <ContainerPrimaryButtonStyle type={props.type} onClick={props.onClick} className={props.className}>
        { props.children }
    </ContainerPrimaryButtonStyle>
}

export default PrimaryButton;