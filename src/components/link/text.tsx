import {NavLink} from "react-router-dom";

import { LinkTextStyle } from "./style";

interface Props {
    to: string
    text?: string
}

const LinkText = (props: Props) => {
    return <LinkTextStyle>
        <NavLink to={props.to}>
            { props.text }
        </NavLink>
    </LinkTextStyle>
}

export default LinkText;