import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './data/resume.json';

function App() {
  const data = resumeData;

  return (
    <div className="bg-[#0a0a0c] selection:bg-violet-500/30 selection:text-violet-200">
      <Navbar />
      <main>
        <Hero name={data.name} title={data.title} />
        <About summary={data.summary} skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
