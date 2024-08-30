import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom"
import { CardCount } from "./components/CardCount";
import { CardDetail } from "./components/CardDetail";
import { ErrorPage } from "./components/ErrorPage";

const App: React.FC = () => {
  
  const routeItems = <Routes>
          <Route path="/" element={<CardCount />} />
          <Route path="/details/:id" element={<CardDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

  return (
    <Router>
      <div className="App">
        <Navbar />
        {routeItems}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
