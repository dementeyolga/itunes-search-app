import { configureStore } from '@reduxjs/toolkit';
import { searchResultsReducer } from './slices/searchResultsSlice';
import { favoritesSliceReducer } from './slices/favoritesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchResults: searchResultsReducer,
      favorites: favoritesSliceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
