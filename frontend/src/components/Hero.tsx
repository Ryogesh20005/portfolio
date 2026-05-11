import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
}

const Hero = ({ name, title }: HeroProps) => {
  const handleDownload = () => {
    window.open('http://localhost:5000/api/resume/download', '_blank');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-6"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-1.5 rounded-full glass text-sm font-medium text-violet-400 border border-violet-500/20"
        >
          Available for Opportunities
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Hi, I'm <span className="text-gradient">{name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          A <span className="text-white font-medium">{title}</span> crafting premium digital experiences with modern technology.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-full font-bold flex items-center gap-2 hover:border-white/30 transition-colors"
          >
            View Projects
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
