import useAuth from "../../../hooks/auth";

import { PrimaryButton, SecondaryButton } from "../../buttons";

import {HeaderCenterDashBoardLayoutStyle, HeaderDashBoardLayoutStyle, MenuDashBoardLayoutStyle} from "./style";

const HeaderDashboard = () => {
    const { credentials, signOut } = useAuth();

    return <HeaderDashBoardLayoutStyle>
        <img src={'/logo.png'} alt={'goscrum'} />
        <HeaderCenterDashBoardLayoutStyle>
            <PrimaryButton>Donar</PrimaryButton>
        </HeaderCenterDashBoardLayoutStyle>
        <MenuDashBoardLayoutStyle>
            <label>{ credentials?.username }</label>
            <SecondaryButton onClick={signOut}>Salir</SecondaryButton>
        </MenuDashBoardLayoutStyle>
    </HeaderDashBoardLayoutStyle>
}

export default HeaderDashboard;