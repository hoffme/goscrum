import {ChangeEventHandler} from "react";

import {TextAreaFieldStyle} from "./style";

import Field from "./field";

interface Props {
    className?: string
    title?: string
    error?: string
    name?: string
    placeHolder?: string
    disabled?: boolean
    value?: string
    onValue?: (value: string) => void
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

const TextAreaField = (props: Props) => {
    const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        props.onChange?.(e);
        props.onValue?.(e.currentTarget.value);
    }

    return <Field
        className={props.className}
        title={props.title}
        error={props.error}
    >
        <TextAreaFieldStyle
            name={props.name}
            placeholder={props.placeHolder}
            value={props.value}
            onChange={onChangeHandler}
        />
    </Field>
}

export default TextAreaField;