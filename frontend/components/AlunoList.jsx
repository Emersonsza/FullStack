import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AlunoList() {
  const [alunos, setAlunos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/alunos');
        setAlunos(response.data);
      } catch (err) {
        console.error('Erro ao buscar alunos:', err);
        setError('Não foi possível carregar os dados dos alunos.');
      }
    };

    fetchAlunos();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <h2>Alunos Cadastrados</h2>
      {alunos.length === 0 ? (
        <p>Nenhum aluno encontrado.</p>
      ) : (
        <ul>
          {alunos.map(aluno => (
            <li key={aluno.id}>
              {aluno.nome} - {aluno.curso} ({aluno.idade} anos)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlunoList;