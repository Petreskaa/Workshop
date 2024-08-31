import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderComponent } from './components/HederComponent/HederComponent';
import { ImageList } from './components/ImageListComponent/ImageList';
import { FavouritesComponent } from './components/FavouritesComponent/FavouritesComponent';
import { ImageDetailsComponent } from './components/ImageDetailsComponent/ImageDetailsComponent';

function App() {
 
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Routes>
          <Route
            path="/"
            element={<ImageList />} />
          <Route
            path="/favourites"
            element={<FavouritesComponent />} />
          <Route
            path="/imageDetails/:imgId"
            element={<ImageDetailsComponent />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
