const express = require('express');
const { getAllAlunos } = require('../controllers/alunoController');
const router = express.Router();

router.get('/alunos', getAllAlunos);

module.exports = router;