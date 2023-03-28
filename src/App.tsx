import React from 'react';
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer';
import MainPage from './Pages/MainPage';

export default function App() {
  return (
    <>
     <Header />
     <MainPage />
     <Footer />
    </>
  );
}
