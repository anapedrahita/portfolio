import React from 'react';
import { Award, BookOpen, Clock } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Scrum Master",
      organization: "Seonti",
      status: "completed",
      icon: <Award className="text-teal-500" size={24} />
    },
    {
      title: "Agile Testing",
      organization: "BDG Institute",
      status: "completed",
      icon: <BookOpen className="text-blue-500" size={24} />
    },
    {
      title: "ISTQB",
      organization: "International Software Testing Qualifications Board",
      status: "in-progress",
      icon: <Clock className="text-orange-500" size={24} />
    },
    {
      title: "Fundamentos en Analítica de Datos",
      organization: "DS4A COLOMBIA",
      status: "completed",
      icon: <BookOpen className="text-purple-500" size={24} />
    },
    {
      title: "Ultimate JavaScript",
      organization: "De cero a programador experto",
      status: "completed",
      icon: <BookOpen className="text-green-500" size={24} />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-16">
            Certificaciones y Formación
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg mb-1">{cert.title}</h3>
                    <p className="text-slate-600 text-sm">{cert.organization}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {cert.status === 'completed' ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Completado</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-orange-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">En proceso</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;