//import logo from './logo.svg';
import React from 'react';
import './style.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
          <Header/>
          <main>
            <Routes>
              <Route 
                path='/portfolio'
                element={<About/>}
              />
              <Route 
                path='/'
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
            </Routes>

          </main>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
