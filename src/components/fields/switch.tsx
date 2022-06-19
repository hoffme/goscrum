import {useEffect, useState} from "react";

import {ContainerSwitchFieldStyle, SwitchFieldStyle} from "./style";

import Field from "./field";

interface Props {
    className?: string
    title?: string
    error?: string
    placeholder?: string
    value?: boolean
    onValue?: (value: boolean) => void
}

const SwitchField = (props: Props) => {
    const [selected, setSelected] = useState(props.value || false);

    const handleOnClick = () => {
        const newValue = !selected;

        setSelected(newValue);
        props.onValue?.(newValue);
    }

    useEffect(() => {
        if (props.value !== undefined) setSelected(props.value);
    }, [props.value])

    return <Field title={props.title} error={props.error} className={props.className}>
        <ContainerSwitchFieldStyle>
            <label>{ props.placeholder }</label>
            <SwitchFieldStyle
                selected={selected}
                onClick={handleOnClick}
            />
        </ContainerSwitchFieldStyle>
    </Field>
}

export default SwitchField;