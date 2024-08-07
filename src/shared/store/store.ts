import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from './slices/searchResultsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: { searchResults: searchResultsReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
