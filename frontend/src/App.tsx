import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process';
import Marketplaces from './components/Marketplaces';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Process />
        <Projects />
        <Marketplaces />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
