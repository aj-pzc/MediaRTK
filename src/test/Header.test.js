import React from 'react';
import Header from '../components/Header/index';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '../test.utils';


describe("Tests for HEADER component", () => {    
    it('should show App Name', () => {

        render (
              <Header appName={'MediaPlayerApp'}/>
        );

        const pageTitle = screen.getByText("MediaPlayerApp");
        expect(pageTitle).toBeInTheDocument();
    });

    it('should not render anything else', () => {

        render (
              <Header appName={'MediaPlayerApp'}/>
        );
        const extraText = screen.queryByText("No hay favoritos aún");
        expect(extraText).not.toBeInTheDocument();
    });


});

describe('Header Component - Menu Toggle', () => {
    
    it('should render Nav Menu when clicked', () => {
        render(
            <Header appName="MediaPlayerApp" />
        );
        
        const nav = screen.getByRole('navigation', { hidden: true });
        
        const menuBtn = screen.getByAltText(/Menu/i);
        fireEvent.click(menuBtn);

        expect(screen.getByText(/My Playlist/i)).toBeInTheDocument();
        expect(screen.getByText(/My Favorites/i)).toBeInTheDocument();
    });       

    it('should closed rendered nav menu when links are clicked', () => {
        render(
            <Header appName="MediaPlayerApp" />
        );
        
        fireEvent.click(screen.getByAltText(/Menu/i));
        const searchLink = screen.getByText(/Buscador/i);
        fireEvent.click(searchLink);
    });


});
