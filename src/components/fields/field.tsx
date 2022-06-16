import {ReactNode} from "react";

import { ContainerFieldStyle } from "./style";

interface Props {
    title?: string
    error?: string
    children?: ReactNode
}

const Field = (props: Props) => {
    return <ContainerFieldStyle>
        { props.title &&
            <label className={'title'}>{ props.title }</label>
        }
        { props.children }
        { props.error &&
            <label className={'error'}>{ props.error }</label>
        }
    </ContainerFieldStyle>
}

export default Field;