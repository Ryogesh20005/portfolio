import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

interface ProjectItem {
  name: string;
  description: string;
  tech: string;
  features: string[];
  image?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium">
            <Layers className="w-4 h-4" />
            Selected Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card group"
            >
              <div className="relative aspect-video rounded-xl mb-6 overflow-hidden bg-gradient-to-br from-violet-900/20 to-blue-900/20">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="text-gray-500 font-mono text-sm">Project Preview</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <button className="p-2 rounded-full bg-white text-black hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors">{project.name}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.split(',').map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                    {t.trim()}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
