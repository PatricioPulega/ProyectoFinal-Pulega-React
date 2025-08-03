# 🛍️ Mi Tienda – E-commerce con React y Firebase

Este proyecto es una tienda online desarrollada con **React.js**, que permite navegar productos, seleccionarlos, agregarlos al carrito y realizar compras. Está totalmente integrado con **Firebase** para el almacenamiento de datos y autenticación de usuarios.

---

## 🚀 Funcionalidades

- 🔥 Conexión con Firebase Firestore para gestión de productos
- 🔐 Firebase Auth para inicio de sesión y registro de usuarios
- 🛒 Carrito persistente usando React Context (`CartContext`)
- 📦 Selector de cantidades con el componente `ItemCount`
- 🧭 Navegación fluida con React Router DOM
- 🎨 Interfaz responsive con Bootstrap

---

## 🧰 Tecnologías utilizadas

- React.js
- Firebase (Firestore & Auth)
- React Router DOM
- Context API
- Bootstrap 5
- Vite (para desarrollo y build)

---

## 🗂️ Estructura del proyecto

src/ ├── components/ │ ├── CartProvider.jsx │ ├── CartWidget.jsx │ ├── ItemListContainer.jsx │ ├── ItemDetailContainer.jsx │ ├── ItemDetail.jsx │ ├── ItemCount.jsx │ ├── CheckoutForm.jsx ├── firebase/ │ └── firebaseConfig.js ├── App.jsx ├── main.jsx

---

---

## 🧪 Cómo iniciar el proyecto

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear tu cuenta en [Firebase](https://firebase.google.com) y configurar Firestore & Auth
4. Reemplazar las credenciales en `firebase/firebaseConfig.js`
5. Ejecutar la app: `npm run dev`

---

## 🌐 Deploy en Vercel

El proyecto está desplegado en [Vercel](https://vercel.com), lo que permite visualizarlo en tiempo real desde cualquier dispositivo.

🔗 **Link de producción:** [https://proyecto-final-pulega-react1.vercel.app/](#)

### ⚙️ Variables de entorno

Se utilizaron variables `.env` para conectar con Firebase, definidas en Vercel desde el panel:  
**Project Settings → Environment Variables**  
Ejemplo:

```env
VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_auth_domain
VITE_PROJECT_ID=tu_project_id
VITE_STORAGE_BUCKET=tu_storage_bucket
VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_APP_ID=tu_app_id
🚀 Cómo hacer tu propio deploy
- Cloná el repositorio
- Configurá tu .env con credenciales de Firebase
- Creá una cuenta en Vercel y conectá tu repo de GitHub
- Definí las variables de entorno en Vercel
- Deploy automático y listo 🎉

🎯 Objetivo del proyecto
Aprender React y Firebase creando un e-commerce completo, con manejo de rutas, estado global, base de datos y autenticación. La arquitectura está pensada para escalar y mantener código reutilizable y claro.

📝 Autor
Patricio
ProyectoFinal-Pulega-React
```
