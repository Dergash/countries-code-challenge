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
    display: grid;
    height: 100%;
    grid-template-rows: 50px 1fr;
`

const AppContent = styled.div`
    overflow: auto;
`

function App() {
    return <ApolloProvider client={apolloClient}>
        <BrowserRouter>
            <AppLayout>
                <AppBar />
                <AppContent>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/countries/" exact component={CountriesList} />
                    <Route path="/countries/:code" component={CountryInfo} />
                </AppContent>
            </AppLayout>
        </BrowserRouter>
    </ApolloProvider>
}

export default App;
