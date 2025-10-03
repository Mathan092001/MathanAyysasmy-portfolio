import React, { useEffect, useState } from 'react';
import About from './components/heropage/about/about';
import Navbar from './components/heropage/heropage/navbar';
import HeroPage from './components/heropage/heropage/heropage';
import StarField from './components/heropage/bgstarts/bgstar';
import Skills from './components/heropage/skills/skills';
import Project from './components/heropage/projects/project';
import Footer from './components/heropage/footer/footer';
import Loading from './components/loading-page/Loading';
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DHH6EC6PRR"></script>

function App() {

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DHH6EC6PRR');

  return (
    <div >
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <div className='fade-in duration-1000 ease-in '>
            <StarField starCount={100} />
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
