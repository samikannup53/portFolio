export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          {/* Left */}
          <p>
            © {new Date().getFullYear()} Samikannu. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/samikannup53"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/samikannup53/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
