import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroAboutSection from './components/HeroAboutSection';
import ServicesPortfolio from './components/ServicesPortfolio';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroAboutSection />
        <div className="relative isolate overflow-hidden bg-[#06080d]">
          <div
            className="absolute inset-0 -z-10 opacity-[0.075]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 -z-10 h-[900px] bg-[radial-gradient(ellipse_at_72%_0%,rgba(6,182,212,0.16),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.72),rgba(6,8,13,0))]" />
          <div className="absolute inset-x-0 top-[42%] -z-10 h-[760px] bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.09),transparent_48%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-[780px] bg-[radial-gradient(ellipse_at_82%_70%,rgba(6,182,212,0.08),transparent_46%)]" />
          <ServicesPortfolio />
          <Process />
          <Projects />
          <Testimonials />
          <Contact />
        </div>
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
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
