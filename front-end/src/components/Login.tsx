import React, {FunctionComponent} from 'react'
import styled from 'styled-components';
import Button from './Button';
import {useMutation} from '@apollo/react-hooks'
import {createUser} from '../api/users'
import {Input} from './Input'

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Login: FunctionComponent = (props) => {
    const [addUser, { data }] = useMutation(createUser);
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleAddUser = React.useCallback((e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addUser({ variables: { login, password } })
    }, [login, password])

    const handleLogin = React.useCallback((e: React.FormEvent<HTMLButtonElement>) => {
        console.warn('Not implemented');
    }, [])

    return <Container>
        { !process.env.REACT_APP_API &&
            <span style={{ fontSize: '22px' }}>This page requires local backend</span>
        }
        { process.env.REACT_APP_API && <Form>
            <Input placeholder="Login" value={login} onChange={setLogin} />
            <Input placeholder="Password" value={password} onChange={setPassword} />
            <Button onClick={handleAddUser}>Add User</Button>
            <Button onClick={handleLogin}>Login</Button>
        </Form>
        }
        </Container>
}

export default React.memo(Login)
