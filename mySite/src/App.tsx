import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import './styles/index.css';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
