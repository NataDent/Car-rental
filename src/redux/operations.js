import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ADS_URL } from 'utils/ADS_URL';

axios.defaults.baseURL = ADS_URL;

async function fetchAll(page = 1, limit = 12) {
  const data = await axios.get('/adverts', {
    params: { page, limit },
  });
  return data;
}

export const fetchAdverts = createAsyncThunk(
  'adverts',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const advert = await fetchAll(page, limit);
      return advert;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
