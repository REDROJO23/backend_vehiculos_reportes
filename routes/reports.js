const express = require('express');
const router = express.Router();
const { getReports, addReport, updateReport, deleteReport } = require('../controllers/reportsController');

router.get('/', getReports);
router.post('/', addReport);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;