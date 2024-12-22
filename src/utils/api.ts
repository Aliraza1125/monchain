// src/utils/api.ts
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL,
});

export const getWallets = async () => {
  try {
    const response = await api.get('/api/wallets');
    return response.data;
  } catch (error) {
    throw error;
  }
};