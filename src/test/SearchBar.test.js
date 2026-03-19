import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '../test.utils';
import { SearchBar, SearchBtn } from '../components/MusicLibrary/styles';
import userEvent from '@testing-library/user-event';


describe ("Tests for Search component", () => {

    it('should render searchbar properly', () =>{

        render(
            <SearchBar/>
        );
        const searchBar = screen.getByRole('textbox');
        expect(searchBar).toBeInTheDocument();
    });
    
    it('should change allow user to modify input entry',  () =>{ 
        render(
            <SearchBar/>
        );
        const input = screen.getByRole('textbox');
        const search = 'Marina'

        userEvent.type(input, search);
        expect(input.value).toBe(search);
    });

    it('should complete search', () => {
        const handleSearch = jest.fn();
        render(
            <SearchBtn onClick={handleSearch}>
                Buscar
            </SearchBtn>

        );
        const searchBtn = screen.getByRole('button', {name:/Buscar/i});
        fireEvent.click(searchBtn)

        expect(handleSearch).toHaveBeenCalledTimes(1);
    })
});