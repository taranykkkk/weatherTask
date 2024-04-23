import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
