import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import MainPage from './Pages/MainPage';
import CharacterPage from './Pages/CharacterPage';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
