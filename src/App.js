import './App.css';
import Cv from './components/cv/Cv';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skill from './components/skill/Skill';

function App() {
  return (
    <>
      <Header />

      <Hero />
      <Skill />
      <Cv />

      <Projects />

      <Footer />
    </>
  );
}

export default App;
