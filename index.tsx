import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}
