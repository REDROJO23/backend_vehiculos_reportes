const Reports = require('../models/reportsModel');

// Obtener todos los reportes
exports.getReports = async (req, res) => {
  try {
    const data = await Reports.getAll();

    // Transformar la fecha a DD/MM/YYYY
    const datosFormateados = data.map(r => {
      if (r.fecha) {
        const fecha = new Date(r.fecha);
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const anio = fecha.getFullYear();
        return { ...r, fecha: `${dia}/${mes}/${anio}` };
      }
      return r;
    });

    res.json(datosFormateados);
  } catch (error) {
    console.error('Error en getReports:', error);
    res.status(500).json({ error: 'Error al obtener reportes', detalle: error.message });
  }
};

// Agregar un nuevo reporte
exports.addReport = async (req, res) => {
  try {
    console.log('Datos recibidos en addReport:', req.body);
    const report = req.body;
    const nuevo = await Reports.insert(report);
    res.json({ message: 'Registro agregado', data: nuevo });
  } catch (error) {
    console.error('Error en addReport:', error);
    res.status(500).json({ error: 'Error al agregar reporte', detalle: error.message });
  }
};

// Actualizar un reporte
exports.updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Datos recibidos en updateReport:', { id, body: req.body });
    const report = req.body;
    const actualizado = await Reports.update(id, report);
    res.json({ message: 'Registro actualizado', data: actualizado });
  } catch (error) {
    console.error('Error en updateReport:', error);
    res.status(500).json({ error: 'Error al actualizar reporte', detalle: error.message });
  }
};

// Eliminar un reporte
exports.deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('ID recibido en deleteReport:', id);
    await Reports.delete(id);
    res.json({ message: 'Registro eliminado' });
  } catch (error) {
    console.error('Error en deleteReport:', error);
    res.status(500).json({ error: 'Error al eliminar reporte', detalle: error.message });
  }
};
