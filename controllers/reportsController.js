const Reports = require('../models/reportsModel');

exports.getReports = async (req, res) => {
  try {
    const data = await Reports.getAll();
    res.json(data);
  } catch (error) {
    console.error('Error en getReports:', error);
    res.status(500).json({ error: 'Error al obtener reportes', detalle: error.message });
  }
};

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