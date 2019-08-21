import React, {FunctionComponent} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface AppBarProps {

}

const Container = styled.nav`
    background-color: rgb(23, 43, 58);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 10;
`

const Title = styled.h1`
    margin: 0;
    font-size: 18px;
    font-weight: normal;
    margin-right: 16px;

    @media (max-width: 768px) {
        display: none;
    }
`

const List = styled.ul`
    height: 100%;
    display: flex;
    margin: 0;
    padding-left: 0;
    list-style: none;
` 

const Item = styled.li`
    height: 100%;    
`

const RouteButton = styled(Link)`
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    height: 100%;
    align-items: center;
    color: rgb(99, 169, 226);
    text-transform: uppercase;
    text-decoration: none;
    justify-content: center;
    line-height: 16px;
    min-width: 70px;

    &:hover {
        background-color: rgb(28,48,63);
    }
`

export const AppBar: FunctionComponent<AppBarProps> = (props) => {
    return <Container>
        <List>
            <Item>
                <RouteButton to={`/`}>
                    Index
                </RouteButton>
            </Item>
            <Item>
                <RouteButton to={`/countries`}>
                    Countries List
                </RouteButton>
            </Item>
        </List>
        <Title>Countries Code Challenge</Title>
    </Container>
}

export default React.memo(withRouter(AppBar));
