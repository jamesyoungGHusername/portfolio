//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { MadabaMatch } from './pages/MadabaMatch';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Flashcards } from './pages/Flashcards';
import Footer from './components/Footer';
import NavContextProvider from './utils/NavContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HueIq from './pages/projectDocumentation/HueIq';
import Work from './pages/work/Projects'
//
const routes = {
  portfolio: {
    path: "/portfolio",
    element: <About />,
  },
  home: {
    path: "/",
    element: <Home />,
  },
  aboutMe: {
    path: "/about_me",
    element: <About />,
  },
  contact: {
    path: "/contact",
    element: <Contact />,
  },
  work: {
    path: "/work",
    element: <Work />,
  },
  madabaMatch: {
    path: "/madaba-match",
    element: <MadabaMatch />,
  },
  privacyPolicy: {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  csvFlashcards: {
    path: "/csv-flashcards",
    element: <Flashcards />,
  },
  hueIq: {
    path: "/hue-iq",
    element: <HueIq />,
  },
};

function App() {
  return (
    <Router>
      <NavContextProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              {Object.values(routes).map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </NavContextProvider>
    </Router>
  );
}

export default App;