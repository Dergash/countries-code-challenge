import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';
import CountriesList from './components/CountriesList';
import CountryInfo from './components/CountryInfo';

it('renders without crashing', () => {
    mount(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )
});

describe('router', () => {

    it('shows home page for "/" route', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <App />
            </MemoryRouter>
        )
        expect(wrapper.find(HomePage).length).toBe(1)
    })

    it('shows CountriesList for "/countries" route', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/countries/']} initialIndex={0}>
                <App />
            </MemoryRouter>
        )
        expect(wrapper.find(CountriesList).length).toBe(1)
    })

    it('shows CountryInfo for "/countries/:id" route', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/countries/9/']} initialIndex={0}>
                <App />
            </MemoryRouter>
        )
        expect(wrapper.find(CountryInfo).length).toBe(1)
    })
})
