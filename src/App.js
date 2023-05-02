import './App.css';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Navbar } from './components/navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App scrollbar-thin scrollbar-thumb-[#1a1919] scrollbar-track-[#777272]">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
