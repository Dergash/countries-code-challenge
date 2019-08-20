import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import apolloClient from './api/apolloClient';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage';
import CountriesList from './components/CountriesList';
import CountryInfo from './components/CountryInfo';

function App() {
    return <ApolloProvider client={apolloClient}>
        <BrowserRouter>
            <AppBar />
            <Route path="/" exact component={HomePage} />
            <Route path="/countries/" exact component={CountriesList} />
            <Route path="/countries/:code" component={CountryInfo} />
        </BrowserRouter>
    </ApolloProvider>
}

export default App;
