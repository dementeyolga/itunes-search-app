import { ResultCardProps } from '@/features/result-card/ui/ResultCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  data: ResultCardProps[];
}

const initialState: FavoritesState = {
  data: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<ResultCardProps>) {
      const existingCard = state.data.find(
        (card) => card.id === action.payload.id
      );

      if (!existingCard) {
        state.data.push(action.payload);
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.data = state.data.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesSliceReducer = favoritesSlice.reducer;
