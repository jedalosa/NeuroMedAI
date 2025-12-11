import React, { useState } from 'react';
import { Sparkles, Loader2, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { generateClinicalSummary } from '../services/geminiService';
import { SummaryStatus } from '../types';

export const Demo: React.FC = () => {
  const [input, setInput] = useState("Paciente masculino de 45 años, presenta tos persistente desde hace 2 semanas. Fiebre leve nocturna. No fuma. Historial de asma en la infancia. Presión 120/80. Pulmones con ligeras sibilancias.");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<SummaryStatus>(SummaryStatus.IDLE);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setStatus(SummaryStatus.LOADING);
    try {
      const result = await generateClinicalSummary(input);
      setOutput(result);
      setStatus(SummaryStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(SummaryStatus.ERROR);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-blue-400">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold tracking-wide uppercase text-sm">Demo en Vivo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimente el poder de Gemini 2.5</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Pruebe nuestro motor de estructuración clínica. Ingrese notas desordenadas y obtenga un formato SOAP profesional instantáneamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Area */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
            <label className="block text-sm font-medium text-slate-300 mb-3 flex justify-between">
              <span>Notas Clínicas (Sin estructurar)</span>
              <button 
                onClick={() => setInput("Paciente femenina de 62 años. Dolor agudo en rodilla derecha al subir escaleras. Inflamación visible. Antecedentes de artritis reumatoide. Toma Ibuprofeno ocasionalmente. No alergias conocidas.")}
                className="text-xs text-blue-400 hover:text-blue-300 underline"
              >
                Cargar ejemplo
              </button>
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-64 bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-mono text-sm resize-none"
              placeholder="Escriba aquí las notas del paciente..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleGenerate}
                disabled={status === SummaryStatus.LOADING || !input.trim()}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === SummaryStatus.LOADING ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    Estructurar Nota
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Area */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm flex flex-col">
             <label className="block text-sm font-medium text-slate-300 mb-3">
              Resultado (Formato SOAP)
            </label>
            <div className="flex-grow bg-slate-50 rounded-xl p-6 overflow-y-auto min-h-[300px] border border-slate-200 relative">
              {status === SummaryStatus.IDLE && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                  <Sparkles className="w-12 h-12 mb-2 opacity-20" />
                  <p className="text-sm">El resultado aparecerá aquí</p>
                </div>
              )}
              {status === SummaryStatus.ERROR && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500">
                  <AlertCircle className="w-10 h-10 mb-2" />
                  <p className="font-medium">Ocurrió un error al procesar.</p>
                  <p className="text-xs text-slate-500 mt-1">Verifique su conexión o API Key.</p>
                </div>
              )}
              {output && (
                <div className="prose prose-sm max-w-none text-slate-800 whitespace-pre-line">
                  {output}
                </div>
              )}
            </div>
            {status === SummaryStatus.SUCCESS && (
              <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Procesado con éxito</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-slate-500 text-xs mt-8">
          * Disclaimer: Esta es una demostración de IA. Los resultados deben ser verificados por un profesional médico certificado. No utilizar para diagnósticos reales en esta demo.
        </p>
      </div>
    </section>
  );
};