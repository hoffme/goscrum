import IconTrashSrc from '../../../../assets/icons/trash.png';

import {Task} from "../../../../services/task";

import useTask from "../../hooks/task";

import {WhiteSurface} from "../../../../components/surface";
import {SecondaryButton} from "../../../../components/buttons";

import {
    ActionsTaskCardStyle,
    ContainerTaskCardStyle,
    DateTaskCardStyle,
    DescriptionTaskCardStyle,
    HeaderTaskCardStyle, IconTrashTaskCardStyle,
    ImportanceTaskCardStyle,
    TitleTaskCardStyle,
    UserTaskCardStyle
} from "./style";

interface Props {
    data: Task
}

const TaskCard = (props: Props) => {
    const taskMethods = useTask(props.data);

    const date = new Date(props.data.createdAt);

    return <ContainerTaskCardStyle>
        <WhiteSurface className={'background'}>
            <IconTrashTaskCardStyle src={IconTrashSrc} alt={'trash'} onClick={taskMethods.remove} />
            <HeaderTaskCardStyle>
                <TitleTaskCardStyle>
                    { props.data.title }
                </TitleTaskCardStyle>
                <ImportanceTaskCardStyle
                    importance={props.data.importance}
                    onClick={taskMethods.nextImportance}
                >
                    { props.data.importance }
                </ImportanceTaskCardStyle>
            </HeaderTaskCardStyle>
            <DateTaskCardStyle>
                {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
            </DateTaskCardStyle>
            <UserTaskCardStyle>
                { props.data.user.userName }
            </UserTaskCardStyle>
            <DescriptionTaskCardStyle>
                { props.data.description }
            </DescriptionTaskCardStyle>
            <ActionsTaskCardStyle>
                <SecondaryButton onClick={taskMethods.backStatus}>Retroceder</SecondaryButton>
                <SecondaryButton onClick={taskMethods.nextStatus}>Avanzar</SecondaryButton>
            </ActionsTaskCardStyle>
        </WhiteSurface>
    </ContainerTaskCardStyle>
}

export default TaskCard;