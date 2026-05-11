

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold text-gradient">YR.</span>
          <p className="text-sm text-gray-500 font-light">
            © {new Date().getFullYear()} Yogesh R. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Back to top</a>
          <a href="https://github.com/Ryogesh20005" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/yogesh-r" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
