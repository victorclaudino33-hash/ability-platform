import axios from 'axios';

// Em produção, isso virá da variável de ambiente do Vercel/Railway
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 30000
});