import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type WeatherState = {
  data: any[];
  error: null | string;
  status: null | string;
};

const initialState: WeatherState = {
  data: [],
  error: null,
  status: null,
};

const API_KEY = '269b4f702dc62e7c854d6ded554a6812';

export const getDataWeather = createAsyncThunk(
  'weather/getDataWeather',
  async (city, { rejectWithValue }) => {
    try {
      const search_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lat={lat}&lon={lon}&exclude={part}&appid=${API_KEY}`;
      const response = await fetch(search_URL);

      if (!response.ok) {
        throw new Error('Can`t get weather data');
      }
      const data = await response.json();

      return data;
    } catch (error: any) {
      rejectWithValue(error.message);
      console.error('Ошибка при сохранении данных в Firestore:', error);
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setDataWeather: (state, action) => {
      state.data = action.payload;
    },
    clearDataWeather: (state) => {
      state.data.splice(0, state.data.length);
    },
    deleteCity: (state, action) => {
      state.data = state.data.filter((city) => city.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataWeather.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      getDataWeather.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = 'resolved';
        state.data.push(action.payload);
      },
    );
    builder.addCase(
      getDataWeather.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = 'rejected';
        state.error = action.payload;
      },
    );
  },
});
export const { setDataWeather, clearDataWeather, deleteCity } =
  weatherSlice.actions;
export default weatherSlice.reducer;
