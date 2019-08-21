import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import apolloClient from './api/apolloClient';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage';
import CountriesList from './components/CountriesList';
import CountryInfo from './components/CountryInfo';
import styled from 'styled-components'

const AppLayout = styled.div`
    position: absolute;
    top: 48px;
    width: 100%;
    height: 100%;
`

function App() {
    return <ApolloProvider client={apolloClient}>
        <BrowserRouter>
            <AppBar />
            <AppLayout>
                <Route path="/" exact component={HomePage} />
                <Route path="/countries/" exact component={CountriesList} />
                <Route path="/countries/:code" component={CountryInfo} />
            </AppLayout>
        </BrowserRouter>
    </ApolloProvider>
}

export default App;
