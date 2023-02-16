import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import About from './about/About';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import Navbar from './navbar_footer/Navbar';


function App() {

  return (
    <div className='app'>
        
        <Navbar/>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
        </Routes>
        
        
    </div>
  );
}

export default App;
