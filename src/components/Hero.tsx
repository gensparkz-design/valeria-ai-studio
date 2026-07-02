export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Valeria AI Studio
          </p>
  
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            AI Product Management
            <br />
            & Automation Studio
          </h1>
  
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-8">
            I help startups and businesses transform ideas into AI-powered
            products, build MVPs, automate workflows, create AI content,
            generate marketing visuals and launch modern digital solutions
            faster.
          </p>
  
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              AI Product Management
            </span>
  
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              MVP Development
            </span>
  
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              AI Automation
            </span>
  
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              AI Agents
            </span>
  
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              AI Content
            </span>
  
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              AI Images
            </span>
          </div>
  
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-4 text-black font-semibold transition hover:scale-105"
            >
              Book a Free Consultation
            </a>
  
            <a
              href="#projects"
              className="rounded-full border border-white/20 px-7 py-4 text-white transition hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    );
  }
