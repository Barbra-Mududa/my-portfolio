import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import About from './about/About';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import Navbar from './navbar_footer/Navbar';
import Project from './projects/Project';
import Blog from './blog/Blog';


function App() {

  return (
    <div className='app'>
        
        <Navbar/>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
        </Routes>
        
        
    </div>
  );
}

export default App;
