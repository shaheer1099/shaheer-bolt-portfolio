import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroAboutSection from './components/HeroAboutSection';
import ServicesPortfolio from './components/ServicesPortfolio';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <main>
        <HeroAboutSection>
          <ServicesPortfolio />
          <Process />
          <Projects />
          <Testimonials />
          <Experience />
          <Contact />
        </HeroAboutSection>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CustomCursor />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
