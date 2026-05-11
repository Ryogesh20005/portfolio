import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/resume');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c]">
        <div className="w-12 h-12 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] text-white">
        <p>Failed to load portfolio data. Please ensure the backend is running.</p>
      </div>
    );
  }

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
