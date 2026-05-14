# API REST para Gestionar Cursos

Una API REST desarrollada para la gestión de cursos, estudiantes y operaciones básicas de administración académica.

Este proyecto permite realizar operaciones CRUD completas sobre cursos utilizando una arquitectura backend basada en buenas prácticas y consumo mediante peticiones HTTP.

---

## Características

-  Crear cursos
-  Obtener listado de cursos
-  Buscar cursos por ID
-  Actualizar información de cursos
-  Eliminar cursos
-  API RESTful
-  Organización modular del proyecto
-  Manejo de peticiones HTTP y respuestas JSON

---

##  Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript
- MongoDB / MySQL *(ajusta según uses)*
- Postman para pruebas

---

##  Estructura del proyecto

```bash
API-REST-para-gestionar-cursos/
│
├── controllers/
├── routes/
├── models/
├── config/
├── middlewares/
├── app.js
├── package.json
└── README.md
```


## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/noamhdez03/API-REST-para-gestionar-cursos.git
```

### Entrar al directorio

```bash
cd API-REST-para-gestionar-cursos
```

### Instalar dependencias

```bash
npm install
```

### Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
DB_URI=tu_base_de_datos
```

### Ejecutar el servidor

```bash
npm start
```

Servidor corriendo en:

```bash
http://localhost:3000
```

---

## Endpoints principales

| Método | Endpoint     | Descripción              |
| ------ | ------------ | ------------------------ |
| GET    | /courses     | Obtener todos los cursos |
| GET    | /courses/:id | Obtener curso por ID     |
| POST   | /courses     | Crear un curso           |
| PUT    | /courses/:id | Actualizar curso         |
| DELETE | /courses/:id | Eliminar curso           |

---

## Pruebas con Postman

Puedes probar los endpoints utilizando:

* Postman
* Thunder Client
* Insomnia
* Bash (Usando el curl)

Ejemplo de body para crear un curso:

```json
{
  "title": "Node.js desde cero",
  "description": "Curso completo de backend",
  "teacher": "Noah"
}
```

---

## Conceptos aplicados

* Arquitectura REST
* CRUD Operations
* Manejo de rutas
* Controladores
* Middleware
* Gestión de errores
* Respuestas JSON
* Variables de entorno

---
## Licencia

Este proyecto está bajo la licencia MIT.

---

