//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { MadabaMatch } from './pages/MadabaMatch';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Flashcards } from './pages/Flashcards';
import Footer from './components/Footer';
import NavContextProvider from './utils/NavContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

 
 

  return (
    <Router>
      <NavContextProvider>
        <div className="App">
          
            <Header/>
            <main>
              <Routes>
                {/* this route is required for github pages */}
                <Route
                  path='/portfolio'
                  element={<About/>}
                  
                />
                <Route 
                  path='/'
                  element={<Home/>}
                />
                <Route 
                  path='/about_me'
                  element={<About/>}
                  
                />
                <Route 
                  path='/contact'
                  element={<Contact />}
                />
                <Route 
                  path='/projects'
                  element={<Projects />}
                  
                />
                <Route 
                  path='/madaba-match'
                  element={<MadabaMatch/>}
                />
                <Route 
                  path='/privacy-policy'
                  element={<PrivacyPolicy/>}
                />
                <Route 
                  path='/csv-flashcards'
                  element={<Flashcards/>}
                />
              </Routes>

            </main>
            <Footer/>
        </div>
      </NavContextProvider>
    </Router>
  );
}

export default App;
