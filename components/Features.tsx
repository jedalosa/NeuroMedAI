import React from 'react';
import { Database, Stethoscope, Lock, Clock, Zap, FileText } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Diagnóstico Asistido",
    description: "Algoritmos de aprendizaje profundo que analizan imágenes y datos para sugerir diagnósticos con alta precisión.",
    icon: Stethoscope
  },
  {
    title: "Automatización Clínica",
    description: "Reduzca el tiempo de documentación en un 60% mediante transcripción y estructuración automática de notas.",
    icon: FileText
  },
  {
    title: "Seguridad de Grado Militar",
    description: "Encriptación de extremo a extremo y cumplimiento estricto de normativas HIPAA y GDPR.",
    icon: Lock
  },
  {
    title: "Interoperabilidad Total",
    description: "Se integra perfectamente con los principales sistemas EHR/EMR del mercado actual.",
    icon: Database
  },
  {
    title: "Análisis Predictivo",
    description: "Identifique pacientes en riesgo antes de que ocurran eventos críticos mediante monitoreo continuo.",
    icon: Zap
  },
  {
    title: "Optimización de Flujos",
    description: "Gestión inteligente de citas y recursos hospitalarios para reducir tiempos de espera.",
    icon: Clock
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Características</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl">
            Tecnología diseñada para salvar vidas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Nuestra plataforma unifica la potencia de la IA con la práctica médica diaria, sin fricciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <feature.icon className="w-24 h-24 text-blue-600" />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};