import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { adsURL } from 'utils/adsURL';

axios.defaults.baseURL = adsURL;

axios.defaults.params = {
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
};

//  Get all ads
export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Create a new ad
export const addAdvert = createAsyncThunk(
  'adverts/addAvert',
  async (newAdvert, thunkAPI) => {
    try {
      const response = await axios.post('/adverts', newAdvert);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Delete ad
export const deleteAdvert = createAsyncThunk(
  '/adverts/deleteAdvert',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/adverts/${id}`);
      return id;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

//Update an existing ad
export const updateAdvert = createAsyncThunk(
  '/adverts/updateAdvert',
  async ({ id, img, rentalPrice, address, mileage }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/adverts/${id}`, {
        img,
        rentalPrice,
        address,
        mileage,
      });
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
