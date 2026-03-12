import React from 'react';
import './App.css';

import Header from "./components/Header";
import MusicLibrary from "./components/MusicLibrary";
import UserPlaylist from "./components/UserPlaylist";
import AlbumDetails from "./components/AlbumDetails"; 
import ArtistDetails from "./components/ArtistDetails";
import UserFavorites from './components/UserFavorites/index.js';


import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Theme/GlobalStyles';
import Theme from './Theme/index.js';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <div className="App">
      <Header appName={"MediaPlayerApp"}/>
      <Routes>
        <Route path='/' element={
          <MusicLibrary/>
        }/>

        <Route path='/album/:id' element={
          <AlbumDetails/>
          }/>
          
        <Route path='/artist/:id' element={<ArtistDetails/>}/>

        <Route path='/playlist' element={
          <UserPlaylist/>
        }/>

        <Route path='/Favorites' element={
          <UserFavorites/>
        }/>

      </Routes>
    </div>
    </ThemeProvider>
    
  );
}

export default App;