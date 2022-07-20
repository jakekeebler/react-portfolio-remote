import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Routes>
      <Route path="/react-portfolio-remote/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/react-portfolio-remote/about" element={<About />} />
        <Route path="/react-portfolio-remote/contact" element={<Contact />} />
        <Route path="/react-portfolio-remote/projects" element={<Projects />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
