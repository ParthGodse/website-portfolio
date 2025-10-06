import { ChevronDown } from 'lucide-react';
import profilePic from '../assets/p2.jpg';
// import CornerArcs from "./Extra";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

 return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-white">
      {/* <div className="absolute inset-0 z-10 pointer-events-none">
        <CornerArcs />
      </div> */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full h-70 z-0"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C200,140 400,0 720,80 C1040,160 1240,40 1440,80 L1440,0 L0,0 Z"
          fill="url(#waveBlue)"
        />
      </svg>
  <div className="w-full px-6 md:px-10 z-10">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Left side - Text content */}
      <div className="mx-auto max-w-2xl w-full pl-30"> {/* centers the column */}
        <div className="animate-fade-in flex flex-col items-start text-left">
          <div className="mb-6 flex justify-start animate-scaleIn">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-['Helvetica'] text-black mb-6 animate-slide-up">
            Parth <span className="text-blue-600">Godse</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up animation-delay-200">
            Full-Stack Software Developer
          </p>

          <p className="text-lg text-gray-600 mb-12 animate-slide-up animation-delay-400">
            Passionate about creating elegant solutions to complex problems.
            Specializing in modern web technologies and scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600 sm:self-start">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 !bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-medium transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
          
          {/* Right side - Profile picture */}
          <div className="flex justify-center animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={profilePic}
                  alt="Parth Godse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-5xl pr-2.5 pb-2">👋</span>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
// --- Mobile-only Hero (paste below your existing Hero component) ---
export const HeroMobile = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home-mobile" className="md:hidden relative min-h-screen w-full bg-white">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full h-32 z-0"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveBlueMobile" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C200,140 400,0 720,80 C1040,160 1240,40 1440,80 L1440,0 L0,0 Z"
          fill="url(#waveBlueMobile)"
        />
      </svg>

      <div className="relative z-10 w-full px-4 pt-20 pb-18">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to Opportunities
        </div>

        <h1 className="text-4xl font-bold text-black mb-2">
          Parth <span className="text-blue-600">Godse</span>
        </h1>
        <p className="text-lg text-gray-700 mb-3">Full-Stack Software Developer</p>
        <p className="text-base text-gray-600 mb-6">
          Passionate about creating elegant solutions to complex problems. Specializing in modern
          web technologies and scalable applications.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg active:scale-[0.99] transition"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 border-2 border-black text-black rounded-lg active:scale-[0.99] transition"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
              <img src={profilePic} alt="Parth Godse" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full grid place-items-center shadow-lg">
              <span className="text-white text-3xl">👋</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="mt-10 mx-auto block"
          aria-label="Scroll to About"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};
