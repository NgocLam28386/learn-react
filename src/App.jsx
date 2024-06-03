import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';
import NotFoundPage from "./pages/NotFoundPage";
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" redirect="/" />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer/> 
    </>
  )
}

export default App; 
