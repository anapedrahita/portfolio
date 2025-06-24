import React from 'react';
import { Globe } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    {
      language: "Español",
      level: "Nativo",
      percentage: 100,
      flag: "🇪🇸"
    },
    {
      language: "Inglés",
      level: "Intermedio",
      percentage: 70,
      flag: "🇺🇸"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-16 flex items-center justify-center gap-3">
            <Globe className="text-teal-500" size={36} />
            Idiomas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{lang.language}</h3>
                    <p className="text-slate-600">{lang.level}</p>
                  </div>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between mt-2 text-sm text-slate-600">
                  <span>Nivel: {lang.level}</span>
                  <span>{lang.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;