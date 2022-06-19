import {Task} from "../../../../services/task";

import TaskCard from "../card";

import ContainerTaskColumnStyle from "./style";

interface Props {
    title: string
    data: Task[]
}

const TaskCardColumn = (props: Props) => {
    return <ContainerTaskColumnStyle>
        <label className={'title'}>{props.title}</label>
        <div className={'items'}>
            {
                props.data.map((item) => (
                    <TaskCard data={item} key={item._id} />
                ))
            }
        </div>
    </ContainerTaskColumnStyle>
}

export default TaskCardColumn;