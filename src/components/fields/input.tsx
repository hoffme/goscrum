import {ChangeEventHandler} from "react";

import {InputFieldStyle} from "./style";

import Field from "./field";

interface Props {
    title?: string
    error?: string
    name?: string
    type?: 'text' | 'password' | 'email'
    placeHolder?: string
    disabled?: boolean
    value?: string
    onValue?: (value: string) => void
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputField = (props: Props) => {
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange?.(e);
        props.onValue?.(e.currentTarget.value);
    }

    return <Field
        title={props.title}
        error={props.error}
    >
        <InputFieldStyle
            name={props.name}
            type={props.type}
            placeholder={props.placeHolder}
            value={props.value}
            onChange={onChangeHandler}
        />
    </Field>
}

export default InputField;