# 📋 API y FRONT de ShoppingCart - Para consulta, registro y eliminacion de productos

¡Bienvenido! 🚀 Este proyecto contiene la orientacion necesaria para la gestion, diseño e implementacion de un sistema de **carrito de compras**. Además, he incluido un video tutorial 📹 que te dara una vision mas clara de lo que realize en la aplicacion.

---

## 📑 Contenido

1. [🎥 Video Explicativo](#-video-explicativo)
2. [🌐 Endpoints API](#endpoints-api)
3. [🚀 Cómo Configurar el Proyecto y Ejecutarlo](#cómo-ejecutar-los-scripts)
4. [⚠️ Notas Importantes](#notas-importantes)
5. [📋 Notas del Autor](#notas-del-autor)




---
## 🎥 Video Explicativo
A continuacion podran ver el link del video que explica cómo implemente el desarrollo y una prueba en vivo , haz clic en el siguiente enlace:

[**Ver Video Explicativo**](https://drive.google.com/file/d/1-MixcWmaAjlRStJdu_Htd5NMaLJmT3Sx/view?usp=sharing)


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
## 🚀 Cómo Configurar el Proyecto y Ejecutarlo
## Prerrequisitos

- **Asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [Node.js](https://nodejs.org/).**

- **Sigue estos pasos para ejecutar los 2 proyectos en tu entorno de desarrollo local:**

1. **Clona los repositorios en ubicaciones separadas o en la misma carpeta, no hay problema, abres una consola de git y le das los siguientes comandos**:
   ```bash
   git clone https://github.com/lpb21/SimpleShoppingCartAPI.git
   git clone https://github.com/lpb21/SimpleShoppingCartFront.git
2. **Iniciando con el back, le damos click derecho y abrir con nuestro editor favorito o abrimos la terminal estando en /SimpleShoppingCartAppi y ejecutamos:**:
    ```bash
    npm i
4. **Una vez las dependencias se terminaron de instalar, iniciamos el servidor con el siguiente comando**:
    ```bash
    npm run dev
5. **Ahora continuamos con el FRONT, una vez clonado el repositorio le damos click derecho y abrir con nuestro editor favorito o abrimos la terminal estando en /SimpleShoppingCartFront y ejecutamos**:
    ```bash
    npm i
7. **Una vez las dependencias se terminaron de instalar, iniciamos nuestro proyecto con el siguiente comando**:
    ```bash
   npm run dev

**El servidor se ejecutará en http://localhost:3000/ para el back de forma predeterminada y en http://localhost:5173 para el front. Puedes abrir este enlace en tu navegador para ver la aplicación en ejecución.**

**Navega a la aplicación:**

 **Abre tu navegador web y navega a http://localhost:5173/ para acceder a la aplicación**

---
## ⚠️ Notas Importantes

- Mi desarrollo se enfoco en un mayor porcentaje en la funcionalidad, ya que por el tiempo le realize un look and feel simple, espero les sea de agrado
- Si se llega a presentar algun problema con la instalacion, solamente bastaria con borrar los node-modules y el archivo package-lock.json y ejecutar el comando 'npm i' de nuevo

---

## 📋 Notas del Autor
- He diseñado este readme con un enfoque detallado y explicativo, con la intención de facilitar la comprensión de cada aspecto del sistema. Mi objetivo es asegurar que tanto los desarrolladores novatos como los más experimentados puedan seguir las instrucciones sin dificultad. No pretendo subestimar las capacidades de nadie; más bien, deseo proporcionar una guía clara y accesible para todos.

- Aprecio cualquier retroalimentación constructiva que pueda ayudarme a mejorar la documentación o el proyecto en general.
Muchas Gracias

