import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Documentación', manual: 45, ai: 10 },
  { name: 'Triaje', manual: 25, ai: 8 },
  { name: 'Diagnóstico', manual: 60, ai: 30 },
  { name: 'Admin', manual: 35, ai: 15 },
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Resultados cuantificables</h2>
            <p className="text-lg text-slate-600 mb-8">
              Nuestros clientes reportan mejoras inmediatas en eficiencia operativa y satisfacción del personal médico. Reduzca la carga del "burnout" médico.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p className="text-4xl font-bold text-blue-600 mb-1">60%</p>
                <p className="text-sm font-medium text-slate-600">Menos tiempo en papeleo</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p className="text-4xl font-bold text-blue-600 mb-1">99%</p>
                <p className="text-sm font-medium text-slate-600">Precisión en codificación</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p className="text-4xl font-bold text-blue-600 mb-1">2.5x</p>
                <p className="text-sm font-medium text-slate-600">Pacientes atendidos</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p className="text-4xl font-bold text-blue-600 mb-1">24/7</p>
                <p className="text-sm font-medium text-slate-600">Monitoreo continuo</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-[400px]">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Tiempo promedio por tarea (minutos)</h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} width={100} />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="manual" name="Método Tradicional" fill="#94a3b8" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="ai" name="Con NeuroMed AI" fill="#2563eb" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-2 text-xs text-slate-500">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                 <span>Tradicional</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                 <span>NeuroMed AI</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};