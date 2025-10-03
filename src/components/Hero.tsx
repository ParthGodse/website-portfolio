import { ChevronDown } from 'lucide-react';
import profilePic from '../assets/p2.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

 return (
    <section id = "home" className="relative min-h-screen w-full flex items-center justify-center bg-white">
  <div className="w-full px-6 md:px-10">
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in flex flex-col items-center text-center">
            <div className="mb-6 flex justify-center animate-scaleIn">
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
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105"
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
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
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