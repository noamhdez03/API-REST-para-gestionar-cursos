// routes/cursos.routes.js
// Definición de rutas para el recurso "cursos"

const express = require('express');
const router = express.Router();

const {
  obtenerCursos,
  obtenerCursoPorId,
  crearCurso,
  modificarCurso,
  eliminarCurso
} = require('../controllers/cursos.controller');

// GET    /api/cursos          → Todos los cursos (admite ?nombre=... y ?nivel=...)
// GET    /api/cursos/:id      → Un curso concreto
// POST   /api/cursos          → Crear nuevo curso
// PUT    /api/cursos/:id      → Modificar curso existente
// DELETE /api/cursos/:id      → Eliminar curso

router.get('/',    obtenerCursos);
router.get('/:id', obtenerCursoPorId);
router.post('/',   crearCurso);
router.put('/:id', modificarCurso);
router.delete('/:id', eliminarCurso);

module.exports = router;
