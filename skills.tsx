import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Database, Globe, Smartphone, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
      color: "bg-blue-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Express.js", "RESTful APIs", "MongoDB", "SQL"],
      color: "bg-green-500"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "npm/yarn"],
      color: "bg-purple-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: ["Responsive Design", "Progressive Web Apps", "Web APIs", "Performance Optimization"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 ${category.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Web Dev Icon */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <Code className="w-12 h-12 text-white animate-bounce" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
