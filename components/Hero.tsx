import React from 'react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Nueva tecnología Gemini 2.5 Integrada
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Medicina de precisión impulsada por <span className="text-blue-600">Inteligencia Artificial</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Transforme la atención sanitaria con algoritmos avanzados que optimizan el diagnóstico, automatizan la burocracia clínica y garantizan la seguridad de los datos del paciente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                Probar Demo Interactiva
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#features" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                Ver Características
              </a>
            </div>

            <div className="flex gap-6 pt-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>ISO 27001</span>
              </div>
               <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-500" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img 
                  src="https://picsum.photos/800/600" 
                  alt="Doctor using AI interface" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-semibold text-lg">Panel de Análisis Predictivo</p>
                    <p className="text-slate-200 text-sm">Ayudando a más de 500 centros médicos</p>
                  </div>
                </div>
             </div>
             
             {/* Floating Card */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Eficiencia Operativa</p>
                    <p className="text-xs text-green-600 font-medium">+45% este mes</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[75%]"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};