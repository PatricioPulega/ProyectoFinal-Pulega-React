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

## 🧪 Cómo iniciar el proyecto

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear tu cuenta en [Firebase](https://firebase.google.com) y configurar Firestore & Auth
4. Reemplazar las credenciales en `firebase/firebaseConfig.js`
5. Ejecutar la app: `npm run dev`

---

## 🎯 Objetivo del proyecto

> Aprender React y Firebase creando un e-commerce completo, con manejo de rutas, estado global, base de datos y autenticación. La arquitectura está pensada para escalar y mantener código reutilizable y claro.

---

## 📝 Autor

**Patricio**
# ProyectoFinal-Pulega-React
