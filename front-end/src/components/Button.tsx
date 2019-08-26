import React, {FunctionComponent} from 'react'
import styled from 'styled-components';


const StyledButton = styled.button`
    border: none;
    background-color: ${props => !props.disabled ? 'rgb(15, 32, 45)' : 'rgb(30,40,50)'};
    color: rgba(255, 255, 255, 0.4);
    &:hover {
        background-color: ${props => !props.disabled ? 'rgb(20, 37, 50)' : 'rgb(30,40,50)'};
    }
    outline: none;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    cursor: ${props => !props.disabled ? 'pointer' : 'default'};
`

interface ButtonProps {
    disabled?: boolean,
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
    return <StyledButton {...props}>
        {props.children}
    </StyledButton>
}

export default React.memo(Button) as FunctionComponent<ButtonProps>;
