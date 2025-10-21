import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Rayeesa Mahmood
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 font-light">
            Passionate Web Developer & Tech Enthusiast
          </p>
        </div>

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at Lords Institute of Engineering & Technology, 
            crafting digital experiences with modern web technologies and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg" 
              className="!bg-transparent !hover:bg-transparent border-purple-400 text-purple-300 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rayeesa@example.com"
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-purple-300 cursor-pointer hover:text-white transition-colors"
          onClick={() => scrollToSection('education')}
        />
      </div>
    </section>
  );
}
