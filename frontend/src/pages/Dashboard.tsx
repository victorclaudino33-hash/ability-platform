import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Dashboard() {
  const [status, setStatus] = useState('Verificando conexão...');

  useEffect(() => {
    api.get('/teste')
      .then((res) => setStatus(✅ ))
      .catch(() => setStatus('❌ Falha ao conectar com o Backend'));
  }, []);

  return (
    <div className=""p-6 max-w-4xl mx-auto"">
      <h1 className=""text-3xl font-bold text-blue-900 mb-4"">Ability Training Platform</h1>
      <div className=""bg-white p-4 rounded shadow border-l-4 border-blue-500"">
        <p className=""text-lg"">{status}</p>
      </div>
    </div>
  );
}