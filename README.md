# 📋 API y FRONT de ShoppingCart - Para consulta, registro y eliminacion de productos

¡Bienvenido! 🚀 Este proyecto contiene la orientacion necesaria para la gestion, diseño e implementacion de un sistema de **carrito de compras**. Además, he incluido un video tutorial 📹 que te dara una vision mas clara de lo que realize en la aplicacion.

---

## 📑 Contenido

1. [🎥 Video Explicativo](#-video-explicativo)
2. [🌐 Endpoints API](#endpoints-api)
3. [🚀 Cómo Configurar el Proyecto y Ejecutarlo](#cómo-ejecutar-los-scripts)
6. [📜 Requisitos](#requisitos)
7. [⚠️ Notas Importantes](#notas-importantes)
8. [📋 Notas del Autor](#notas-del-autor)




---
## 🎥 Video Explicativo
A continuacion podran ver el link del video que explica cómo implemente el desarrollo y una prueba en vivo , haz clic en el siguiente enlace:

[**Ver Video Explicativo**](https://drive.google.com/file/d/1lUdyJxWMRs-zNUeZkzVa15YNz7hqJmlW/view?usp=sharing)


---

## 🌐 Endpoints API

Aquí puedes detallar los **endpoints** de la API que interactúan con el sistema de carrito de compras.

### GET `HTTP://localhost:3000/v1/products`
Este endpoint permite listar todos los productos fijos
### GET `HTTP://localhost:3000/v1/cart`
Este endpoint devuelve el carrito con los productos agregados
### POST `HTTP://localhost:3000/v1/cart`
Este endpoint recibe el ID del producto y lo agrega al carrito
### DELETE `HTTP://localhost:3000/v1/cart`
Este endpoint elimina los productos del carrito una vez efectuado el pago
### DELETE `HTTP://localhost:3000/v1/cart/:id`
Este endpoint elimina el producto seleccionado del carrito.


---
## 📜 Requisitos

---
## 🚀 Cómo Configurar el Proyecto y Ejecutarlo
## Prerrequisitos

- **Asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [Node.js](https://nodejs.org/).**

- **Sigue estos pasos para ejecutar los 2 proyectos en tu entorno de desarrollo local:**

1. **Clona los repositorios en ubicaciones separadas preferiblemente**:

   ```bash
   git clone https://github.com/lpb21/SimpleShoppingCartAPI.git
   git clone https://github.com/lpb21/SimpleShoppingCartFront.git

2. **En el que dice xx navega al directorio del proyecto**:

   ```bash
   cd nexosFront
   
3. **Igual que en el paso anterior navega al directorio del proyecto xxx**:


cd nexosBack

4. **Instala las dependencias**:

   Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

   ```bash
   npm install

* Esto descargará todas las dependencias especificadas en el archivo package.json y las instalará localmente en la carpeta node_modules.


4. **Inicia el servidor**:

   Utiliza el siguiente comando para iniciar el servidor:

   ```bash
   npm run dev y npm start en el caso del front
   

**El servidor se ejecutará en http://localhost:3000/ para el back de forma predeterminada y en http://localhost:3001 para el front. Puedes abrir este enlace en tu navegador para ver la aplicación en ejecución.**

**Navega a la aplicación:**

 **Abre tu navegador web y navega a http://localhost:3000/ para acceder a la aplicación del back**

---
## ⚠️ Notas Importantes

- xxxxxx

---

## 📋 Notas del Autor
- He diseñado este readme con un enfoque detallado y explicativo, con la intención de facilitar la comprensión de cada aspecto del sistema. Mi objetivo es asegurar que tanto los desarrolladores novatos como los más experimentados puedan seguir las instrucciones sin dificultad. No pretendo subestimar las capacidades de nadie; más bien, deseo proporcionar una guía clara y accesible para todos.

- Aprecio cualquier retroalimentación constructiva que pueda ayudarme a mejorar la documentación o el proyecto en general.
Muchas Gracias

