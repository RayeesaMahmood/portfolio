import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: "Web Development Bootcamp",
      provider: "Udemy",
      icon: "🎯",
      skills: ["Full Stack", "JavaScript", "React", "Node.js"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Python for Everybody",
      provider: "Coursera",
      icon: "🐍",
      skills: ["Python", "Data Structures", "Web Scraping", "Databases"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Frontend Development",
      provider: "Google Career Certificate",
      icon: "🚀",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      provider: "Coursera",
      icon: "💻",
      skills: ["Web Technologies", "Frontend", "Backend", "Deployment"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${cert.color}`}></div>
              
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-purple-600 font-medium">{cert.provider}</p>
                      </div>
                      <Award className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Award className="w-5 h-5" />
            <span className="text-lg font-medium">Committed to continuous learning and growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
