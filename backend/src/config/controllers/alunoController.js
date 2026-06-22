const db = require('../config/db');

const getAllAlunos = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM alunos');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
    res.status(500).json({ message: 'Erro ao buscar alunos',
    error: error.message });
  }
};
module.exports = { getAllAlunos };