import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface Tecnico {
  id: number;
  nome: string;
  cpf: string;
  base: string;
  status: string;
}

export default function Tecnicos() {
  const [tecnicos, setTecnicos] = useState<Tecnico[]>([]);

  useEffect(() => {
    api.get('/tecnicos')
      .then((res) => setTecnicos(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className=""p-6 max-w-4xl mx-auto"">
      <h2 className=""text-2xl font-bold mb-4"">Lista de Técnicos</h2>
      <table className=""w-full text-left border-collapse bg-white shadow rounded"">
        <thead>
          <tr className=""bg-gray-100 border-b"">
            <th className=""p-3"">ID</th>
            <th className=""p-3"">Nome</th>
            <th className=""p-3"">CPF</th>
            <th className=""p-3"">Base</th>
            <th className=""p-3"">Status</th>
          </tr>
        </thead>
        <tbody>
          {tecnicos.map((t) => (
            <tr key={t.id} className=""border-b hover:bg-gray-50"">
              <td className=""p-3"">{t.id}</td>
              <td className=""p-3"">{t.nome}</td>
              <td className=""p-3"">{t.cpf}</td>
              <td className=""p-3"">{t.base}</td>
              <td className=""p-3"">{t.status}</td>
            </tr>
          ))}
          {tecnicos.length === 0 && (
            <tr><td colSpan={5} className=""p-4 text-center text-gray-500"">Nenhum técnico cadastrado.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}