import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface AboutProps {
  summary: string;
  skills: string[];
}

const About = ({ summary, skills }: AboutProps) => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-sm font-medium">
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Driven by passion, <br/><span className="text-gray-500">defined by results.</span></h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {summary}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex items-center gap-3 p-4"
            >
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="font-medium text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
