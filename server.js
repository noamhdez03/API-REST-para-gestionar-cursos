// server.js
// Punto de entrada de la API REST de TecnoAula Formación

const express = require('express');
const app = express();
const PORT = 3000;

// ─────────────────────────────────────────────
// Middlewares globales
// ─────────────────────────────────────────────

// Permite leer el cuerpo de las peticiones en formato JSON
app.use(express.json());

// ─────────────────────────────────────────────
// Rutas
// ─────────────────────────────────────────────

// Ruta raíz: comprobación de que la API funciona
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de TecnoAula Formación funcionando correctamente' });
});

// Rutas de cursos
const cursosRouter = require('./routes/cursos.routes');
app.use('/api/cursos', cursosRouter);

// ─────────────────────────────────────────────
// Manejo de rutas no encontradas (404)
// ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// ─────────────────────────────────────────────
// Arranque del servidor
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor de TecnoAula Formación arrancado en http://localhost:${PORT}`);
  console.log('─────────────────────────────────────────');
  console.log('Endpoints disponibles:');
  console.log(`  GET    http://localhost:${PORT}/`);
  console.log(`  GET    http://localhost:${PORT}/api/cursos`);
  console.log(`  GET    http://localhost:${PORT}/api/cursos/:id`);
  console.log(`  POST   http://localhost:${PORT}/api/cursos`);
  console.log(`  PUT    http://localhost:${PORT}/api/cursos/:id`);
  console.log(`  DELETE http://localhost:${PORT}/api/cursos/:id`);
  console.log('─────────────────────────────────────────');
  console.log('Opcionales: ?nombre=xxx  |  ?nivel=Inicial|Intermedio|Avanzado');
});
