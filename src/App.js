import React, { useEffect, useState } from 'react';
import About from './components/heropage/about/about';
import Navbar from './components/heropage/heropage/navbar';
import HeroPage from './components/heropage/heropage/heropage';
import StarField from './components/heropage/bgstarts/bgstar';
import Skills from './components/heropage/skills/skills';
import Project from './components/heropage/projects/project';
import Footer from './components/heropage/footer/footer';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/loading-page/Loading';

function App() {

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Navbar />
          <div className='fade-in duration-1000 ease-in '>
            <StarField starCount={100} />
            <HeroPage />
            <About />
            <Skills />
            <Project />
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
