import React from 'react';
import { Building2, Globe, Smartphone, Server, Zap, Brain } from 'lucide-react';

const ExperienceSection = () => {
  const sectors = [
    { name: "Salud", icon: "🏥" },
    { name: "Educación", icon: "🎓" },
    { name: "Eventos", icon: "🎪" },
    { name: "Inmobiliario", icon: "🏢" },
    { name: "Financiero", icon: "💰" },
    { name: "Político", icon: "🗳️" },
    { name: "Publicitario", icon: "📢" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-16">
            Proyectos y Experiencia Relevante
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Building2 className="text-teal-500" size={28} />
                Experiencia de Alto Impacto
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-slate-800 mb-2">Sector Financiero</h4>
                  <p className="text-slate-600">Banco de Occidente, Colpatria, Davivienda</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-slate-800 mb-2">Multinacional AB InBev</h4>
                  <p className="text-slate-600 mb-2">La cervecera más grande del mundo</p>
                  <p className="text-sm text-slate-500 italic">
                    Múltiples plataformas desarrolladas tanto para cliente final como a nivel empresarial, 
                    abarcando sistemas complejos de gran escala
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-slate-800 mb-2">Casas de Desarrollo</h4>
                  <p className="text-slate-600">
                    Experiencia diversificada en múltiples sectores a través de empresas especializadas 
                    en desarrollo de software
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-slate-800 mb-4">Sectores de Experiencia</h4>
                <div className="flex flex-wrap gap-3">
                  {sectors.map((sector, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors duration-300"
                    >
                      <span className="text-lg">{sector.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{sector.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Server className="text-blue-500" size={28} />
                Metodología y Tecnología
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300">
                  <Server className="text-teal-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Pruebas de Servicios</h4>
                    <p className="text-slate-600 text-sm">Validación completa de APIs y servicios backend</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300">
                  <Globe className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Validaciones Funcionales</h4>
                    <p className="text-slate-600 text-sm">Pruebas exhaustivas de funcionalidad en entornos web</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300">
                  <Smartphone className="text-purple-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Dispositivos Reales</h4>
                    <p className="text-slate-600 text-sm">Testing en dispositivos móviles y tablets reales</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-indigo-500" size={24} />
                  <h4 className="font-bold text-slate-800">Inteligencia Artificial</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Implementación de IA para optimizar procesos de testing:
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <Zap className="text-yellow-500 mt-0.5" size={14} />
                    <span>Incremento significativo en la productividad de ejecución de pruebas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-yellow-500 mt-0.5" size={14} />
                    <span>Creación automatizada de planes de pruebas con mayor detalle y precisión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-yellow-500 mt-0.5" size={14} />
                    <span>Análisis inteligente de casos de prueba y cobertura</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200">
                <p className="text-slate-700 italic">
                  "Mis pruebas abarcan servicios, validaciones funcionales y pruebas desde dispositivos reales, 
                  siempre alineadas con los requerimientos y seguimiento del cliente, potenciadas por herramientas de IA."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;