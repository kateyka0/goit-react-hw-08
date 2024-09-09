import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); 
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      // Припустимо, ваш бекенд має маршрут для виходу користувача
      await axios.post("/auth/logout");
      // Можливо, потрібно видалити токени з локального сховища або кукі
      localStorage.removeItem('token'); // або ваш код для видалення токена
      return; // Нічого не повертаємо, якщо вихід успішний
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);




