# React + Vite

CreditSmart – Aplicación Web Dinámica con React

Estudiantes:

Santiago Palacio Londoño
Miguel Ángel Oyola Álvarez



🚀 ## Descripción del Proyecto

CreditSmart es una aplicación web desarrollada con React + Vite, que transforma un diseño estático en una plataforma dinámica para la consulta, simulación y solicitud de créditos.

El proyecto aplica los principios fundamentales de:

Programación orientada a componentes

Manejo de estado con React Hooks

Navegación con React Router

Renderizado de listas dinámicas

Implementación de búsquedas en tiempo real, filtros dinámicos, y formularios controlados

Manipulación de datos en memoria

🛠️ Tecnologías Usadas

React (con Hooks)

Vite

React Router

JavaScript ES6+

HTML5 + CSS3

Node.js + npm

🧩 Funcionalidades Principales
🔹 1. Inicio – Lista Dinámica de Créditos

Los productos se cargan desde un archivo creditsData.js

Renderizado dinámico usando .map()

Componente reutilizable CreditCard.jsx

Props para enviar información a cada tarjeta

tarjeta

🔹 2. Simulador – Filtros y Búsqueda en Tiempo Real

Búsqueda por nombre

Filtro por monto máximo

Filtro por tasa de interés (menor/mayor)

Resultados actualizados automáticamente

Mensaje “No hay créditos disponibles” cuando no hay coincidencias

🔹 3. Solicitar Crédito – Formulario Controlado

Formularios construidos con useState

Validaciones en tiempo real

Cálculo automático de cuota mensual estimada

Resumen previo al envío

Solicitud almacenada temporalmente en un array

Mensaje de éxito y limpieza del formulario

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
