import React from 'react';
import { Code, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="text-teal-500" size={24} />,
      title: "Pruebas Avanzadas",
      description: "Manuales, automatizadas y servicios con Postman"
    },
    {
      icon: <Target className="text-blue-500" size={24} />,
      title: "Análisis Funcional",
      description: "Diseño de casos de prueba y validación completa"
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: "Liderazgo Ágil",
      description: "Scrum Master certificada con equipos multidisciplinarios"
    },
    {
      icon: <Award className="text-orange-500" size={24} />,
      title: "Alta Calidad",
      description: "Estrategias para productos tecnológicos robustos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-16">
            Perfil Profesional
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                <span className="font-semibold text-slate-800">Ingeniera de Sistemas</span> con sólida experiencia en 
                aseguramiento de calidad de software, incluyendo pruebas manuales, automatizadas y servicios mediante Postman. 
                Especializada en análisis funcional, diseño de casos de prueba y validación en entornos web y móviles.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Líder en la implementación de estrategias de pruebas para asegurar productos tecnológicos de alta calidad. 
                <span className="font-semibold text-slate-800"> Certificada como Scrum Master</span> y con experiencia práctica 
                liderando equipos ágiles en diferentes sectores.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {highlight.icon}
                    <h3 className="font-semibold text-slate-800">{highlight.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;