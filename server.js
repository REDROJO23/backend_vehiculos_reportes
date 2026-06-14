const express = require('express');
const cors = require('cors');
const reportsRoutes = require('./routes/reports');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/reports', reportsRoutes);

// Puerto desde variable de entorno o 4000 por defecto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
