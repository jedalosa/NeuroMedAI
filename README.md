# NeuroMed AI Solutions

![Status](https://img.shields.io/badge/Status-Activo-success)
![Version](https://img.shields.io/badge/Versión-1.0.0-blue)
![License](https://img.shields.io/badge/Licencia-Proprietaria-lightgrey)

**NeuroMed AI** es una plataforma web moderna diseñada para presentar soluciones de Inteligencia Artificial de vanguardia dirigidas al sector médico y sanitario. Este proyecto demuestra cómo la tecnología puede optimizar flujos de trabajo clínicos, mejorar la precisión diagnóstica y garantizar la seguridad de los datos.

## 📋 Descripción del Proyecto

Esta aplicación es una *Landing Page* interactiva y responsiva que sirve como punto de contacto principal para hospitales, clínicas y profesionales de la salud interesados en modernizar su infraestructura tecnológica. 

El núcleo de la demostración técnica integra la **API de Google Gemini 2.5**, permitiendo a los usuarios experimentar en tiempo real la capacidad de la IA para transformar notas clínicas desestructuradas en formatos médicos estandarizados (SOAP).

## ✨ Características Principales

*   **Diseño UI/UX Médico Profesional**: Interfaz limpia, moderna y confiable, optimizada para generar confianza en el sector salud.
*   **Demo de IA en Vivo**: Integración con el modelo `gemini-2.5-flash` para estructuración automática de notas clínicas (conversión de texto libre a formato Subjetivo, Objetivo, Análisis, Plan).
*   **Visualización de Datos**: Gráficos interactivos implementados con `Recharts` para demostrar el impacto y ROI de la solución.
*   **Diseño Totalmente Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio utilizando **Tailwind CSS**.
*   **Arquitectura Modular**: Componentes React reutilizables y tipado estricto con TypeScript.

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando las siguientes tecnologías:

*   **Frontend**: [React 19](https://react.dev/)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
*   **Inteligencia Artificial**: [Google GenAI SDK](https://ai.google.dev/) (Gemini 2.5 Flash)
*   **Iconografía**: [Lucide React](https://lucide.dev/)
*   **Visualización**: [Recharts](https://recharts.org/)
*   **Lenguaje**: TypeScript

## 🚀 Instalación y Uso

Para ejecutar este proyecto en un entorno local, asegúrese de tener configuradas las variables de entorno necesarias.

### Requisitos Previos

*   Node.js (versión 16 o superior)
*   Una API Key válida de Google Gemini AI

### Configuración de Variables de Entorno

El proyecto requiere una clave de API para la funcionalidad de demostración. La aplicación espera acceder a ella a través de `process.env.API_KEY`.

### Estructura de Archivos

```
/
├── components/       # Componentes de React (Hero, Navbar, Demo, etc.)
├── services/         # Lógica de integración con APIs (GeminiService)
├── types.ts          # Definiciones de tipos TypeScript
├── index.html        # Punto de entrada HTML
├── index.tsx         # Punto de entrada de la aplicación React
└── App.tsx           # Componente raíz
```

## ⚠️ Aviso Legal (Disclaimer)

**NeuroMed AI** es una demostración tecnológica. Las sugerencias, resúmenes y estructuraciones generadas por la Inteligencia Artificial en la sección de demostración:

1.  No constituyen un consejo médico profesional.
2.  No deben utilizarse para diagnósticos reales o tratamiento de pacientes sin supervisión.
3.  Están destinadas únicamente a fines ilustrativos sobre las capacidades de procesamiento de lenguaje natural.

## 📞 Contacto

Para consultas comerciales o soporte técnico:

*   **Email**: contacto@neuromedai.com
*   **Teléfono**: +52 (55) 1234-5678
*   **Ubicación**: Torre Médica Digital, Piso 15, CDMX.

---
© 2025 NeuroMed AI Solutions. Todos los derechos reservados.
