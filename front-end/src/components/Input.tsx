import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    color: rgb(255, 255, 255, 0.4);
    font-size: 18px;
`

const Underline = styled.hr`
    width: 100%;
    background-color: rgb(255, 255, 255, 0.4);
    border: none;
    height: 2px;
    margin: 0;
`

interface InputProps {
    placeholder?: string,
    value: string,
    onChange?: (value: string) => void
}

export const Input: FunctionComponent<InputProps> = (props) => {
    const handleChange = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(e.currentTarget.value)
        }
    }, [props.onChange])

    return <React.Fragment>
        <StyledInput
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleChange}
        />
        <Underline />
    </React.Fragment>
}

export default React.memo(Input)
