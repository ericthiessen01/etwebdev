import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact,  Hero, Navbar, Works, StarsCanvas, HireMe, Footer, FooterTop } from "./components";
import './App.css';
import { ThemeProvider } from "styled-components";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from "react";

const theme = {
  primaryColor: "#007bff",
  secondaryColor: "#ff6347",
  h1: "#000000",
};

const App = () => {
  const containerRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       
          <main className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0'>
              <Navbar />
              <Hero />
              <StarsCanvas />
            </div>

            <About />
            <Works />
            {/*<AboutMe />
            <Experience />
            <Tech />
            <Works />
            <HireMe />
        <Feedbacks />*/}
            
            <div className='relative z-0'>
              <Contact />
            </div>
            <FooterTop />
            <Footer />
            
          </main>
       
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
