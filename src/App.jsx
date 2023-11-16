import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLoader from './components/PreLoader'
import NavBar from './reusable/NavBar';
import Footer from './reusable/Footer';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {    
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,      
    });
    AOS.refresh();
  }, []);

  return (
    <>          
      <AnimatePresence mode='wait'>
        {loading ? (
          <PreLoader />
        ) : (
        <Router>
            <NavBar/>
            <Routes>              
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/about" element={<About/>} />              
              <Route path="/contact" element={<Contact/>} />   
            </Routes>
            <Footer/>
          </Router>
        )}
      </AnimatePresence>        
    </>
  )
}

export default App
