import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://651c3c01194f77f2a5af96d5.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async ({ value = '', page = 1, limit = 12 }, thunkAPI) => {
    const params = new URLSearchParams({
      make: value,
      page,
      limit,
    });

    try {
      const { data } = await axios.get(`/adverts?${params}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
