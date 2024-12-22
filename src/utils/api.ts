import axios from 'axios';

const baseURL = '/api'; // Use relative path for internal API calls

export const api = axios.create({
  baseURL,
});

export const getWallets = async () => {
  try {
    const response = await api.get('/wallets');
    return response.data;
  } catch (error) {
    console.error('Error fetching wallets:', error);
    throw new Error('Failed to fetch wallets');
  }
};
