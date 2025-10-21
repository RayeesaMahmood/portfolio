import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Shield, Building, Heart } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "RERA Website",
      description: "A comprehensive resource provider platform for real estate regulatory information and services.",
      icon: <Building className="w-8 h-8" />,
      tags: ["Web Development", "Resource Management", "Responsive Design"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "SpamTracker",
      description: "An intelligent tool for detecting spam and scam websites, helping users stay safe online.",
      icon: <Shield className="w-8 h-8" />,
      tags: ["Security", "Machine Learning", "Web Safety"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "RayCare Management System",
      description: "A comprehensive hospital management queue system streamlining patient care and administrative processes.",
      icon: <Heart className="w-8 h-8" />,
      tags: ["Healthcare", "Queue Management", "Database"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-0 bg-white">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-gray-900 p-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-gray-900 p-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={18} />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
