import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://651c3c01194f77f2a5af96d5.mockapi.io';

// Операция для загрузки объявлений
async function fetchAll(page = 1, limit = 12) {
  const { data } = await axios.get('/adverts', {
    params: {
      page,
      limit,
    },
  });
  return data;
}
export const getAdverts = createAsyncThunk(
  'adverts',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const advert = await fetchAll(page, limit);
      return advert;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Операция для фильтрации объявлений по бренду
export const getFilteredAds = createAsyncThunk(
  'adverts/getFilteredAds',
  async (brand, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/catalog?make=${brand}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
