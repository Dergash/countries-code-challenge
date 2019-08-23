import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
    font-size: 22px;
    text-align: center;
`

export const HomePage: FunctionComponent = (props) => {
    return <Container>
        <span>Hej!</span>
        <span>To select a route, please use the navigation bar.</span>
    </Container>
}

export default React.memo(HomePage);
