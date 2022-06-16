import {ReactNode} from "react";

import { WhiteSurface } from "../surface";

import { ContainerAuthLayoutStyle, ContentAuthLayoutStyle, TitleAuthLayoutStyle } from "./style";

interface Props {
    title?: string
    children?: ReactNode
}

const AuthLayout = (props: Props) => {
    return <ContainerAuthLayoutStyle>
        <ContentAuthLayoutStyle>
            <WhiteSurface>
                <TitleAuthLayoutStyle>
                    { props.title }
                </TitleAuthLayoutStyle>
                { props.children }
            </WhiteSurface>
        </ContentAuthLayoutStyle>
    </ContainerAuthLayoutStyle>
}

export default AuthLayout;