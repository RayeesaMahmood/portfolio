import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, School, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "B.E. in Computer Science",
      institution: "Lords Institute of Engineering & Technology",
      period: "2022–2026",
      status: "Current"
    },
    {
      icon: <School className="w-6 h-6" />,
      degree: "Intermediate",
      institution: "Iqbalia Junior College",
      period: "2022",
      status: "Completed"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      degree: "High School",
      institution: "Nalanda Public School-ICSE",
      period: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200 hidden md:block"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <Card className="w-full md:ml-16 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-purple-600">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg text-purple-600">
                          {edu.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                              edu.status === 'Current' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          <p className="text-purple-600 font-medium mb-1">{edu.institution}</p>
                          <p className="text-gray-500">{edu.period}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
