import React from 'react';

import avatar from '../assets/avatar.jpeg'; 
import { ExternalLink, CheckCircle } from 'lucide-react';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
        
          {/* Profile Photo */}
      <div className="mb-8 flex justify-center">
        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 overflow-hidden">
          <img 
            src="https://media.licdn.com/dms/image/v2/C4E03AQH4e3uLNtOufQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1594298625858?e=1756339200&v=beta&t=xg_IMiFhHTUJYg1VkxswEnQjJxQmqRk47WiuZ2nHpQs"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
      </div>
</div>
          {/* Name */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Ana María Piedrahita
          </h1>
          
          {/* Title */}
          <div className="mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-3">
            <CheckCircle size={20} className="text-teal-400" />
            <h2 className="text-xl lg:text-2xl font-semibold text-teal-100">
              Especialista en Aseguramiento de Calidad de Software
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pruebas funcionales, automatizadas y liderazgo ágil de proyectos tecnológicos
          </p>
          
          {/* CTA Button */}
          <a
            href="https://www.linkedin.com/in/ana-maria-piedrahita-palomino-59957b15b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            Ver perfil en LinkedIn
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;