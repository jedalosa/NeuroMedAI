import React from 'react';
import { BrainCircuit, Mail, MapPin, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BrainCircuit className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl text-white">
                NeuroMed<span className="text-blue-500">AI</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-6">
              Liderando la revolución de la inteligencia artificial en el cuidado de la salud. Comprometidos con la ética, la privacidad y la excelencia médica.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Soluciones</a></li>
              <li><a href="#demo" className="hover:text-blue-400 transition-colors">Demo Interactiva</a></li>
              <li><a href="#stats" className="hover:text-blue-400 transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog Médico</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Portal de Clientes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Torre Médica Digital, Piso 15<br/>Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contacto@neuromedai.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} NeuroMed AI Solutions. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
            <a href="#" className="hover:text-white">Aviso de Seguridad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};