import React, { useState } from 'react';
import { Mail, Send, ExternalLink, Heart } from 'lucide-react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    const subject = 'Contacto desde la página web';
    const body = `Hola Ana María,\n\n${message}\n\nSaludos,`;
    const mailtoLink = `mailto:ana.piedrahita@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Trabajemos Juntos
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            ¿Tienes un proyecto que necesita aseguramiento de calidad? 
            Me encantaría conocer más detalles y cómo puedo ayudarte.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="text-teal-400" size={28} />
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Tu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent backdrop-blur-sm"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Enviar mensaje
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6">
                Conectemos en LinkedIn
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
                <p className="text-blue-100 mb-6">
                  Encuentra más detalles sobre mi experiencia profesional y proyectos recientes en mi perfil de LinkedIn.
                </p>
                
                <a
                  href="https://www.linkedin.com/in/ana-maria-piedrahita-palomino-59957b15b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors duration-300 group"
                >
                  Ver perfil completo
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-teal-400/30 rounded-xl">
                <div className="flex items-center justify-center gap-2 text-teal-400 mb-2">
                  <Heart size={20} />
                  <span className="font-medium">Mi filosofía</span>
                </div>
                <p className="text-blue-100 italic">
                  "Me apasiona garantizar la calidad en cada entrega tecnológica."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;