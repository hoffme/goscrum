import {ChangeEventHandler, ReactNode} from "react";

import {SelectFieldStyle} from "./style";

import Field from "./field";

interface Props {
    className?: string
    title?: string
    error?: string
    name?: string
    disabled?: boolean
    value?: string
    onValue?: (value: string) => void
    onChange?: ChangeEventHandler<HTMLSelectElement>
    children?: ReactNode
}

const SelectField = (props: Props) => {
    const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
        props.onChange?.(e);
        props.onValue?.(e.currentTarget.value);
    }

    return <Field
        className={props.className}
        title={props.title}
        error={props.error}
    >
        <SelectFieldStyle
            name={props.name}
            value={props.value}
            onChange={onChangeHandler}
        >
            { props.children }
        </SelectFieldStyle>
    </Field>
}

export default SelectField;