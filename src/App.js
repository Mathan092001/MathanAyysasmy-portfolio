import React, { useEffect, useState } from 'react';
import About from './components/heropage/about/about';
import Navbar from './components/heropage/heropage/navbar';
import HeroPage from './components/heropage/heropage/heropage';
import Skills from './components/heropage/skills/skills';
import Project from './components/heropage/projects/project';
import Footer from './components/heropage/footer/footer';
import Loading from './components/loading-page/Loading';
function App() {

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='bg-black'>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <div className='fade-in duration-1000 ease-in '>
            <HeroPage />
            <About />
            <Skills />
            <Project />
            <Footer />
          </div>
       </div>
      )}
    </div>
  );
}

export default App;
