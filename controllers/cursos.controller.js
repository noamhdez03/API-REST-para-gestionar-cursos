// controllers/cursos.controller.js
// Lógica de negocio para gestionar los cursos

const cursos = require('../data/cursos');

// Contador para generar IDs únicos
let nextId = cursos.length + 1;

// ─────────────────────────────────────────────
// GET /api/cursos
// Obtener todos los cursos (con filtros opcionales)
// ─────────────────────────────────────────────
const obtenerCursos = (req, res) => {
  const { nombre, nivel } = req.query;
  let resultado = [...cursos];

  // Filtro opcional por nombre (búsqueda parcial, sin distinguir mayúsculas)
  if (nombre) {
    resultado = resultado.filter(c =>
      c.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  // Filtro opcional por nivel
  if (nivel) {
    resultado = resultado.filter(c =>
      c.nivel.toLowerCase() === nivel.toLowerCase()
    );
  }

  res.json(resultado);
};

// ─────────────────────────────────────────────
// GET /api/cursos/:id
// Obtener un curso por ID
// ─────────────────────────────────────────────
const obtenerCursoPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const curso = cursos.find(c => c.id === id);

  if (!curso) {
    return res.status(404).json({
      error: `No se encontró ningún curso con el ID ${id}`
    });
  }

  res.json(curso);
};

// ─────────────────────────────────────────────
// POST /api/cursos
// Crear un nuevo curso
// ─────────────────────────────────────────────
const crearCurso = (req, res) => {
  const { nombre, descripcion, duracion, nivel, precio } = req.body;

  // Validación: campos obligatorios
  if (!nombre || !descripcion || !duracion) {
    return res.status(400).json({
      error: 'Los campos nombre, descripcion y duracion son obligatorios'
    });
  }

  // Validación: nivel debe ser uno de los valores permitidos (si se envía)
  const nivelesPermitidos = ['Inicial', 'Intermedio', 'Avanzado'];
  if (nivel && !nivelesPermitidos.includes(nivel)) {
    return res.status(400).json({
      error: `El campo nivel debe ser uno de: ${nivelesPermitidos.join(', ')}`
    });
  }

  // Validación: precio debe ser un número positivo (si se envía)
  if (precio !== undefined && (typeof precio !== 'number' || precio < 0)) {
    return res.status(400).json({
      error: 'El campo precio debe ser un número positivo'
    });
  }

  const nuevoCurso = {
    id: nextId++,
    nombre,
    descripcion,
    duracion,
    nivel: nivel || 'Inicial',
    precio: precio ?? 0
  };

  cursos.push(nuevoCurso);

  res.status(201).json({
    mensaje: 'Curso creado correctamente',
    curso: nuevoCurso
  });
};

// ─────────────────────────────────────────────
// PUT /api/cursos/:id
// Modificar un curso existente
// ─────────────────────────────────────────────
const modificarCurso = (req, res) => {
  const id = parseInt(req.params.id);
  const indice = cursos.findIndex(c => c.id === id);

  if (indice === -1) {
    return res.status(404).json({
      error: `No se encontró ningún curso con el ID ${id}`
    });
  }

  const { nombre, descripcion, duracion, nivel, precio } = req.body;

  // Validación: nivel permitido (si se envía)
  const nivelesPermitidos = ['Inicial', 'Intermedio', 'Avanzado'];
  if (nivel && !nivelesPermitidos.includes(nivel)) {
    return res.status(400).json({
      error: `El campo nivel debe ser uno de: ${nivelesPermitidos.join(', ')}`
    });
  }

  // Actualizar solo los campos que vienen en el body
  const cursoActualizado = {
    ...cursos[indice],
    ...(nombre     !== undefined && { nombre }),
    ...(descripcion !== undefined && { descripcion }),
    ...(duracion   !== undefined && { duracion }),
    ...(nivel      !== undefined && { nivel }),
    ...(precio     !== undefined && { precio })
  };

  cursos[indice] = cursoActualizado;

  res.json({
    mensaje: 'Curso actualizado correctamente',
    curso: cursoActualizado
  });
};

// ─────────────────────────────────────────────
// DELETE /api/cursos/:id
// Eliminar un curso por ID
// ─────────────────────────────────────────────
const eliminarCurso = (req, res) => {
  const id = parseInt(req.params.id);
  const indice = cursos.findIndex(c => c.id === id);

  if (indice === -1) {
    return res.status(404).json({
      error: `No se encontró ningún curso con el ID ${id}`
    });
  }

  const cursoEliminado = cursos.splice(indice, 1)[0];

  res.json({
    mensaje: 'Curso eliminado correctamente',
    curso: cursoEliminado
  });
};

module.exports = {
  obtenerCursos,
  obtenerCursoPorId,
  crearCurso,
  modificarCurso,
  eliminarCurso
};
