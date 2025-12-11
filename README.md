# 💳 CreditSmart — Simulador y Gestor de Créditos con Firebase
Desarrolladores
Miguel Ángel Oyola Álvarez
Santiago Palacio Londoño

CreditSmart es una aplicación web desarrollada con **React + Firebase**, diseñada para gestionar solicitudes de crédito en línea.  
El proyecto implementa **persistencia de datos en Firestore**, manejo de estado, operaciones **CRUD**, manejo de errores, rutas dinámicas y comunicación asíncrona con bases de datos NoSQL.

---

## 🚀 Tecnologías utilizadas

- **React.js**
- **Firebase v10+**
  - Firestore Database
- **Vite**
- **React Router DOM**
- **SweetAlert2**
- **CSS personalizado**

---

## 📦 Características principales

### ✔ Simulador de créditos  
El usuario puede:
- Buscar créditos por nombre
- Filtrar por monto, plazo o interés
- Ver tarjetas con detalles

### ✔ Solicitud de crédito  
Formulario completo que permite registrar:
- Datos personales  
- Datos laborales  
- Información del crédito solicitado  
- Cálculo de cuota mensual  
- Envío a Firestore

### ✔ Persistencia con Firestore (Base de Datos NoSQL)
- Las solicitudes se guardan en la colección **`solicitudes`**
- Los tipos de crédito se cargan desde la colección **`credits`**

### ✔ Página de Solicitudes  
- Obtiene datos en tiempo real desde Firestore  
- Muestra cada solicitud en formato de tarjeta  
- Incluye:
  - Loading mientras se cargan datos  
  - Manejo de errores si no hay internet  
  - Actualización automática al agregar nuevas solicitudes  

### ✔ Manejo de errores  
El sistema incluye:
- Mensajes al usuario cuando no hay conexión
- Control de errores en lectura y escritura
- Validación del formulario

### ✔ Variables de entorno (.env)  
- Las credenciales de Firebase están protegidas  
- El proyecto incluye **.env.example** como guía  
- `.gitignore` evita subir `.env` al repositorio  

---

## 📁 Estructura del proyecto

